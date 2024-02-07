---
layout: layouts/home.njk
eleventyNavigation:
  key: Activism
  order: 3
---
# Activism


<section class="gallery flex flex-wrap justify-between">
{% for image in collections["activism-images"] %}<figure><img src="{{image.path}}" alt="" class="max-w-40 m-8"></figure>{% endfor %}
</section>