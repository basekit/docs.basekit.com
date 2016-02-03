---
layout: widget
title: Menu Sections
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/menu-sections/
- version: Version 1.0
  url: /widgets/v1/menu-sections/
---

# Menu Sections

Version: >= 7.32. Add a menu sections navigation to the page.

## Overview

**IMPORTANT: This widget will only work as expected when the menu plugin is activated on the user's account.** This works in conjunction with the [menu](/widgets/v1/menu/) widget. This widget will show a list of menu section links. When this link is clicked it will navigate to the relevant sections in the menu.

{% highlight python %}
{% raw %}

{{widget('menu', 'thisuniquewidgetname', {})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

Currently this widget does not have any options.
