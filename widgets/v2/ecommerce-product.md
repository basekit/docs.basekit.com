---
layout: widget
title: Ecommerce Product
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-product/
- version: Version 1.0
  url: /widgets/v1/ecommerce-product/
---

# Ecommerce product

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account. It is best to place this ```ecomproduct.twig```, if you require it in a different layout. Otherwise the engine will fallback to ```default.twig```.

## Examples

### Example usage
{% highlight django %}
{% raw %}

  {{widget('ecomproduct', 'singleproduct', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__ecomproductWidget" data-name="ecomproduct" class="widget  widget--zone-widget">
  <div class="bk-ecomproduct ecomproduct widget__ecomproduct">
    <textarea name="product" style="display: none !important;" hidden>...</textarea>
    <article class="product-article  product__product-article">
      <div class="product-images  product__product-images">
        <div class="product-image  product__product-image">
          <a class="image-link  product__image-link js-ecom-product-image-wrap" href="#">
          <img class="image image--current  product__image js-ecom-product-preview-image" src="//placehold.it/2250x800" alt="Donec id elit non sapien tincidunt">
          </a>
        </div>
        <ul class="product-gallery  product__product-gallery">
          <li class="gallery-item  product__gallery-item">
            <a class="image-button  product__image-button js-ecom-product-image-wrap">
              <img class="image  image--thumb  product__image" src="//placehold.it/2250x800" alt="Donec id elit non sapien tincidunt">
            </a>
          </li>
          <li class="gallery-item  product__gallery-item">
            <a class="image-button  product__image-button js-ecom-product-image-wrap">
              <img class="image  image--thumb  product__image" src="//placehold.it/300x100" alt="Donec id elit non sapien tincidunt">
            </a>
          </li>
          <li class="gallery-item  product__gallery-item">
            <a class="image-button  product__image-button js-ecom-product-image-wrap">
              <img class="image  image--thumb  product__image" src="//placehold.it/250x250" alt="Donec id elit non sapien tincidunt">
            </a>
          </li>
        </ul>
      </div>
      <div class="product-content  product__product-content">
        <header class="product-header  product__product-header">
          <h1 class="product-title  product__product-title">Donec id elit non sapien tincidunt</h1>
          <div class="message message-information product-availability product-availability--unavailable product-article__message">
            <p>Currently unavailable</p>
          </div>
        </header>
        <div class="product-body  product__product-body">
          <p class="product-description  product__product-description">Donec id elit non sapien tincidunt pellentesque vitae lacinia quam. Maecenas id ipsum in est sagittis porttitor. Suspendisse potenti. Nullam dictum massa augue, at aliquam purus mattis non. Aliquam ac sagittis elit.</p>
        </div>
        <div class="product-actions  product__product-actions">
          <form class="form  product__form">
            <fieldset class="fieldset  product__fieldset">
              <legend class="legend  product__legend">Product Options</legend>
              <div class="form-body  product__form-body">
                <div class="form-group  product__form-group">
                  <label class="label  label--variation  product__label" for="page-zones__main-widgets__ecomproductWidget__product__variation-Colour">Colour</label>
                  <div class="select-wrap  product__select-wrap">
                    <select class="select  select--variation  product__select" id="page-zones__main-widgets__ecomproductWidget__product__variation-Colour" name="Colour">
                      <option selected>Red</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="form-group  product__form-group">
              <input class="button  icon  icon--add  button--submit  product__input js-ecom-product-add-to-cart-btn" type="submit" value="Add to basket" data-ref="" disabled>
            </div>
          </form>
          <div class="view-basket-wrap  product__view-basket-wrap js-ecom-product-go-to-checkout-btn-wrapper">
            <a class="button  icon  icon--basket  product__button ecom-product-go-to-checkout-btn" href="/store/cart">View basket</a>
          </div>
        </div>
        <div class="product-attributes  product__product-attributes">
          <p class="product-category  product__product-category">
            <span class="product-attribute-title  product___product-attribute-title">Category: </span><a class="category-link  product__category-link" href="/store?productlist-categories=">skirt</a>
          </p>
          <div class="product-tags  product__product-tags">
            <p class="tags-title  product__tags-title">
              <span class="product-attribute-title  product___product-attribute-title">Tags</span>
            </p>
            <ul class="tag-list  product__tag-list">
              <li class="tag-item  product__tag-item">
                <a class="tag-link  product__tag-link" href="/store?productlist-tags=stripes">stripes</a>
              </li>
              <li class="tag-item  product__tag-item">
                <a class="tag-link  product__tag-link" href="/store?productlist-tags=black-and-white">black and white</a>
              </li>
              <li class="tag-item  product__tag-item">
                <a class="tag-link  product__tag-link" href="/store?productlist-tags=knee-length">knee length</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
