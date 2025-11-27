---
layout: page
permalink: /publications/
title: Публикации и выступления
description:
nav: true
nav_order: 2
---

## Доклады

* [Безопасное исполнение ненадежного кода | TechLead 2025](https://techleadconf.ru/2025/abstracts/14403)
  <a href="https://www.youtube.com/watch?v=I9z6I-2FSRo" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
  <a href="https://vkvideo.ru/playlist/2101799_1/video-177460632_456239388" title="VKVideo"><i class="fa-brands fa-vk"></i></a>

* [Кратно ускоряем потоки данных: практичные архитектурные приёмы | TechLead 2024](https://techleadconf.ru/moscow/2024/abstracts/13138)
  <a href="https://www.youtube.com/watch?v=RAyQoTiSTwc" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
  <a href="https://vkvideo.ru/playlist/2101799_1/video-177460632_456239409" title="VKVideo"><i class="fa-brands fa-vk"></i></a>

* [Олимпиада по программированию: как дойти до финиша | UWDC 2024](https://uwdc.ru/events/uwdc2024/talks/olimpiada_po_programmirovaniyu_kak_dojti_do_finish)
  <a href="https://www.youtube.com/watch?v=kXq2bxP5Qvo" title="YouTube"><i class="fa-brands fa-youtube"></i></a>

{% assign site_articles = site.posts | where: "categories", "article" %}
{% if site_articles.size > 0 %}

## Статьи

{% for article in site_articles %}
* [{{ article.title }}]({{ article.url | relative_url }}) ({{ article.date | date: "%Y" }})
{% endfor %}
{% endif %}
