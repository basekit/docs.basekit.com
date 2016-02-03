---
layout: doc
title: Profile Data
---

# Profile Data

Data relating to the user's profile.

## Attributes

You can render these values from the profile data:

* `business` (string): Company name entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.business }}

{% endraw %}
{% endhighlight %}

* `companydescription` (string): Company description entered by the user via the company profile

{% highlight html %}
{% raw %}

<h2>About Us</h2>
<p>{{ profile.companydescription }}</p>

{% endraw %}
{% endhighlight %}

* `strapline` (string): Company strapline entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.strapline }}

{% endraw %}
{% endhighlight %}

* `email` (string): Email associated to the user's company profile. Important note: this is not the one associated to the user account

{% highlight python %}
{% raw %}

{{ profile.email }}

{% endraw %}
{% endhighlight %}

* `address1` (string): First line of the address entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.address1 }}

{% endraw %}
{% endhighlight %}

* `address2` (string): Second line of the address entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.address2 }}

{% endraw %}
{% endhighlight %}

* `address` (string): This is the combination of address1 and address2

{% highlight python %}
{% raw %}

{{ profile.address }}

{% endraw %}
{% endhighlight %}

* `country` (string): Country of the company entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.country }}

{% endraw %}
{% endhighlight %}

* `postalcode` (string): Postal Code of the company entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.postalcode }}

{% endraw %}
{% endhighlight %}

* `twitter` (string): Twitter tag entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.twitter }}

{% endraw %}
{% endhighlight %}

* `phone` (string): Telephone number entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.phone }}

{% endraw %}
{% endhighlight %}

* `logo` (string): URL of the logo image associated to the company profile

{% highlight html %}
{% raw %}

<img alt="Company Logo" src="{{ profile.logo }}"/>

{% endraw %}
{% endhighlight %}

* `logowidth` (string): If required, the logo width is associated to the company profile

{% highlight python %}
{% raw %}

{{ profile.logowidth }}

{% endraw %}
{% endhighlight %}

* `logoheight` (string): If required, the logo height is associated to the company profile

{% highlight python %}
{% raw %}

{{ profile.logoheight }}

{% endraw %}
{% endhighlight %}

* `linkedin` (string): The URL of the LinkedIn profile account entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.linkedin }}

{% endraw %}
{% endhighlight %}

* `facebook` (string): The URL of the Facebook profile/page entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.facebook }}

{% endraw %}
{% endhighlight %}

* `rss` (string): The URL of the RSS feed entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.rss }}

{% endraw %}
{% endhighlight %}

* `youtube` (string): The URL of the YouTube page entered by the user via the company profile

{% highlight python %}
{% raw %}

{{ profile.youtube }}

{% endraw %}
{% endhighlight %}
