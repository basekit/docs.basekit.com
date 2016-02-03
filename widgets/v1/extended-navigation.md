---
layout: widget
title: Extended Navigation
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/extended-navigation/
- version: Version 1.0
  url: /widgets/v1/extended-navigation/
---

# Extended Navigation

Add an extended navigation widget to your template.

## Overview

You can add an extended navigation widget to your template. This will show a navigation menu that includes folders in the page.

To include an extended navigation widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('extendednavigation', 'thisuniquewidgetname', {"align":"center"})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `align`: The navigation text alignment. Possible values: 

  * `left` (default)
  * `right`
  * `center`
