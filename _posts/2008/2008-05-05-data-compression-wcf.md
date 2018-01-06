---
layout: post
title: 'Data Compression in WCF'
background: /images/posts/2008/data-compression-wcf.png
tags: [ WCF ]

exampleId: 1mub2sntWXHsJZqNRl6o4HjmNzlR7aYj-
msdnArticle1: https://docs.microsoft.com/en-us/dotnet/framework/wcf/samples/custom-message-encoder-compression-encoder
msdnArticle2: https://msdn.microsoft.com/ru-ru/magazine/ee310108.aspx
allen1: https://blogs.msdn.microsoft.com/drnick/2006/05/09/building-a-custom-message-encoder-to-record-throughput-part-1/
allen2: https://blogs.msdn.microsoft.com/drnick/2006/05/10/building-a-custom-message-encoder-to-record-throughput-part-2/
allen3: https://blogs.msdn.microsoft.com/drnick/2006/05/15/building-a-custom-message-encoder-to-record-throughput-part-3/
---

Недавно мне пришлось решать обозначенную задачу. Честно говоря, вопрос о сжатии трафика в WCF
поднимался ранее, но как такового решения, на мой взгляд, найти так и не удалось. Знающие люди
сразу могут сказать, что проблема давно решена стандартными средствами – написанием собственного
Encoder'а сообщений. Примером тому может служить [статья в MSDN]({{page.msdnArticle1}}) и неоднократные
посты Nicholas Allen ([1]({{page.allen1}}), [2]({{page.allen2}}), [3]({{page.allen3}})). Но все, кто,
так или иначе, сталкивался с подобным решением, знает, что оно довольно нетривиально, как в плане
реализации, так и в плане интеграции (применения).

<!--more-->

Я не буду подробно описывать этот подход (ибо это не раз сделали до меня), лишь перечислю общие
моменты, с которыми сталкивается разработчик при написании собственного кодировщика сообщений:

* Реализация собственного `MessageEncoder`
* Реализация фабрики `MessageEncoderFactory`
* Реализация элемента привязки `MessageEncodingBindingElement`

После этого, чтобы все заработало, нужно было использовать `CustomBinding`. Последнее означает, что
использование таких привычных нам привязок, как например, `WSHttpBinding`, `NetTcpBinding` и т.д.,
становится невозможным, поскольку у них имеются собственные кодировщики. В связи с этим, при создании
`CustomBinding` указываются два элемента `MessageEncodingBindingElement`: один – реализация вашего
кодировщика, другой – описывает транспорт, поверх которого вы хотите осуществлять работу (HTTP, TCP
и т.д.).

Теперь, думаю, вполне ясно, что меня смутило в предложенной методике. Далее я изложу суть собственного
подхода. Начну, пожалуй, с небольшой иллюстрации.

{% include postImg.html id='data-compression-wcf.png' %}

Клиент, обращаясь к сервису, генерирует запрос (request). На каждый такой запрос (если обращение было
не к "one-way" операции) сервис генерирует соответствующий ответ (reply). И запрос, и ответ упаковываются
в сообщение, после чего оно передается через определенный транспорт (HTTP, TCP и т.д.) по сети.

Если к представленной схеме применить логику сжатия, то она должна выполняться непосредственно перед
отправкой сообщения. Вполне очевидно, что перед отправкой (before send) сообщение необходимо сжать,
а после получения (after receive) – распаковать. Желательно, чтобы весь этот процесс происходил
незаметно как для клиента, так и для сервиса, дабы не усложнять логику их работы.

Технология WCF не была бы столь замечательной, если не предоставляла нам множество точек расширения.
Более подробно возможности расширения были рассмотрены в статье [Аарона Сконнарда]({{page.msdnArticle2}}).

Чтобы реализовать такое "прозрачное" кодирование-декодирование сообщений я использовал инспектор
сообщений. Это одна из точек расширения WCF, которая позволяет перехватывать и модифицировать все
входящие и исходящие сообщения (вне зависимости от операции).

