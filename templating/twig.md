---
layout: doc
title: Twig
---

# Twig Views

The Editor template engine is based on Twig. The Twig engine can render server side and client side. (We use twig.js for client side rendering). This is used for rendering HTML with data with our editor, templates, manage sections and widgets.

You have complete document access in twig files; access to html tags, head tags and body tags which gives you, the template designer, all the flexibility you require to design cutting edge templates.

All the documentation for Twig can be found at these sources:

* Twig - the flexible, fast, and secure template engine: [http://twig.sensiolabs.org/](http://twig.sensiolabs.org/)
* Client side rendering library: [https://github.com/schmittjoh/twig.js](https://github.com/schmittjoh/twig.js)

## Syntax Highlighting

Some text editors don't come with Twig syntax highlighting when you download them for the first time. This means it can be hard to read Twig code without the colours. Here's some helpful plugins to fix this issue:

* [Coda 2 Twig-HTML syntax highlighting mode](https://github.com/muxx/Twig-HTML.mode)
* [Sublime Text 3 syntax highlighting](https://github.com/Anomareh/PHP-Twig.tmbundle)
* [Atom Editor Twig syntax](https://atom.io/packages/php-twig)

## default.twig

This is where the HTML lives for the default page. If you only include default.twig in a template, then every page will use this file to render its HTML.

Stripped down to the basics, a Twig file should look like the following:

{% highlight html %}
{% raw %}

<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{ page.title }}</title>
    <meta name="keywords" content="{{ page.keywords }}" />
    <meta name="description" content="{{ page.description }}" />
    <meta http-equiv="content-language" content="{{ page.seoLang }}" />
  
    {% if site.favicon %}
    <link rel="icon" href="{{ site.favicon['favicon'] }}" type="image/x-icon" />
    <link rel="SHORTCUT ICON" href="{{ site.favicon['thumbnail'] }}?v={{ 'now'|date('U') }}" type="image/x-icon" />
    {% endif %}
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
  
    {% include basekit.headScript %}
  </head>
  <body class="{{ page.backgroundClass }}">
  
    {{zone()|raw}}
  
    {% include basekit.bodyScript %}
  </body>
</html>

{% endraw %}
{% endhighlight %}

## Editor HTML Breakdown

Let's look at this HTML in more detail

#### The Important Stuff

#### Bringing a template to life in the Editor

There are 2 tags that are required in any template to get them to work in the Editor. **Without these, the template will not come to life in the Editor**. These tags must appear in the head tag and at the bottom of the body tag.

{% highlight html %}
{% raw %}

<!doctype html>
<html>
  <head>
    {% include basekit.headScript %}
  </head>
  <body>
    {% include basekit.bodyScript %}
  </body>
</html>

{% endraw %}
{% endhighlight %}

These will bring widgets to life and let the Editor know that the page is ready.

### Rendering Data in Twig

{% highlight html %}
{% raw %}

<title>{{ page.title }}</title>

{% endraw %}
{% endhighlight %}

You can easily feed data into the template's HTML from the Editor engine. Twig views will pull the title value from the page's data and display it into the HTML. A complete list of data properties can be found here: [Editor Template Data](/data/)


### Common Assets in Templates

{% highlight html %}
{% raw %}

<link rel="stylesheet" href="//{/{{env.assetDomain}}/templates/common/responsive-columns.css" />

{% endraw %}
{% endhighlight %}

This will pull common assets into the template feed from the engine. In the example above we pull in CSS from the engine to give default CSS to the responsive columns. This is placed in the template so that you can bring the columns widget to life. If you need to create your own CSS for columns, remove this line and place your css file in. For example:

{% highlight html %}
{% raw %}

<link rel="stylesheet" href="{{asset('/css/responsive-columns.css')}}" />

{% endraw %}
{% endhighlight %}

You can find more information on the asset function in [this article](/templating/assets/#asset--image-functions).

### Background Rendering

We can code whatever design required into a template, but we want the user to be able to override certain design settings like the background colour, image, etc. When we place this tag into the body tag, a user will be able to edit the background using the Editor.

{% highlight html %}
{% raw %}

<body class="{{ page.backgroundClass }}">

{% endraw %}
{% endhighlight %}

### The Zone

This is where a user can drag their content. Wherever you place this tag in your template is where user placed content will be rendered into the HTML. The content is page-based so if the zone is rendered for multiple pages, the Editor engine will provide the widget HTML to the template and render it in place of this tag:

{% highlight python %}
{% raw %}

{{zone()|raw}}

{% endraw %}
{% endhighlight %}

> **Note:** A page does not have to have a zone but if one is not set a user will not be able to drag widgets onto the page.
