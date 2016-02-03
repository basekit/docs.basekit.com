---
layout: widget
title: Blog Post List
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/blog-post-list/
- version: Version 1.0
  url: /widgets/v1/blog-post-list/
---

# Blog Post List

Version: >= 7.32. Add a blog post list to the page.

## Overview

**This widget will only work if the blog plugin is activated on the user account.** This widget will only work as expected in the `blogpost.twig` [page type](/templating/page-types/). Otherwise the engine will fallback to `default.twig`. This widget will add a list of widgets to the page. The widget will feed off [plugin data](/data/) to populate itself.

{% highlight python %}
{% raw %}

{{widget('blogpostlist', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

* `postDisplayType` (string): This will make the blog post list widget either display the summary or the whole post

  * `summary` (default)
  * `post`
