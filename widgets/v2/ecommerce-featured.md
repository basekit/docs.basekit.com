---
layout: widget
title: Ecommerce Featured Products
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-featured/
- version: Version 1.0
  url: /widgets/v1/ecommerce-featured/
---

# Ecommerce Featured Products

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account.

## Examples

### Example usage

{% highlight django %}
{% raw %}

{{widget('ecomfeaturedproducts', 'featuredproducts', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__ecomfeaturedproductsWidget" data-name="ecomfeaturedproducts" class="widget  widget--zone-widget">
  <div class="bk-ecomfeaturedproducts  ecomfeaturedproducts  widget__ecomfeaturedproducts">
    <section class="listing-section  listing-section--featured  ecomfeaturedproducts__listing-section">
      <header class="listing-header  ecomfeaturedproducts__listing-header">
        <h2 class="listing-title  ecomfeaturedproducts__listing-title">Featured Products</h2>
      </header>
      <div class="listing-body  ecomfeaturedproducts__listing-body  even products-6">
        <ul class="product-list  ecomfeaturedproducts__product-list">
          <li class="product-item  ecomfeaturedproducts__product-item">
            <article class="product-item-article  ecomfeaturedproducts__product-item-article">
              <div class="product-item-image  ecomfeaturedproducts__product-item-image">
                <a class="image-link  ecomfeaturedproducts__image-link" href="/store/product/" style="background-image:url('//placehold.it/2250x800')">
                  <img class="image  image--thumb  ecomfeaturedproducts__image" src="//placehold.it/2250x800" alt="Aliquam Handbag">
                </a>
              </div>
              <header class="product-item-details  ecomfeaturedproducts__product-content">
                <h3 class="product-item-title  ecomfeaturedproducts__product-item-title">
                  <a class="title-link  ecomfeaturedproducts__title-link" href="/store/product/">Aliquam Handbag</a>
                </h3>
                <p class="product-item-price  ecomfeaturedproducts__product-item-price">£9.99</p>
              </header>
            </article>
          </li>
          <li class="product-item  ecomfeaturedproducts__product-item">
            <article class="product-item-article  ecomfeaturedproducts__product-item-article">
              <div class="product-item-image  ecomfeaturedproducts__product-item-image">
                <a class="image-link  ecomfeaturedproducts__image-link" href="/store/product/" style="background-image:url('//placehold.it/300x100')">
                <img class="image  image--thumb  ecomfeaturedproducts__image" src="//placehold.it/300x100" alt="Commodo Handbag">
                </a>
              </div>
              <header class="product-item-details  ecomfeaturedproducts__product-content">
                <h3 class="product-item-title  ecomfeaturedproducts__product-item-title">
                  <a class="title-link  ecomfeaturedproducts__title-link" href="/store/product/">Commodo Handbag</a>
                </h3>
                <p class="product-item-price  ecomfeaturedproducts__product-item-price">£9.99</p>
              </header>
            </article>
          </li>
          <li class="product-item  ecomfeaturedproducts__product-item">
            <article class="product-item-article  ecomfeaturedproducts__product-item-article">
              <div class="product-item-image  ecomfeaturedproducts__product-item-image">
                <a class="image-link  ecomfeaturedproducts__image-link" href="/store/product/" style="background-image:url('//placehold.it/250x250')">
                <img class="image  image--thumb  ecomfeaturedproducts__image" src="//placehold.it/250x250" alt="Conubia Nostra Handbag">
                </a>
              </div>
              <header class="product-item-details  ecomfeaturedproducts__product-content">
                <h3 class="product-item-title  ecomfeaturedproducts__product-item-title">
                  <a class="title-link  ecomfeaturedproducts__title-link" href="/store/product/">Conubia Nostra Handbag</a>
                </h3>
                <p class="product-item-price  ecomfeaturedproducts__product-item-price">£9.99</p>
              </header>
            </article>
          </li>
        </ul>
      </div>
    </section>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
