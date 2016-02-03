---
layout: widget
title: Ecommerce Legal
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-legal/
- version: Version 1.0
  url: /widgets/v1/ecommerce-legal/
---

# Ecommerce Legal

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account.

## Examples

### Example usage

{% highlight python %}
{% raw %}

{{widget('ecomlegal', 'legaldetails', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__EcomLegalWidget" data-name="ecomlegal" class="widget  widget--zone-widget">
  <div class="bk-ecomlegal  ecomlegal  widget__ecomlegal  js-text-ecomlegal">
    <p>Legal...</p>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
