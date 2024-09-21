---
layout: page
title: "About"
---

<div class="max-w-prose mx-auto text-center">
  <!-- Profile Image -->
  {% if site.about.author_image %}
  <div class="py-6 px-6">
    {% if site.about.author_image contains 'http://' or site.about.author_image contains 'https://' %}
      <img src="{{ site.about.author_image }}" alt="{{ site.about.author_name }}" class="w-48 h-48 object-cover rounded-lg mx-auto">
    {% else %}
      <img src="{{ site.about.author_image | prepend: site.baseurl | prepend: site.url }}" alt="{{ site.about.author_name }}" class="w-48 h-48 object-cover rounded-lg mx-auto">
    {% endif %}
  </div>
  {% endif %}

  <!-- Social Media -->
  {% if site.about.social_media_enabled %}
  <div class="pb-6 px-6">
    {% include social.html %}
  </div>
  {% endif %}

  <div class="prose dark:prose-invert sm:text-lg leading-relaxed text-justify">
    {% for description in site.about.description %}
      {% if forloop.first %}
        <p class="mb-6"><strong>{{ description }}</strong></p>
      {% else %}
        <p class="mb-6">{{ description }}</p>
      {% endif %}
    {% endfor %}
  </div>
</div>