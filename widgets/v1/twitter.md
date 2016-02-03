---
layout: widget
title: Twitter
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/twitter/
- version: Version 1.0
  url: /widgets/v1/twitter/
---

# Twitter

Add a twitter feed widget to your template.

## Overview

You can add a Twitter feed widget to your template. The feed source can be changed later within the BaseKit Editor. 

To include a Twitter feed widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('twitter', 'thisuniquewidgetname', {'searchKey': 'cats', 'searchType': 'username', 'count': '3','refreshTime': '1800000','includeRts': '0'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `searchKey`: The source key from which the tweets will be retrieved. Also you can put `profile` to use the shared profile data

* `searchType`: The search key type. Possible values: `username` or `topic`

* `refreshTime`: The refresh time in milliseconds

* `includeRts`: Include retweets. Possible values: `0` (do not include) or `1` (include)

* `count`: The number of tweets that the widget will show
