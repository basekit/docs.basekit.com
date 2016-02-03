---
layout: widget
title: Map
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/map/
- version: Version 1.0
  url: /widgets/v1/map/
---

# Map

Add a map widget to your template.

## Overview

You can add a map widget to your template. The map address can be changed later with the BaseKit Editor.

To include a map widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('map', 'thisuniquewidgetname', {'height': '150', 'zoom': '15', 'address': 'profile'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options
You can change the following options for the widget:

* `height`: The height of the map in pixels. Possible values: from `100` to `500`

* `zoom`: The map zoom. Possible values: from `1` to `20`

* `address`: The address for setting up the map. If you set to `profile`, it will use the profile data
