---
layout: doc
title: Page Data
---

# Page Data

Data relating to the current viewed page.

## Attributes
You can render these values from the page data:

* `title`: The page title that will usually sit inside the `<title>` element. This is changed by the user in the page settings panel within the editor

{% highlight html %}
{% raw %}

<title>{{ page.title }}</title>

{% endraw %}
{% endhighlight %}

* `keywords`: The keywords associated to that page. These are usually used for the keywords meta tag, commonly used for SEO reasons. This can be changed by the user via the page settings

{% highlight html %}
{% raw %}

<meta name="keywords" content="{{ page.keywords }}" />

{% endraw %}
{% endhighlight %}

* `description`: The description that describes the page content. These are usually used for the description meta tag, commonly used for SEO reasons. This can be changed by the user via the page settings

{% highlight html %}
{% raw %}

<meta name="description" content="{{ page.description }}" />

{% endraw %}
{% endhighlight %}

* `seoLang`: The language code for the content of the page (i.e. en, es, fr). Commonly used in a content-language meta tag. This language code currently can not be changed by the user

{% highlight html %}
{% raw %}

<meta http-equiv="content-language" content="{{ page.seoLang }}" />

{% endraw %}
{% endhighlight %}

* `backgroundClass`: The background class is set via the editor when the user changes the background settings within the Editor

{% highlight html %}
{% raw %}

<body class="{{ page.backgroundClass }}">

{% endraw %}
{% endhighlight %}

* `headscript`: Specifically for the markup that needs to live in the `HEAD` tag for this page only. This is the code entered by the user via the page settings to display for this page. This value is automatically included into the template by the Editor and is added at the very bottom of the `HEAD` block statement

{% highlight python %}
{% raw %}

{{ page.headscript|raw }}

{% endraw %}
{% endhighlight %}

* `bodyscript`: Similar to the `headscript` but for the `BODY` tag. This value is automatically included into the template by the Editor and is added at the very bottom of the document

{% highlight python %}
{% raw %}

{{ page.bodyscript|raw }}

{% endraw %}
{% endhighlight %}

## Advanced Attributes

* `componentTree`: The component tree is a tree structure of all the widgets and their values within the page. It is broken into two sections; zone widgets (widgets that live in the zone and only exist in the context of the current page) and templates widgets (these live within the current layout and will be available for any page using it)