---
layout: post
title: 'Metadata & AOP'
background: /images/posts/2011/metadata-aop.png
tags: [ AOP, dotnetconf ]

videoId: 44292318
slideId: 0B29JUIreQUFsYTI5MGNiZjktMDVlNy00MmQ3LTg2OGItYTQ2YTY0NTgyYzEw
exampleId: 1fNDP8ZiVF_wihwuGG-twCRvrGAwFgAR0
---

Сегодня прошла [3-я конференция .NET-разработчиков](http://dotnetconf.ru/). На мой взгляд, все
получилось довольно позитивно. Хотелось бы поблагодарить всех участников конференции, отдельно –
слушателей моего доклада. Надеюсь, что понравилось. Ниже приведены ссылки на презентацию моего
выступления и исходный код с примерами. Эта же презентация, а также видео самого доклада будут
доступны чуть позже на сайте конференции. Также позволю себе дополнить презентацию очень интересными
и важными вопросами, которые, к сожалению, были вынесены за рамки обсуждения.

<!--more-->

{% include vimeoPlayer.html id=page.videoId %}

{% include googleSlide.html id=page.slideId %}

**Q: Почему вы использовали [Unity](https://github.com/unitycontainer/unity)?**

**A:** Дело в том, что [Unity](https://github.com/unitycontainer/unity) реализует механизм
_подачи аспектов через перехватчики_. Аналогичную концепцию реализует [Spring.NET](http://www.springframework.net)
в [части](http://www.springframework.net/doc-latest/reference/html/aop-quickstart.html)
[AOP](http://en.wikipedia.org/wiki/Aspect-oriented_programming), поэтому для демонстрации это было
не принципиально. Отвечая на данный вопрос, было бы правильней ответить, почему была выбрана концепция
подачи аспектов через перехватчики в качестве основной. Дело в том, что при таком подходе класс,
перехват методов которого мы осуществляем, и аспект никак не связаны друг с другом, поскольку связь
между ними устанавливается на этапе инициализации приложения _в одном месте_. Как следствие – можно
достаточно просто включить или отключить интересующее нас поведение. Если говорить о Unity, то данную
связь можно установить в _конфигурационном файле_, не меняя код самого приложения. Поэтому данный
подход достаточно просто реализовать в проектах, в которых используется какая-либо
[DI](http://en.wikipedia.org/wiki/Dependency_inversion_principle)-инфраструктура, в частности,
различного рода контейнеры зависимостей. В противовес первому подходу существует другой подход –
_подача через атрибуты_, когда классы или методы помечаются атрибутами, которые инкапсулируют логику
некоторого аспектов. Впоследствии эти атрибуты анализируются некоторым инфраструктурным сервисом,
который производит вызов аспектов в нужное время и нужном месте. Основным минусом такого решения
является жесткая связность между классом и аспектом, который в него внедряется. Другим малоприятным
фактом является то, что при таком подходе мы не можем добавить или удалить поведение "просто",
то есть не меняя кода программы, а если таких мест в приложении достаточно много, то это может занять
очень много времени. Концепции подачи через атрибуты придерживаются разработчики
[PostSharp](http://www.sharpcrafters.com/), [Aspect.NET](http://aspectdotnet.codeplex.com/), а также
некоторых других библиотек. Однако, в защиту последнего следует сделать важное замечание. Каждый
инструмент ориентирован на решение своего круга задач, поэтому в вопросах выбора инструмента не нужно
быть слишком категоричным. Если в вашем случае решение с использованием атрибутов наиболее эффективно,
то почему бы и нет. Более того, зачатую оказывается эффективным "микс" из нескольких концепций
(конечно, все в рамках разумного).

**Q: Увеличивается ли время выполнения при использовании АОП?**

**A:** Время выполнения увеличивается ровно на столько, сколько будут выполняться все аспекты в целом,
связанные с данной _точкой слияния_. При прочих равных условиях это время будет незначительно отличаться
от того, если бы мы поместили код аспекта непосредственно в тело перехватываемого метода. Между тем,
время выполнения можно уменьшить, используя _асинхронные аспекты_. Об этом не было сказано в рамках
моего доклада и за данную идею отдельное спасибо [Сергею Звездину](http://blog.zwezdin.com). Суть
асинхронных аспектов заключается в том, что они выполняются асинхронно, после того, как пользователь
получит результат. Однако в таком решении имеются "подводные камни". Если перехватываемый метод
вызывается довольно интенсивно, это может привести к большой загруженности сервера. Тем не менее,
данную проблему также можно решить, ограничив используемые ресурсы.

Если будут еще вопросы, пишите :)

# Ссылки

* {% include googleFile.html name='Примеры кода' id=page.exampleId %}