---
layout: layouts/home.njk
date: 2023-04-07
draft: false
---
<ol reversed class="postlist grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 grid-flow-row" style="counter-reset: start-from {{ (postslistCounter or postslist.length) + 1 }}">{% for post in collections.posts | categoryFilter('climate-justice') %}<li class="postlist-item{% if post.url == url %} postlist-item-active{% endif %} relative">
		<a href="{{ post.url }}" >{% if post.data.image %}<img src="{{ post.data.image }}" />{% else %}{% endif %}
		<h2 class="absolute bottom-0 h-24 inset-x-0 backdrop-blur-xl p-2 text-center text-white flex flex-column items-center">
		<span class="inline-block text-center w-full">
			{{ post.data.title }}
		<span>
		</h2>
		</a>
	</li>
{% endfor %}
</ol>
