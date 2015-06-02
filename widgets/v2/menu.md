---
layout: widget
title: Menu
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/menu/
- version: Version 1.0
  url: /widgets/v1/menu/
---

# Menu

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the menu plugin is activated on the user's account. This widget is used to display a list of items, dishes, services with a price as per a conventional restaurant menu.

## Examples

### Example usage
{% highlight django %}
{% raw %}

  {{widget('menu', 'menu', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__menu" data-name="menu" class="widget  widget--zone-widget">
  <div class="bk-menu  menu  widget__menu">
    <section class="menu-section  menu__menu-section" id="menu-section--373">
      <header class="section-header  menu__section-header">
        <h2 class="section-title  menu__section-title">Breakfast</h2>
        <p class="section-description  menu__section-description">Served until 12</p>
      </header>
      <div class="section-body  menu__section-body">
        <div class="menu-items even bk16-columns">
          <div class="menu-item  menu__menu-item">
            <article class="item-article  menu__item-article">
              <div class="item-image  menu__item-image">
                <a class="image-link  menu__image-link">
                  <img class="image  menu__image" src="//placehold.it/2250x800" alt="">
                </a>
              </div>
              <div class="item-content  menu__item-content">
                <header class="item-header  menu__item-header">
                  <h3 class="item-title  menu__item-title">Daily Oats Organic Rude Health Porridge</h3>
                  <p class="item-price  menu__item-price"></p>
                </header>
                <div class="item-description  menu__item-description">
                  <p>This porridge will have you feeling rudely healthy all day. we top ours with honey, fresh strawberries &amp; bananas</p>
                </div>
                <footer class="item-footer  menu__item-footer">
                  <h4 class="item-subtitle  menu__item-subtitle">Nutritional information</h4>
                  <p class="item-details  menu__item-details">Contains gluten, Contains seeds &amp; kittens, Contains dairy</p>
                  <ul class="dietary-list  menu__dietary-list">
                    <li class="dietary-item  icon  icon--vegetarian  menu__dietary-item">
                      vegetarian
                    </li>
                    <li class="dietary-item  icon  icon--glutenfree  menu__dietary-item">
                      glutenfree
                    </li>
                  </ul>
                  <ul class="dietary-list  menu__dietary-list">
                    <li class="dietary-item  icon  icon--not-spicy  menu__dietary-item">
                    </li>
                  </ul>
                </footer>
              </div>
            </article>
          </div>
          <div class="menu-item  menu__menu-item">
            <article class="item-article  menu__item-article">
              <div class="item-image  menu__item-image">
                <a class="image-link  menu__image-link">
                  <img class="image  menu__image" src="//placehold.it/300x100" alt="">
                </a>
              </div>
              <div class="item-content  menu__item-content">
                <header class="item-header  menu__item-header">
                  <h3 class="item-title  menu__item-title">Veggie Brunch Plate</h3>
                  <p class="item-price  menu__item-price"></p>
                </header>
                <div class="item-description  menu__item-description">
                  <p>Free range fried, poached or scrambled eggs, veggie sausages, Heinz baked beans, mushrooms &amp; avocado with toasted artisan sourdough</p>
                </div>
                <footer class="item-footer  menu__item-footer">
                  <h4 class="item-subtitle  menu__item-subtitle">Nutritional information</h4>
                  <p class="item-details  menu__item-details">Contains gluten, Contains seeds &amp; kittens, Contains dairy</p>
                  <ul class="dietary-list  menu__dietary-list">
                    <li class="dietary-item  icon  icon--vegetarian  menu__dietary-item">vegetarian</li>
                    <li class="dietary-item  icon  icon--glutenfree  menu__dietary-item">glutenfree</li>
                  </ul>
                  <ul class="dietary-list  menu__dietary-list">
                    <li class="dietary-item  icon  icon--not-spicy  menu__dietary-item"></li>
                  </ul>
                </footer>
              </div>
            </article>
          </div>
        </div>
        <div class="menu-subsection">
          <section class="menu-section  menu-section--subsection  menu-section--featured  menu__menu-section">
            <header class="section-header  menu__section-header">
              <h2 class="section-title  menu__section-title">£5 GOOD MORNING BREKKIE</h2>
              <h3 class="section-subtitle  menu__section-subtitle">One of these dishes and a regular hot drink for just £5, Monday - Friday until noon (excluding bank holidays). Not available in airports.</h3>
            </header>
            <div class="section-body  menu__section-body">
              <div class="menu-list  odd bk3-columns  menu__menu-list">
                <div class="menu-item  menu__menu-item">
                  <article class="item-article  menu__item-article">
                    <div class="item-content  menu__item-content">
                      <header class="item-header  menu__item-header">
                        <h3 class="item-title  menu__item-title">Ultimate Superfoods Rude Health Muesli</h3>
                        <p class="item-price  menu__item-price"></p>
                      </header>
                      <div class="item-description  menu__item-description">
                        <p>Add natural yoghurt &amp; fresh fruit £1.50Wheat free &amp; totally organic blend of oats, apricots, barley &amp; rye flakes, apple, sultanas, dates, golden linseed, seeds &amp; raisins</p>
                      </div>
                      <footer class="item-footer  menu__item-footer">
                        <h4 class="item-subtitle  menu__item-subtitle">Nutritional information</h4>
                        <p class="item-details  menu__item-details">Contains gluten, Contains seeds &amp; kittens, Contains dairy</p>
                        <ul class="dietary-list  menu__dietary-list">
                          <li class="dietary-item  icon  icon--vegetarian  menu__dietary-item">vegetarian</li>
                          <li class="dietary-item  icon  icon--nutfree  menu__dietary-item">nutfree</li>
                          <li class="dietary-item  icon  icon--dairyfree  menu__dietary-item">dairyfree</li>
                        </ul>
                        <ul class="dietary-list  menu__dietary-list">
                          <li class="dietary-item  icon  icon--not-spicy  menu__dietary-item"></li>
                        </ul>
                      </footer>
                    </div>
                  </article>
                </div>
                <div class="menu-item  menu__menu-item">
                  <article class="item-article  menu__item-article">
                    <div class="item-content  menu__item-content">
                      <header class="item-header  menu__item-header">
                        <h3 class="item-title  menu__item-title">Granola Breakfast Sundae</h3>
                        <p class="item-price  menu__item-price"></p>
                      </header>
                      <div class="item-description  menu__item-description">
                        <p>Granola, natural yoghurt, fresh fruit &amp; honey</p>
                      </div>
                      <footer class="item-footer  menu__item-footer">
                        <h4 class="item-subtitle  menu__item-subtitle">Nutritional information</h4>
                        <p class="item-details  menu__item-details">Contains gluten, Contains seeds &amp; kittens, Contains dairy</p>
                        <ul class="dietary-list  menu__dietary-list">
                          <li class="dietary-item  icon  icon--vegetarian  menu__dietary-item">vegetarian</li>
                        </ul>
                        <ul class="dietary-list  menu__dietary-list">
                          <li class="dietary-item  icon  icon--not-spicy  menu__dietary-item"></li>
                        </ul>
                      </footer>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer class="section-footer  menu__section-footer">
        <p class="section-note  menu__section-note">here is the note part</p>
      </footer>
    </section>
  </div>
</div>


{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