Интерфейсы инспектора для клиента (прокси) и сервиса (диспетчера) отличаются. Инспектор сообщений
диспетчера `IDispatchMessageInspector` поддерживает два метода: `AfterReceiveRequest()` и `BeforeSendReply()`,
которые представляют точки перехвата сообщения после получения запроса и перед отправкой ответа соответственно.
Инспектор сообщений клиента `IClientMessageInspector` также поддерживает два метода: `AfterReceiveReply()`
и `BeforeSendRequest()` – точки перехвата сообщения после получения ответа и перед отправкой запроса
соответственно.

Чтобы не быть голословным, сразу приведу исходный код реализации обеих инспекторов:

```csharp
public class MessageInspector : IDispatchMessageInspector,
                                IClientMessageInspector
{
    public MessageInspector(Compress compress = Compress.None)
    {
        _compress = compress;
    }


    private readonly Compress _compress;


    // IDispatchMessageInspector Members

    public object AfterReceiveRequest(ref Message request,
                                      IClientChannel channel,
                                      InstanceContext instanceContext)
    {
        if ((_compress & Compress.Request) == Compress.Request)
        {
            request = DecompressMessage(request);
        }

        return null;
    }

    public void BeforeSendReply(ref Message reply,
                                object correlationState)
    {
        if ((_compress & Compress.Reply) == Compress.Reply)
        {
            reply = CompressMessage(reply);
        }
    }


    // IClientMessageInspector Members

    public void AfterReceiveReply(ref Message reply,
                                  object correlationState)
    {
        if ((_compress & Compress.Reply) == Compress.Reply)
        {
            reply = DecompressMessage(reply);
        }
    }

    public object BeforeSendRequest(ref Message request,
                                    IClientChannel channel)
    {
        if ((_compress & Compress.Request) == Compress.Request)
        {
            request = CompressMessage(request);
        }

        return null;
    }


    private Message CompressMessage(Message message)
    {
        // Compress the message body
        byte[] data = GZipCompressor.Compress(GetBodyContents(message));

        // Rewrite the message body
        MemoryStream ms = new MemoryStream();
        XmlDictionaryWriter bodyWriter = XmlDictionaryWriter.CreateBinaryWriter(ms);
        bodyWriter.WriteStartElement("CompressedData");
        bodyWriter.WriteAttributeString("Algorithm", "gzip");
        bodyWriter.WriteBase64(data, 0, data.Length);
        bodyWriter.WriteEndElement();
        bodyWriter.Flush();
        ms.Position = 0;

        return CreateMessage(message, XmlDictionaryReader.CreateBinaryReader(ms, XmlDictionaryReaderQuotas.Max));
    }

    private Message DecompressMessage(Message message)
    {
        // Decompress the message body
        XmlDictionaryReader bodyReader = XmlDictionaryReader.CreateBinaryReader(GetBodyContents(message), XmlDictionaryReaderQuotas.Max);
        bodyReader.MoveToStartElement();
        byte[] data = GZipCompressor.Decompress(bodyReader.ReadElementContentAsBase64());

        return CreateMessage(message, XmlDictionaryReader.CreateBinaryReader(data, XmlDictionaryReaderQuotas.Max));
    }


    private byte[] GetBodyContents(Message message)
    {
        MemoryStream ms = new MemoryStream();
        XmlDictionaryWriter bodyWriter = XmlDictionaryWriter.CreateBinaryWriter(ms);
        message.WriteBodyContents(bodyWriter);
        bodyWriter.Flush();
        ms.Position = 0;
        return ms.ToArray();
    }

    private Message CreateMessage(Message prototype, XmlReader body)
    {
        Message msg = Message.CreateMessage(prototype.Version, null, body);
        msg.Headers.CopyHeadersFrom(prototype);
        msg.Properties.CopyProperties(prototype.Properties);
        return msg;
    }
}
```

Класс `MessageInspector` реализует интерфейсы обеих инспекторов – клиента и сервиса. Конструктор
`MessageInspector` может принимать параметр Compress, который определяет, что нужно сжимать:

* `None` – сообщения не сжимаются (по умолчанию)
* `Reply` – сжимаются только ответы (полезно при загрузке больших данных на сервер)
* `Request` – сжимаются только запросы (полезно при получении больших данных от сервера)
* `Reply | Request` – сжимаются и запросы и ответы

