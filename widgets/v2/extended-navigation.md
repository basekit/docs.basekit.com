---
layout: widget
title: Extended Navigation
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/extended-navigation/
- version: Version 1.0
  url: /widgets/v1/extended-navigation/
---

# Extended navigation

Like the logo widget, the extended navigation widget is a template widget and cannot be dragging in via the Editor. The only option available when developing a template is the alignment. All other options and setting related to the extended navigation widget is done in the Editor.


## Examples 

### Basic usage

{% highlight django %}
{% raw %}

  {{widget('extendednavigation', 'navigation', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

Setting the alignment of the navigation can be done so by setting the ```align``` option, as done so below:

{% highlight django %}
{% raw %}

  {{widget('extendednavigation', 'navigation', {
    'align': 'center'
  })|raw}}

{% endraw %}
{% endhighlight %}


#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__extendednavigation-centernavigation" class="widget  widget--template-widget" data-widget-type="extendednavigation">
  <div class="bk-extendednavigation  extendednavigation  widget__extendednavigation  align-center">
    <button class="js-pull  navigation-toggle  icon  icon--bars  extendednavigation__navigation-toggle">Menu</button>
    <nav class="navigation-body  extendednavigation__navigation-body">
      <ul class="navigation-list  extendednavigation__navigation-list  js-menu-list  itemcount-7">
        <li id="menu-item_1" class="navigation-item  extendednavigation__navigation-item home selected">
          <a href="/" class="item-name  extendednavigation__item-name">Home</a>
        </li>
        <li id="menu-item_2" class="navigation-item  extendednavigation__navigation-item page">
          <a href="/store" class="item-name  extendednavigation__item-name">Store</a>
        </li>
        <li id="menu-item_3" class="navigation-item  extendednavigation__navigation-item page">
          <a href="/blog" class="item-name  extendednavigation__item-name">Blog</a>
        </li>
        <li id="menu-item_4" class="navigation-item  extendednavigation__navigation-item folder" aria-haspopup="true">
          <span class="item-name  item-name--parent  extendednavigation__item-name">Departments</span>
          <ul class="navigation-list  navigation-list--children  extendednavigation__navigation-list  itemcount-4">
            <li id="menu-item_4" class="navigation-item  navigation-item--child  extendednavigation__navigation-item index">
              <a href="/departments/index" class="item-name  extendednavigation__item-name">Index</a>
            </li>
            <li id="menu-item_5" class="navigation-item  navigation-item--child  extendednavigation__navigation-item page">
              <a href="/departments/accounts" class="item-name  extendednavigation__item-name">Accounts</a>
            </li>
            <li id="menu-item_6" class="navigation-item  navigation-item--child  extendednavigation__navigation-item page">
              <a href="/departments/finance" class="item-name  extendednavigation__item-name">Finance</a>
            </li>
            <li id="menu-item_7" class="navigation-item  navigation-item--child  extendednavigation__navigation-item page">
              <a href="/departments/marketing" class="item-name  extendednavigation__item-name">Marketing</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</div>

{% endraw %}
{% endhighlight %}

Note that the extended navigation widget has quite a complex structure, especially when it comes to sub-items and folders. These 'parent' and 'child' elements are named appropriately with classes.

## Widget options

As stated above, the only option for the extended navigation widget is ```align```. This can be set to ```left```, ```right```, or ```center``` respectively.
