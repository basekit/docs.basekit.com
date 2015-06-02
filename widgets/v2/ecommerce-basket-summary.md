---
layout: widget
title: Ecommerce Basket Summary
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/ecommerce-basket-summary/
---

# Ecommerce basket summary

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the ecommerce plugin is activated on the user's account.

## Examples

### Example usage

{% highlight django %}
{% raw %}

  {{widget('ecombasketsummary', 'basketsummary', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__basketsummary" data-name="ecombasketsummary" class="widget  widget--zone-widget">
  <div class="bk-ecombasketsummary  ecombasketsummary  widget__ecombasketsummary">
    <section class="summary-section  ecombasketsummary__summary-section">
      <h2 class="summary-title  ecombasketsummary__summary-title">Basket Summary</h2>
      <table class="summary-table  table  ecombasketsummary__summary-table">
        <tbody class="summary-body  ecombasketsummary__summary-body">
          <tr class="table-row  table-row--heading  ecombasketsummary__table-row">
            <th class="cell  cell--header  ecombasketsummary__cell" scope="col" colspan="2">Item</th>
            <th class="cell  cell--header  ecombasketsummary__cell" scope="col" colspan="1">Quantity</th>
            <th class="cell  cell--header  ecombasketsummary__cell" scope="col" colspan="1">Price</th>
            <th class="cell  cell--header  ecombasketsummary__cell" scope="col" colspan="1">Subtotal</th>
          </tr>
          <tr class="table-row  ecombasketsummary__table-row">
            <td class="cell  cell--image  ecombasketsummary__cell">
              <a class="summary-item-link  ecombasketsummary__summary-item-link" href="/store/product/Bag" style="background-repeat: no-repeat;background-image:url('//placehold.it/2250x800')">
              <img class="image  image--thumb  ecombasketsummary__image" src="//placehold.it/2250x800" alt="Donec id elit non sapien tincidunt">
              </a>
            </td>
            <td class="cell  cell--title  ecombasketsummary__cell">
              <p class="summary-item-title  ecombasketsummary__summary-item-title">
                <a class="summary-item-link  ecombasketsummary__summary-item-link" href="/store/product/Bag">Donec id elit non sapien tincidunt</a>
              </p>
            </td>
            <td class="cell  cell--quantity  ecombasketsummary__cell">
              <div class="quantity-wrap  ecombasketsummary__quantity-wrap">
                <input class="quantity-minus  button  button--quantity  ecombasketsummary__quantity-minus  js-remove" type="button" value="-" data-ref="1">
                <span class="quantity-field  ecombasketsummary__quantity-field">1</span>
                <input class="quantity-plus  button  button--quantity  ecombasketsummary__quantity-plus  js-add" type="button" value="+" data-ref="1">
              </div>
            </td>
            <td class="cell  cell--price  ecombasketsummary__cell">
              <p class="summary-item-price  ecombasketsummary__summary-item-price">£12.00</p>
            </td>
            <td class="cell  cell--total  ecombasketsummary__cell">
              <p class="summary-item-total  ecombasketsummary__summary-item-total">£12.00</p>
            </td>
          </tr>
          <tr class="table-row  ecombasketsummary__table-row">
            <td class="cell  cell--image  ecombasketsummary__cell">
              <a class="summary-item-link  ecombasketsummary__summary-item-link" href="/store/product/Bag" style="background-repeat: no-repeat;background-image:url('//placehold.it/300x100')">
              <img class="image  image--thumb  ecombasketsummary__image" src="//placehold.it/300x100" alt="Donec id elit non sapien tincidunt">
              </a>
            </td>
            <td class="cell  cell--title  ecombasketsummary__cell">
              <p class="summary-item-title  ecombasketsummary__summary-item-title">
                <a class="summary-item-link  ecombasketsummary__summary-item-link" href="/store/product/Bag">Donec id elit non sapien tincidunt</a>
              </p>
            </td>
            <td class="cell  cell--quantity  ecombasketsummary__cell">
              <div class="quantity-wrap  ecombasketsummary__quantity-wrap">
                <input class="quantity-minus  button  button--quantity  ecombasketsummary__quantity-minus  js-remove" type="button" value="-" data-ref="2">
                <span class="quantity-field  ecombasketsummary__quantity-field">1</span>
                <input class="quantity-plus  button  button--quantity  ecombasketsummary__quantity-plus  js-add" type="button" value="+" data-ref="2">
              </div>
            </td>
            <td class="cell  cell--price  ecombasketsummary__cell">
              <p class="summary-item-price  ecombasketsummary__summary-item-price">£11.00</p>
            </td>
            <td class="cell  cell--total  ecombasketsummary__cell">
              <p class="summary-item-total  ecombasketsummary__summary-item-total">£11.00</p>
            </td>
          </tr>
          <tr class="table-row  table-row--order-total  ecombasketsummary__table-row">
            <td colspan="5" class="cell  cell--order-total  ecombasketsummary__cell">
              <h4 class="order-total  ecombasketsummary__order-total">Subtotal <span class="total-value  ecombasketsummary__total-value">£22.00</span></h4>
            </td>
          </tr>
        </tbody>
      </table>
      <form class="summary-form  form  ecombasketsummary__summary-form" action="" method="post">
        <input type="hidden" name="cartId" value="">
        <input type="hidden" name="storeRef" value="18">
        <input type="hidden" name="storeUrl" value="http:///store">
        <input class="input  button  button--submit  ecombasketsummary__input" type="submit" value="Proceed to checkout">
      </form>
    </section>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
