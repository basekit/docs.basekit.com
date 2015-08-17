---
layout: widget
title: Line
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/line/
- version: Version 1.0
  url: /widgets/v1/line/
---

# Line widget

The line widget is a horizontal rule that the user can drop in and edit to suit their site design or content. It can be used to divide blocks of content or sections of the site design.

## Examples

Using a line widget in your template means the user can control the line's thickness, length and spacing.

### Basic usage

{% highlight django %}
{% raw %}

  {{widget('line', 'footerline', {})|raw}}

{% endraw %}
{% endhighlight %}

The above example has an ID of ```footerline```, which will mean any line widget with this ID will use the same properties.

### Example usage

{% highlight django %}
{% raw %}

  {{widget('line', 'footerline', {
    'thickness': '2',
    'length': '90',
    'padding': '10',
    'align': 'center'
  })|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__line" data-name="line" class="widget  widget--template-widget">
  <div class="bk-line  line  widget__line  align--center">
    <hr class="rule  keyline-widget__rule" style="height: 2px; width: 90%; margin:10px auto;">
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

These are additional options that can be set by the template developer, however they can all be changed by the user. These will be the initial settings of the widget:

* ```thickness```: The thickness of the line. Can be any pixel value or ```inherit```, which will inherit the styles of the template.

* ```padding```: The padding around the line. Can be any pixel value or ```inherit```, which will inherit the styles of the template.

* ```length```: The line length in percentage. Can be any percentage value (1 to 100) or ```inherit```, which will inherit the styles of the template.

* ```align```: The line alignment of the line, the default is centre. Possible values are:

  * ```left```
  * ```center```
  * ```right```

> Please note that the Editor does not provide all the options listed above, some are limited to a select common set of values.
