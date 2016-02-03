---
layout: widget
title: Ecommerce Product
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-product/
- version: Version 1.0
  url: /widgets/v1/ecommerce-product/
---

# Ecommerce Product

Version: >= 7.32. Add an ecommerce product to the page.

## Overview

**IMPORTANT: This widget will only work as expected when the ecommerce plugin is activated on the user's account. It is best to place this `ecomproduct.twig`, if you require it in a different layout. Otherwise the engine will fallback to `default.twig`.**

{% highlight python %}
{% raw %}

{{widget('ecomproduct', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

Currently this widget does not have any options.
