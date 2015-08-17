---
layout: widget
title: Yelp Reviews
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/yelp-reviews/
- version: Version 1.0
  url: /widgets/v1/yelp-reviews/
---

# Yelp Reviews

This widget is only compatible with Editor **version 7.32 and above**. Add a Yelp review widget to your template.

You can add a Yelp review widget to your template. The Yelp business ID can be changed later with the Editor.

## Examples

### Basic usage

To include a Yelp widget in your template you will need to add the following line:

{% highlight django %}
{% raw %}

  {{widget('yelpreview', 'reviews', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight django %}
{% raw %}

  {{widget('yelpreview', 'reviews', {
    'title': 'Yelp Review',
    'yelpbusinessid': ''
  })|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__reviews" data-name="yelpreview" class="widget  widget--template-widget">
  <div class="bk-yelpreview  yelpreview  widget__yelpreview  js-yelpreview">
    <h2 class="yelp-title  yelpreview__yelp-title">Yelp Review</h2>
    <ul class="review-list  yelpreview__review-list">
      <li class="review-item  yelpreview__review-item">
        <article class="review-article  yelpreview__review-article">
          <header class="review-header  yelpreview__review-header">
            <h3 class="review-title  yelpreview__review-title">
              <span class="author-label  yelpreview__author-label">Posted by </span><span class="review-author  yelpreview__review-author">Heather F.</span>
            </h3>
            <div class="review-rating  yelpreview__review-rating">
              <img src="http://s3-media1.ak.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png" alt="%1 stars" title="%1 stars">
            </div>
          </header>
          <div class="review-excerpt  yelpreview__review-excerpt">
            <p class="review-text  yelpreview__review-text">This. Place. This. Effing. Place. My partner and I ate here twice on our roadtrip to CO from Portland. It was perfect both times. Their sauces are...</p>
            <a class="review-link  yelpreview__review-link" href="http://www.yelp.com/biz/mft-bbq-and-vegan-food-boise" target="_blank">Read more...</a>
          </div>
          <footer class="review-footer  yelpreview__review-footer">
            <time class="timestamp  yelpreview__timestamp" datetime="2014-10-22T00:00:00+00:00">13 Oct 2014</time>
          </footer>
        </article>
      </li>
    </ul>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* ```title```: The title to display above the review, can be left blank

* ```yelpbusinessid```: This is the unique ID Yelp uses to find your business, i.e. ```apple-store-london-5```

* ```refreshTime```: How often the widget refreshes ```3600000``` ```72000000```
