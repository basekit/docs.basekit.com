---
layout: widget
title: Ecommerce Product List
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-product-list/
- version: Version 1.0
  url: /widgets/v1/ecommerce-product-list/
---

# Ecommerce product list

This widget is only compatible with Editor **version 7.32 and above**.

**IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account.

## Examples

### Example usage

{% highlight django %}
{% raw %}

  {{widget('ecomproductslist', 'productlist', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__ecomproductslistWidget" data-name="ecomproductslist" class="widget  widget--zone-widget">
  <div class="bk-ecomproductslist ecomproductslist widget__ecomproductslist">
    <section class="listing-section  product-listing__listing-section">
      <header class="listing-header  product-listing__listing-header">
        <h2 class="listing-title  product-listing__listing-title">Products</h2>
        <div class="product-filters  product-listing__product-filters">
          <form class="form  product-listing__form js-productlist-display-formclearfix" method="GET" action="/store">
            <fieldset class="fieldset  product-listing__fieldset">
              <legend class="legend  product-listing__legend">Filters</legend>
              <div class="form-body  product-listing__form-body">
                <div class="form-group  product-listing__form-group">
                  <label class="label  label--filter  product-listing__label" for="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-1">Order by</label>
                  <div class="select-wrap  product-listing__select-wrap">
                    <select class="select  select--filter  product-listing__select js-display-control" id="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-1" name="productlist-sort">
                      <option value="created-desc">Newest</option>
                      <option value="title-asc">Title: A-Z</option>
                      <option value="title-desc">Title: Z-A</option>
                      <option value="price-desc">Price: Highest to Lowest</option>
                      <option value="price-asc">Price: Lowest to Highest</option>
                    </select>
                  </div>
                </div>
                <div class="form-group  product-listing__form-group">
                  <label class="label  label--filter  product-listing__label" for="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-2">Categories</label>
                  <div class="select-wrap  product-listing__select-wrap">
                    <select class="select  select--filter  product-listing__select js-display-control" id="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-2" name="productlist-categories">
                      <option value="">Filter by category</option>
                      <option disabled>---</option>
                      <option value="woman">woman</option>
                      <option value="man">man</option>
                    </select>
                  </div>
                </div>
                <div class="form-group  product-listing__form-group">
                  <label class="label  label--filter  product-listing__label" for="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-3">Tags</label>
                  <div class="select-wrap  product-listing__select-wrap">
                    <select class="select  select--filter  product-listing__select js-display-control" id="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-3" name="productlist-tags">
                      <option value="">Filter by tag</option>
                      <option disabled>---</option>
                      <option value="summer">summer</option>
                      <option value="winter">winter</option>
                    </select>
                  </div>
                </div>
                <div class="form-group  product-listing__form-group">
                  <label class="label  label--filter  product-listing__label" for="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-4">Per Page</label>
                  <div class="select-wrap  product-listing__select-wrap">
                    <select class="select  select--filter  product-listing__select js-display-control" id="page-zones__main-widgets__ecomproductslistWidget__product-listing__filter-4" name="productlist-itemcount">
                      <option value="20">Show 20</option>
                      <option value="32">Show 32</option>
                      <option value="64">Show 64</option>
                    </select>
                  </div>
                </div>
                <div class="form-group  product-listing__form-group">
                  <label class="label  label--search  product-listing__label" for="page-zones__main-widgets__ecomproductslistWidget__product-listing__search">Search Products</label>
                  <input class="input  input--search  product-listing__input  js-display-control" id="page-zones__main-widgets__ecomproductslistWidget__product-listing__search" name="productlist-search" placeholder="Search term" type="search" value=""/>
                </div>
                <div class="form-group  product-listing__form-group">
                  <input class="button  button--submit  product-listing__input" type="submit" value="Search" />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <p class="listing-order  product-listing__listing-order">Showing %1–%2 of %3 products</p>
      </header>
      <div class="listing-body  product-listing__listing-body">
        <ul class="product-list  product-listing__product-list">
          <li class="product-item  product-listing__product-item">
            <article class="product-item-article  product-listing__product-item-article">
              <div class="product-item-image  product-listing__product-item-image">
                <img class="image  image--thumb  product-listing__image" src="//placehold.it/2250x800" alt="Aliquam Handbag">
              </div>
              <header class="product-item-details  product-listing__product-content">
                <h3 class="product-item-title  product-listing__product-item-title">
                  <a class="title-link  product-listing__title-link" >Aliquam Handbag</a>
                </h3>
                <p class="product-item-price  product-listing__product-item-price">£32</p>
              </header>
            </article>
          </li>
          <li class="product-item  product-listing__product-item">
            <article class="product-item-article  product-listing__product-item-article">
              <div class="product-item-image  product-listing__product-item-image">
                <img class="image  image--thumb  product-listing__image" src="//placehold.it/300x100" alt="Commodo Handbag">
              </div>
              <header class="product-item-details  product-listing__product-content">
                <h3 class="product-item-title  product-listing__product-item-title">
                  <a class="title-link  product-listing__title-link" >Commodo Handbag</a>
                </h3>
                <p class="product-item-price  product-listing__product-item-price">From %1</p>
              </header>
            </article>
          </li>
          <li class="product-item  product-listing__product-item">
            <article class="product-item-article  product-listing__product-item-article">
              <div class="product-item-image  product-listing__product-item-image">
                <img class="image  image--thumb  product-listing__image" src="//placehold.it/250x250" alt="Conubia Nostra Handbag">
              </div>
              <header class="product-item-details  product-listing__product-content">
                <h3 class="product-item-title  product-listing__product-item-title">
                  <a class="title-link  product-listing__title-link" >Conubia Nostra Handbag</a>
                </h3>
                <p class="product-item-price  product-listing__product-item-price">£32</p>
              </header>
            </article>
          </li>
        </ul>
      </div>
      <footer class="listing-footer  product-listing__listing-footer">
        <nav class="listing-pagination  product-listing__post-pagination">
          <ul class="pagination-list  product-listing__pagination-list">
            <li class="pagination-item  pagination-item  product-listing__pagination-item  current">
              <a class="button  button--pagination  product-listing__button" href="/store/page/1">1</a>
            </li>
            <li class="pagination-item  product-listing__pagination-item">
              <a class="button  button--pagination  product-listing__button" href="/store/page/2">2</a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* ```productFiltering```: Show or hide the product filters above the product items. ```1``` shows the filters, ```0``` will hide them. If this is not set they are shown by default.

