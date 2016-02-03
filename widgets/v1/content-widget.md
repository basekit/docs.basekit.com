---
layout: widget
title: Content Widget
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/content-widget/
- version: Version 1.0
  url: /widgets/v1/content-widget/
---

# Content Widget

Add a content widget to your template.

## Overview

You can add a content widget to your template to display a paragraph text. The widget can be later customised within the BaseKit Editor. 

To include a content widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('content', 'thisuniquewidgetname', {content: 'This is a content widget.', lines: 'all'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `content`: The content on the widget

* `lines`: Set the text truncation

  * `one`
  * `two`
  * `all`
