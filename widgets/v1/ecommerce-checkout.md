---
layout: widget
title: Ecommerce Checkout
searchable: false
versions:
- version: Version 1.0
  url: /widgets/v1/ecommerce-checkout/
---

# Ecommerce Checkout

Version: >= 7.32. Add an ecommerce checkout to the page.

## Overview

This widget is used to amalgamate the items, show the user a final price, and collects data from the user. It then redirects the user to the correct payment gateway.

**IMPORTANT:** This widget will only work as expected when placed inside a twig file called `ecomcheckout.twig`. This twig file is automatically applied to the checkout page within the ecommerce plugin. Also the ecommerce plugin needs to be activated on the user's account.

{% highlight python %}
{% raw %}

{{widget('ecomcheckout', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

Currently this widget does not have any options.
