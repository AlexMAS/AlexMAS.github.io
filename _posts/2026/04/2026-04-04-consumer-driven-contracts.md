---
layout: post
title: Consumer-Driven Contracts
date: 2026-04-04
tags: tip
categories: post
thumbnail: /assets/img/blog/2026/2026-04-04-consumer-driven-contracts.png
---

Относительно давно интересуюсь темой Consumer-Driven Contracts и тестированием контрактов. В своём текущем проекте начал пробовать использовать [Pact](https://pact.io/) (и он уже помог найти несколько багов). И вот недавно мне попалась интересная подборка ссылок на эту тему.

![](/assets/img/blog/2026/2026-04-04-consumer-driven-contracts.png)

Скажу честно, мне не удалось посмотреть весь найденный материал, но зато я актуализировал ссылки из [оригинальной статьи](https://gist.github.com/michaellihs/e302a4a8450ca28cbd51f56968157e45). Результат решил оставить у себя на странице, чтобы никуда не пропало.

От себя лично добавлю, что для входа в тему лучше почитать соответствующие главы из книги "[Microservices Patterns](https://www.ozon.ru/search/?from_global=true&text=Microservices+Patterns%2C+Chris+Richardson)" (Chris Richardson). Недавно вышло [2-е издание](https://microservices.io/post/architecture/2025/06/26/announcing-meap-microservices-patterns-2nd-edition.html), а 1-е есть в русском переводе. Книга хорошо и пошагово разбирает многие нюансы разработки микросервисов, включая тестирование. Особенно полезно, если вы ведёте разработку на Java-стеке.

Более краткий и универсальный вариант изучения – это [документация Pact]([https://pact.io/](https://docs.pact.io/)). Pact поддерживает [множество языков](https://docs.pact.io/implementation_guides/overview) и, кажется, в своей документации они собрали самую лучшую и актуальную информацию на тему CDC. Кстати, иллюстрация к посту как раз с их сайта.

***
## Blog Posts

* [Martin Fowler: "Consumer-Driven Contracts: A Service Evolution Pattern" (2006)](https://martinfowler.com/articles/consumerDrivenContracts.html)
* [Tom Hombergs: 7 Reasons to Choose Consumer-Driven Contract Tests Over End-to-End Tests (2017)](https://reflectoring.io/7-reasons-for-consumer-driven-contracts/)
* [Q&A with Marcin Grzejszczak on Spring Cloud Contract](https://www.infoq.com/news/2017/04/spring-cloud-contract)
* [Consumer Driven Contracts with Jackal](http://tech.findmypast.com/jackal-consumer-driven-contract-testing/)
* [Application Pattern: Consumer Driven Contracts](https://www.continuousdeliveryconsulting.com/blog/application-pattern-consumer-driven-contracts/)
* [Simplifying Micro-Service testing with Pacts](https://dius.com.au/2014/05/20/simplifying-microservice-testing-with-pacts/)
* [Stackoverflow: Contract-First vs. TDD](https://stackoverflow.com/questions/481312/why-is-design-by-contract-not-so-popular-compared-to-test-driven-development)
* [Scalable Integration Testing for Microservices Deployments (2017)](https://medium.com/nmc-techblog/scalable-integration-testing-for-microservices-deployments-e03e29dd1280)

## Slides

* [Consumer Driven Contracts and your Microservice Architecture](https://www.slideshare.net/MarcinGrzejszczak/consumer-driven-contracts-and-your-microservice-architecture-83680416)
* [BDD-Driven Microservices](https://www.slideshare.net/wakaleo/bdddriven-microservices)
* [Marcin Grzejszczak, Adib Saikali: Consumer Driven Contract Workshops (2017)](https://docs.google.com/presentation/d/1xvzdV0julkKwTz2R5Z8Ra8jYRjBy0qfhPbcKEFjaa8M/edit#slide=id.g1f5c64566b_0_0)
* [Marcin Grzejszczak: Consumer Driven Contracts To Enable API Evolution (2017)](https://www.slideshare.net/MarcinGrzejszczak/consumer-driven-contracts-to-enable-api-evolution-geecon)
* [Pacts to the rescue (2015)](https://www.slideshare.net/bethesque/pact-44565612)

## Videos

* [Consumer Driven Contracts with Spring Cloud Contract (2017)](https://www.youtube.com/watch?v=iyNzYOcuU4I)
* [Marcin Grzejszczak, Adib Saikali: Consumer Driven Contracts and Your Microservice Architecture (2017)](https://youtu.be/JEmpIDiX7LU)
* [Verifying Microservice Integrations with Contract Testing - Atlassian Summit 2016](https://www.youtube.com/watch?v=-6x6XBDf9sQ)
* [Pact by Ronald Holshausen (2016)](https://www.youtube.com/watch?v=h-79QmIV824)
* [Webinar: Consumer Driven Contracts and Your Microservice Architecture (2016)](https://www.youtube.com/watch?v=4fJiz0woxAc)
* [Consumer-Driven Contracts: Avoid Microservices Integration Hell! (2016)](https://www.youtube.com/watch?v=rHDyvnp5x3w)
* [Alon Pe'er: Move Fast and Consumer Driven Contract Test Things](https://www.youtube.com/watch?v=nQ0UGY2-YYI)

## Tutorials

* [Pact 101 – Getting started with Pact and Consumer Driven Contract Testing]([https://dius.com.au/2016/02/03/microservices-pact/](https://dius.com.au/2016/02/03/pact-101-getting-started-with-pact-and-consumer-driven-contract-testing/))
* [How to test Microservice Integration with Pact](https://codefresh.io/blog/how-to-test-microservice-integration-with-pact/)

## Frameworks

* [Pact](https://pact.io/)
* [Spring Cloud Contract (JVM)](https://cloud.spring.io/spring-cloud-contract/)

## Books

* [Microservices Patterns, Chris Richardson (2025)](https://microservices.io/post/architecture/2025/06/26/announcing-meap-microservices-patterns-2nd-edition.html)
