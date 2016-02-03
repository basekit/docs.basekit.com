---
layout: widget
title: Dropbox Button
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/dropbox-button/
- version: Version 1.0
  url: /widgets/v1/dropbox-button/
---

# Dropbox Button

Add a Dropbox widget to your template.

## Overview

You can add a Dropbox widget to your template that will allow you to add a link to a file on your dropbox account on your site.

To include a Dropbox widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('dropbox', 'thisuniquewidgetname', {'align': 'left', 'showFileName': false})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `showFileName` Show the file name. `true` or `false` (default)

* `align`: The widget alignment. You can set it to:

  * widget-align-left
  * widget-align-center
  * widget-align-right