При реализации методов сжатия и распаковки сообщения используется класс `GZipCompressor`.
Это моя собственная реализация `gzip`-архиватора, построенного на основе open-source библиотеки
[ICSharpCode.SharpZipLib](https://github.com/icsharpcode/SharpZipLib).

Для того чтобы применить логику работы инспекторов, я реализовал атрибут поведения `MessageCompressionAttribute`:

```csharp
public class MessageCompressionAttribute : Attribute,
                                           IEndpointBehavior,
                                           IServiceBehavior
{
    public MessageCompressionAttribute(Compress compress = Compress.None)
    {
        _compress = compress;
    }


    private readonly Compress _compress;


    // IEndpointBehavior Members

    void IEndpointBehavior.AddBindingParameters(
        ServiceEndpoint endpoint,
        BindingParameterCollection bindingParameters)
    {
    }

    void IEndpointBehavior.ApplyClientBehavior(
        ServiceEndpoint endpoint,
        ClientRuntime clientRuntime)
    {
        clientRuntime.MessageInspectors.Add(new MessageInspector(Compress));
    }

    void IEndpointBehavior.ApplyDispatchBehavior(
        ServiceEndpoint endpoint,
        EndpointDispatcher endpointDispatcher)
    {
        endpointDispatcher.DispatchRuntime.MessageInspectors.Add(new MessageInspector(Compress));
    }

    void IEndpointBehavior.Validate(
        ServiceEndpoint endpoint)
    {
    }


    // IServiceBehavior Members

    void IServiceBehavior.AddBindingParameters(
        ServiceDescription serviceDescription,
        ServiceHostBase serviceHostBase,
        Collection<ServiceEndpoint> endpoints,
        BindingParameterCollection bindingParameters)
    {
    }

    void IServiceBehavior.ApplyDispatchBehavior(
        ServiceDescription serviceDescription,
        ServiceHostBase serviceHostBase)
    {
        foreach (ChannelDispatcher currentDispatcher in serviceHostBase.ChannelDispatchers)
        {
            foreach (EndpointDispatcher endpoint in currentDispatcher.Endpoints)
            {
                endpoint.DispatchRuntime.MessageInspectors.Add(new MessageInspector(Compress));
            }
        }
    }

    void IServiceBehavior.Validate(
        ServiceDescription serviceDescription,
        ServiceHostBase serviceHostBase)
    {
    }
}
```

Чтобы механизм сжатия трафика начал работать, достаточно применить соответствующее поведение на сервисе:

```csharp
[MessageCompression(Compress.Reply | Compress.Request)]
public class SomeService : ISomeContract
{
    // ...
}
```

и на клиенте:

```csharp
ChannelFactory<ISomeContract> factory = new ChannelFactory<ISomeContract>("");
factory.Endpoint.Behaviors.Add(new MessageCompressionAttribute(Compress.Reply | Compress.Request));
ISomeContract proxy = factory.CreateChannel();
// ...
```

Как вы успели заметить, сжатие трафика включается одной строчкой и не накладывает никаких ограничений
на используемые привязки транспорта. Учитывая возможность определить соответствующее поведение (behavior)
в конфигурационном файле, код клиента и сервиса можно вообще оставить без изменений.

В заключении хотел бы отметить, что эффективность сжатия прежде зависит от типа передаваемых данных
и используемого алгоритма сжатия, поэтому вы должны сами решать как и где можно применить данную
методику. 

# Ссылки

* {% include googleFile.html name='Примеры кода' id=page.exampleId %}
* [Custom Message Encoder: Compression Encoder]({{page.msdnArticle1}})
* [Extending WCF with Custom Behaviors, Aaron Skonnard, December 2007]({{page.msdnArticle2}})
* [Building A Custom Message Encoder to Record Throughput, Part 1]({{page.allen1}})
* [Building A Custom Message Encoder to Record Throughput, Part 2]({{page.allen2}})
* [Building A Custom Message Encoder to Record Throughput, Part 3]({{page.allen3}})
* [ICSharpCode.SharpZipLib](https://github.com/icsharpcode/SharpZipLib)
