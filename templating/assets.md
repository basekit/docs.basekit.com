---
layout: doc
title: Assets
---


# Assets

The inclusion of assets into a template is much the same as including them into a normal site. There are certain file types that we accept within a git repository.

## HTML File Types

* `\*.twig`


## CSS File Types

* `\*.less`
* `\*.css`


## Image File Types

* `\*.jpg`
* `\*.jpeg`
* `\*.png`
* `\*.gif`
* `\*.svg`


## JavaScript File Types

* `\*.js`
* `\*.json`


## Other File Types

* `\*.md`


### File Structure

A common BaseKit repository directory structure looks like:

{% highlight text %}
{% raw %}

images/
  - feature-bg.jpg
  - icons.png
  - logo.png
README.md
default.twig
example.jpg
home.twig
metadata.json
stylesheet.less

{% endraw %}
{% endhighlight %}

## Recommendations

* If you include any other file types, the repository will not upload to a BaseKit environment
* Please use [a-z_-] characters only
* There is a 100MB size limit on repositories, anything over this won't be processed


## asset() & image() functions

BaseKit templates can be deployed to multiple environments, so we refer to a file relatively in the template code. The BaseKit framework will convert these relative links into absolute urls at the point of display.

For example, to reference `logo.png` in the images directory:

In `\*.less` files you use the `image()` function:

{% highlight scss %}
{% raw %}

  div.logo { background-image:image('/image/logo.png'); }

{% endraw %}
{% endhighlight %}

In `\*.twig` files you use the `asset()` function.

You can also reference other files types within \*twig and (as of version 7.53) `\*.less` files:

{% highlight html %}
{% raw %}

<!-- Image asset -->
<img src="{{asset('images/icons/logo-icon.jpg')}}" width="20" height="20" />

<!-- CSS asset -->
<link href="{{asset('less/buttons.css')}}" rel="stylesheet" />

<!-- JavaScript asset -->
<script src="{{asset('js/scripts.js')}}" type="text/javascript"></script>

{% endraw %}
{% endhighlight %}

> **IMPORTANT:** Using the `asset()` function in `\*.less` files is only available in **version 7.53 and above**.

{% highlight scss %}
{% raw %}

@font-face {
  font-family: 'FontAwesome';
  src: url('asset(fonts/fontawesome-webfont.eot)');
  src: url('asset(fonts/fontawesome-webfont.eot)') format('embedded-opentype'),
    url('asset(fonts/fontawesome-webfont.woff)') format('woff'),
    url('asset(fonts/fontawesome-webfont.ttf)') format('truetype'),
    url('asset(fonts/fontawesome-webfont.svg)#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

{% endraw %}
{% endhighlight %}