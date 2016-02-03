---
layout: widget
title: Menu Sections
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/menu-sections/
- version: Version 1.0
  url: /widgets/v1/menu-sections/
---

# Menu Sections

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the menu plugin is activated on the user's account.

This works in conjunction with the [menu](/widgets/v2/menu/) widget. This widget will show a list of menu section links. When this link is clicked it will navigate to the relevant sections in the menu.

## Examples

### Example usage

{% highlight python %}
{% raw %}

{{widget('menusections', 'menusectionsnav', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__menusectionsWidget" data-name="menusections" class="widget  widget--zone-widget">
  <div class="bk-menusections  menusections  widget__menusections">
    <nav class="menusections-body  menusections__navigation-body">
      <ul class="menusections-list  menusections__navigation-list  js-menu-section-list">
        <li class="menusections-item  menusections__menusections-item">
          <a class="menu-item-name  menusections__item-name" href="#menu-section-373">Breakfast</a>
        </li>
        <li class="menusections-item  menusections__menusections-item">
          <a class="menu-item-name  menusections__item-name" href="#menu-section-374">Lunch</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
