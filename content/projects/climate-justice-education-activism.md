---
layout: layouts/home.njk
date: 2023-04-07
draft: false
---
<ol reversed class="postlist grid grid-col-2" style="counter-reset: start-from {{ (postslistCounter or postslist.length) + 1 }}">
{% for post in collections.posts | categoryFilter('climate-justice') %}
	<li class="postlist-item{% if post.url == url %} postlist-item-active{% endif %}">
		<a href="{{ post.url }}" class="postlist-link relative">
		{% if post.data.image %}<img src="{{ post.data.image }}" />{% else %}{% endif %}
		<span class="absolute bottom-0 h-24 inset-x-0 backdrop-blur-xl p-2 text-center text-white flex flex-column items-center">
		{% if post.data.title %}{{ post.data.title }}{% else %}<code>{{ post.url }}</code>{% endif %}
		<span>
		</a>
	</li>
{% endfor %}
</ol>
