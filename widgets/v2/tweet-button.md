---
layout: widget
title: Tweet button
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/tweet-button/
- version: Version 1.0
  url: /widgets/v1/tweet-button/
---

# Tweet button

The tweet button widget allows the option to post the currently viewed page to Twitter along with a message.

## Examples

### Basic usage

{% highlight django %}
{% raw %}

{{widget('tweet', 'button', {})|raw}}

{% endraw %}
{% endhighlight %}

By default the text in the button is empty, so it's advised that you add text using the ```linkText``` option.

### Example usage

{% highlight django %}
{% raw %}

{{widget('tweet', 'tweetblog', {
  'linkText': 'Share the blog',
  'tweetText': 'Checkout this blog',
  'align': 'widget-align-right'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__tweet-tweetblog" class="widget  widget--template-widget" data-widget-type="tweet">
  <div class="bk-tweet  tweet  widget__tweet  widget-align-right">
    <a class="button  icon  icon--twitter  tweet__button" target="_blank" href="https://twitter.com/share?text=Checkout this blog&amp;url=">Share the blog</a>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

The button widget has a wide selection of options:

* ```linkText```: The text shown on the tweet button.

* ```tweetText```: The text shown in the posted tweet.

* ```align```: Sets the button alignment using classes on the surrounding ```div``` element. The following options are available:

  * ```widget-align-left```: To align the button to the left.
  * ```widget-align-center```: To align the button to centre.
  * ```widget-align-right```: To align the button to the right.
