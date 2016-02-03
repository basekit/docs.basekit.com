---
layout: widget
title: Blog Post
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/blog-post/
- version: Version 1.0
  url: /widgets/v1/blog-post/
---

# Blog Post

Version: >= 7.32. Add a blog post to the page.

## Overview

**IMPORTANT**: This widget will only work as expected in the `blogpost.twig` page type. Otherwise the engine will fallback to `default.twig`.

{% highlight python %}
{% raw %}

{{widget('blogpost', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

Currently this widget does not have any options.
