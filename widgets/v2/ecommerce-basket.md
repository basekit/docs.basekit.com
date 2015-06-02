---
layout: widget
title: Ecommerce Basket
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-basket/
- version: Version 1.0
  url: /widgets/v1/ecommerce-basket/
---

# Ecommerce Basket

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account.

## Examples

### Example usage
{% highlight django %}
{% raw %}

  {{widget('ecombasket', 'shopbasket', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__shopbasket" data-name="ecombasket" class="widget  widget--zone-widget">
  <div class="bk-ecombasket  ecombasket  widget__ecombasket  js-pull">
    <button class="basket-toggle  button  icon  icon--basket  ecombasket__basket-toggle  js-toggle-basket">Basket: <span class="item-count  ecombasket__item-count">2</span></button>
    <div class="basket-body  ecombasket__basket-body">
      <ul class="basket-list  ecombasket__navigation-list">
        <li class="basket-item  ecombasket__basket-item" data-ref="1">
          <div class="basket-item-image  ecombasket__item-image">
            <a class="image-link  ecombasket__image-link" href="/store/product/Bag" style="background-image:url(//placehold.it/2250x800);">
            <img class="image  image--thumb  ecombasket__image" src="//placehold.it/2250x800" alt="Donec id elit non sapien tincidunt">
            </a>
          </div>
          <div class="basket-item-details  ecombasket__item-details">
            <a class="basket-item-name  ecombasket__basket-item-name" href="/store/product/Bag">Donec id elit non sapien tincidunt</a>
            <p class="item-quantity  ecombasket__item-quantity">Quantity:</p>
            <p class="basket-item-price  ecombasket__item-price">£12.00</p>
          </div>
          <button class="item-remove  button  icon  icon--remove  ecombasket__item-remove  js-remove" data-ref="1">
          <span class="remove-text  ecombasket__remove-text" data-ref="1">Remove</span>
          </button>
        </li>
        <li class="basket-item  ecombasket__basket-item" data-ref="2">
          <div class="basket-item-image  ecombasket__item-image">
            <a class="image-link  ecombasket__image-link" href="/store/product/Bag" style="background-image:url(//placehold.it/300x100);">
            <img class="image  image--thumb  ecombasket__image" src="//placehold.it/300x100" alt="Donec id elit non sapien tincidunt">
            </a>
          </div>
          <div class="basket-item-details  ecombasket__item-details">
            <a class="basket-item-name  ecombasket__basket-item-name" href="/store/product/Bag">Donec id elit non sapien tincidunt</a>
            <p class="item-quantity  ecombasket__item-quantity">Quantity:</p>
            <p class="basket-item-price  ecombasket__item-price">£11.00</p>
          </div>
          <button class="item-remove  button  icon  icon--remove  ecombasket__item-remove  js-remove" data-ref="2">
          <span class="remove-text  ecombasket__remove-text" data-ref="2">Remove</span>
          </button>
        </li>
      </ul>
      <footer class="basket-footer  ecombasket__basket-footer">
        <h4 class="basket-total  ecombasket__basekit-total">Total: <span class="total-number  ecombasket__total-number">£22.00</span></h4>
        <a class="view-basket  button  ecombasket__button" href="/store/cart">View Basket</a>
      </footer>
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
