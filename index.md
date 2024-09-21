---
layout: page
title: "Home"
---

<div class="max-w-prose mx-auto text-center">

  {% if site.homepage.welcome.title != "" %}
  <!-- Welcome Message -->
  <div class="py-6 px-6 mb-8">
    <h2 class="text-2xl font-bold mb-2">{{ site.homepage.welcome.title }}</h2>

    {% if site.homepage.welcome.subtitle %}
    <p class="text-gray-700 dark:text-gray-300">
      {{ site.homepage.welcome.subtitle }}
    </p>
    {% endif %}

  </div>
  {% endif %}

  <div class="space-y-8 md:space-y-12">
    {% for post in site.posts %}
    <div class="flex items-start space-x-4 md:space-x-6">
      <div class="flex-1">

        <!-- Date, Reading Time, Category -->
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>{{ post.date | date: "%d %b %Y" }}</span>
          <span class="mx-2">•</span>
          <span>{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
          <span class="mx-2">•</span>
          <span>{{ post.category }}</span>
        </div>

        <!-- Title, Summary, Image -->
        <div class="flex items-start space-x-4 md:space-x-6">
          <div class="flex-1 min-w-0">
            <a href="{{ post.url | relative_url }}" class="no-underline">
              <h2 class="text-xl font-semibold mb-2 text-left line-clamp-2 md:line-clamp-1">{{ post.title }}</h2>
            </a>

            <p class="text-gray-600 dark:text-gray-400 text-justify overflow-hidden">
              {% if post.description %}
              <span class="line-clamp-3 md:line-clamp-4">{{ post.description }}</span>
              {% else %}
              <span class="line-clamp-3 md:line-clamp-4">{{ post.content | strip_html | truncate: 160 }}</span>
              {% endif %}
            </p>

          </div>

          {% if post.image %}
          <a href="{{ post.url | relative_url }}" class="flex-shrink-0">
            <img src="{{ post.image }}" alt="{{ post.title }}" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded">
          </a>
          {% endif %}

        </div>

      </div>
    </div>
    {% endfor %}

  </div>
</div>