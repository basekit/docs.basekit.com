---
layout: doc
title: Site Data
---

# Site Data

Data relating to the current site.

## Attributes

You can render these values from the page data:

* `favicon` (array): Favicon uploaded by the user via the manage section within the Editor. This is an array of data with two parts; `favicon` and `thumbnail`

{% highlight python %}
{% raw %}

{% if site.favicon %}
  <link rel="icon" href="{{ site.favicon['favicon'] }}" type="image/x-icon" />
  <link rel="SHORTCUT ICON" href="{{ site.favicon['thumbnail'] }}?v={{ "now"|date("U") }}" type="image/x-icon" />
{% endif %}

{% endraw %}
{% endhighlight %}

* `primaryDomain` (string): Will display the primary domain for this site

{% highlight python %}
{% raw %}

{{ site.primaryDomain }}

{% endraw %}
{% endhighlight %}

* `templateData` (array): Data regarding the template currently being used. This is an array of data that includes keys `name`, `pageTypes`, `assetDomain`, `templateFolder`

{% highlight python %}
{% raw %}

{{ site.templateData['name'] }}

{% endraw %}
{% endhighlight %}
