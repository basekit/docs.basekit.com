---
layout: widget
title: Line
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/line/
- version: Version 1.0
  url: /widgets/v1/line/
---

# Line

Add a line to your template.

## Overview

You can add a line widget to your template. This adds a line separator.

To include a line in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('line', 'thisuniquewidgetname', {'thickness': 'inherit', 'padding': 'inherit', 'length':'inherit', 'align': 'center'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `thickness`: The link thickness. Possible values: from `1` to `10`

* `padding`: The line padding. Possible values: from `10` to `30`

* `length`: The line length in percentage. Possible values: from `10` to `100`

* `align`: The line alignment. Possible values:

  * `left`
  * `center`
  * `right`