---
layout: widget
title: Ecommerce Categories
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-categories/
- version: Version 1.0
  url: /widgets/v1/ecommerce-categories/
---

# Ecommerce categories

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account. It will add a list of blog categories to your page that will link to all posts in that category.

## Examples

### Basic usage

{% highlight django %}
{% raw %}

  {{widget('ecomcategories', 'productcategories', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight django %}
{% raw %}

  {{widget('ecomcategories', 'productcategories', {
    'title': 'Categories',
    'showCount', true
  })|raw}}

{% endraw %}
{% endhighlight %}


#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__ecomcategorieslistWidget" data-name="ecomcategorieslist" class="widget  widget--zone-widget">
  <div class="bk-ecomcategorieslist  ecomcategorieslist  widget__ecomcategorieslist">
    <div class="categories-listing  widget__categories-listing">
      <ul class="categories-list  categories-listing__categories-list">
        <li class="category-item  categories-listing__category-item">
          <a class="category-link  categories-listing__category-link" href="/store?category=woman">woman</a>
        </li>
        <li class="category-item  categories-listing__category-item">
          <a class="category-link  categories-listing__category-link" href="/store?category=man">man</a>
        </li>
      </ul>
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

* ```title```: The title of the widget, shown above the list itself. If this is not set if will default to the word ```Categories```.

* ```showCount```: Shows the number of products under each category. Set to ```true``` to show or ```false``` to hide them, if this option isn't set then they are shown by default.
