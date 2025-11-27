---
layout: page
permalink: /selection/
title: Подборка постов
---

{% for category in site.selection %}
{% assign category_posts = site.posts | where: "metadata.selection", category.name | sort: "date" %}
{% if category_posts.size > 0 %}
## {{ category.title }}
{% for post in category_posts %}
* [{{ post.title }}]({{ post.url | relative_url }}){% endfor %}{% endif %}
{% endfor %}
