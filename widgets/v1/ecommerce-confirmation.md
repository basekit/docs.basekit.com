---
layout: widget
title: Ecommerce Confirmation
searchable: false
versions:
- version: Version 1.0
  url: /widgets/v1/ecommerce-confirmation/
---

# Ecommerce Confirmation

Version: >= 7.32. This widget displays the user's payment confirmation text from the ecommerce plugin.

## Overview

**IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account. It's best to place this widget in `ecomorderconf.twig`, as this is the page the ecommerce plugin engine redirects the user to once their payment has successfully gone through.

{% highlight python %}
{% raw %}

{{widget('ecomconfirmation', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

Currently this widget does not have any options.
