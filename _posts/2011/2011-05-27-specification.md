---
layout: post
title: 'Data Access Layer & Specification'
background: /images/posts/2011/specification.jpg
tags: [ DevCon, OOP, Entity Framework, LINQ ]

videoId: qkM_BPwRoiA
slideId: 1EF-OLoFqfZssadxoy3U6jgNmVeXtVBgK
---

Сегодня завершилась конференция для разработчиков программного обеспечения
[DevCon'11](https://www.techdays.ru/series/devcon_11). На конференции было представлено множество
интересных докладов, получено немало положительных эмоций. Помимо основных докладов к дню открытия
конференции на сайте [techdays.ru](http://www.techdays.ru) был опубликован ряд видео докладов по
ключевым темам. Хочу представить вашему вниманию свой доклад.

<!--more-->

Доклад посвящен практическому применению шаблона "[Спецификация](http://en.wikipedia.org/wiki/Specification_pattern)",
в частности рассмотрен вопрос построения уровня доступа к данным на базе указанного шаблона с
использованием существующих LINQ-провайдеров. Первая треть доклада теоретическая, раскрывает суть
шаблона и область его применения. Во второй части рассмотрена суть технического решения. Третья часть
посвящена построению Web-клиента на базе [ASP.NET MVC 3](http://www.asp.net/mvc/mvc3) и вопросу
настраиваемых фильтров данных.

{% include youtubePlayer.html id=page.videoId %}

{% include googleSlide.html id=page.slideId %}

# Ссылки

* [Страница с докладом на TechDays](http://www.techdays.ru/videos/3596.html)
* {% include githubRepo.html name='Примеры кода на GitHub' id='Specifications' %}
