---
layout: widget
title: Yelp Reviews
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/yelp-reviews/
- version: Version 1.0
  url: /widgets/v1/yelp-reviews/
---

# Yelp Reviews

Version: >= 7.34. Add a Yelp review widget to your template.

## Overview

You can add a Yelp review widget to your template. The Yelp business ID can be changed later with the BaseKit Editor.

To include a Yelp widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('yelpreview', 'thisuniquewidgetname', {'title': 'Yelp Review', 'yelpbusinessid': ''})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `title`: The title to display above the review, can be left blank

* `yelpbusinessid`: This is the unique ID Yelp uses to find your business, i.e. `apple-store-london-5`

* `refreshTime`: How often the widget refreshes `3600000` `72000000`
