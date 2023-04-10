---
layout: layouts/home.njk
date: 2023-04-07
draft: false
---
<ol reversed class="postlist" style="counter-reset: start-from {{ (postslistCounter or postslist.length) + 1 }}">
{% for post in collections.posts | categoryFilter('arts') %}
	<li class="postlist-item{% if post.url == url %} postlist-item-active{% endif %}">
		<a href="{{ post.url }}" class="postlist-link">{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}</a>
		<time class="postlist-date" datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate("LLLL yyyy") }}</time>
	</li>
{% endfor %}
</ol>
