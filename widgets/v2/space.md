---
layout: widget
title: Space
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/space/
- version: Version 1.0
  url: /widgets/v1/space/
---

# Space widget

The space widget is designed to allow the user to control spaces between pieces of content and sections within their website. They are limited to one variable, height.


## Examples

### Basic usage

{% highlight python %}
{% raw %}

{{widget('space', 'pagespace', {'height': '20'})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__space-space" class="widget  widget--template-widget" data-widget-type="space">
  <div class="bk-space  space  widget__space">
    <div class="spacer  space__spacer" style="height: 20px">&nbsp;</div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

The only option available to the space widget is `height`, which can be any pixel value (as shown in the above example). This can be changed by the user when they select the widget in the Editor.
