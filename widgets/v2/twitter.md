---
layout: widget
title: Twitter
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/twitter/
- version: Version 1.0
  url: /widgets/v1/twitter/
---

# Twitter feed widget

Add a twitter feed widget to your template.

You can add a Twitter feed widget to your template. The feed source can be changed later within the Editor. 

## Examples

### Basic usage

To include a Twitter feed widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('twitter', 'twitterfeed', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('twitter', 'twitterfeed', {
  'searchKey': 'cats',
  'searchType': 'username',
  'count': '3',
  'refreshTime': '1800000',
  'includeRts': '0'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__twitterfeed" data-name="twitter" class="widget  widget--template-widget">
  <div class="bk-twitter  twitter  widget__twitter">
    <ul class="tweet-list  twitter__tweet-list  js-twitter">
      <li class="tweet-item  twitter__tweet-item">
        <div class="avatar  twitter__avatar">
          <a class="avatar-link  twitter__avatar-link" href="https://twitter.com/basekit" target="_blank">
            <img class="avatar-image  twitter__avatar-image" alt="BaseKit.Com" title="BaseKit.Com" data-screename="basekit" src="//placehold.it/98x98">
          </a>
        </div>
        <div class="tweet-wrap  twitter__tweet-wrap">
          <a class="account-link  twitter__account-link" href="https://twitter.com/basekit" target="_blank">
            <span class="account-name  twitter__account-name">BaseKit.Com</span>
          </a>
          <p class="tweet-content  twitter__tweet-content">How To Get Big-Brand Search Visibility</p>
          <span class="tweet-metadata  twitter__tweet-meta">
            <time class="timestamp  twitter__timestamp" datetime="2014-08-07T00:00:00+00:00">Thu Aug 2014</time>
            <span class="via  twitter__via">via</span>
            <a href="http://www.tweetdeck.com" rel="nofollow">TweetDeck</a>
          </span>
        </div>
      </li>
      <li class="tweet-item  twitter__tweet-item">
        <div class="avatar  twitter__avatar">
          <a class="avatar-link  twitter__avatar-link" href="https://twitter.com/basekit" target="_blank">
            <img class="avatar-image  twitter__avatar-image" alt="BaseKit.Com" title="BaseKit.Com" data-screename="basekit" src="//placehold.it/98x98">
          </a>
        </div>
        <div class="tweet-wrap  twitter__tweet-wrap">
          <a class="account-link  twitter__account-link" href="https://twitter.com/basekit" target="_blank">
            <span class="account-name  twitter__account-name">BaseKit.Com</span>
          </a>
          <p class="tweet-content  twitter__tweet-content">Check out the 10 companies that control the internet </p>
          <span class="tweet-metadata  twitter__tweet-meta">
            <time class="timestamp  twitter__timestamp" datetime="2014-08-07T00:00:00+00:00">Thu Aug 2014</time>
            <span class="via  twitter__via">via</span>
            <a href="http://www.tweetdeck.com" rel="nofollow">TweetDeck</a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* `searchKey`: The source key from which the tweets will be retrieved. Also you can put `profile` to use the shared profile data

* `searchType`: The search key type. Possible values: `username` or `topic`

* `refreshTime`: The refresh time in milliseconds

* `includeRts`: Include retweets. Possible values: `0` (do not include) or `1` (include)

* `count`: The number of tweets that the widget will show
