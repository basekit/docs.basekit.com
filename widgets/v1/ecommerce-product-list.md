---
layout: widget
title: Ecommerce Product List
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-product-list/
- version: Version 1.0
  url: /widgets/v1/ecommerce-product-list/
---

# Ecommerce Product List

Version: >= 7.32. Add an ecommerce product list to the page.

## Overview

**IMPORTANT: This widget will only work as expected when the ecommerce plugin is activated on the user's account.**

{% highlight django %}
{% raw %}

  {{widget('ecomproductslist', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* ```productFiltering```: (integer) show/hide product filter functionality. ```1``` (default) shows functionality within the widget or ```0``` to hide it
