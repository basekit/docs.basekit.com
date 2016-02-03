---
layout: widget
title: Social Icons
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/social-icons/
- version: Version 1.0
  url: /widgets/v1/social-icons/
---

# Social Icons

Add a social icons widget to your template.

## Overview

You can add a social icons widget to your template. This widget will display icon links for the user's social media profile URLs.

To include a social icons widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('socialicons', 'thisuniquewidgetname', {'googleplus': 'https://plus.google.com/101946323226233111530', 'linkedin':'http://www.linkedin.com/company/mycompanyname', 'facebook': 'https://www.facebook.com/mycompanyname', 'twitter': 'https://twitter.com/mycompanyname', 'youtube': 'https://www.youtube.com/user/mycompanyname', 'rss': 'http://news.bbc.co.uk/1/hi/help/rss/default.stm'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget. You can use custom links or use the shared profile data: 

* `googleplus`: The Google+ URL. i.e., `https://plus.google.com/101946323226233111530` or `profile`

* `linkedin`: The Linkedin URL. i.e., `http://www.linkedin.com/company/mycompanyname` or `profile`

* `facebook`: The Facebook URL. i.e., `https://www.facebook.com/mycompanyname` or `profile`

* `twitter`: The Twitter URL. i.e., `https://twitter.com/mycompanyname` or `profile`

* `youtube`: The Youtube URL. i.e., `https://www.youtube.com/user/mycompanyname` or `profile`

* `rss`: The RSS URL. i.e, `http://news.bbc.co.uk/1/hi/help/rss/default.stm` or `profile`

* `align`: The widget alignment. You can set it to:
  * `widget-align-left`
  * `widget-align-center`
  * `widget-align-right`
