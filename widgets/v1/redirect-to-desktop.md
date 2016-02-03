---
layout: widget
title: Redirect To Desktop
searchable: true
versions:
- version: Version 1.0
  url: /widgets/v1/redirect-to-desktop/
---

# Redirect to Desktop - (V6 + M Version only)

Add a redirect to desktop widget to your template.

## Overview

You can add a redirect to desktop widget to your template. This widget will allow access to go to the desktop from the mobile site.

To include a redirect to desktop widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('redirecttodesktop', 'thisuniquewidgetname', {'text': 'Go to desktop version'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `text`: The text that will be displayed in the widget
