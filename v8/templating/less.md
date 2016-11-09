---
layout: doc
title: Using LESS in V8
---

# Using LESS in V8

[LESS](http:// lesscss.org/) extends CSS with dynamic behaviour such as **mixins, operations, functions and variables**. As an extension to CSS, LESS is not only backwards compatible with CSS, but the extra features it adds use existing CSS syntax. What this means is that you can write leaner code very quickly.

## LESS Usage
LESS runs on both **server-side** and **client-side**, and is used to combine values from the editor with a templates CSS style.

The Editor provides many LESS variables that a designer can use to build into their CSS. When a user changes values within the Editor, the LESS file is refreshed and new values are pushed into the site. We use the power of LESS variables to achieve this.

## LESS Variables

A template has a number of predefined variables that are set in the metadata. This gives the developer full control over which styles the user can edit. 


Here is the [list of V8 variables](/v8/templating/style-variables/) you can use in the stylesheet.less to get values from the Editor.


### @Import for LESS

The Editor library supports `@import` functionality for less. This means you are able to split your styles into separate files and have the LESS compiler render the files in place. This means that you can avoid large stylesheets and organise code into smaller partials.

The Editor also supports server-side LESS rendering and well as client-side rendering. As server-side and client-side rendering engines reference files in different formats, we have to prepend the location on the front of the path so both technologies can locate the file accordingly.

This means we need to inject a path pointing to the LESS file:

{% highlight sass %}
{% raw %}
@import "@{templateCommon}/bk-less-framework-v8.less";
@import "@{templateLocal}/css/partial.less";
{% endraw %}
{% endhighlight %}

#### templateCommon

The `"@{templateCommon}"` variable will be replaced with a path pointing to the Template Development Kit common template resources directory, where you can reference files such as `bk-less-framework-v8.less`.

#### templateLocal

The `"@{templateLocal}"` variable will be replaced with a path pointing to your template directory on an environment. For example you have files organised in this fashion with your template:

{% highlight text %}

mytemplate/
  - README.md
  - default.twig
  - example.jpg
  - home.twig
  - metadata.json
  - stylesheet.less
  css/
    - boilerplate.less
    - responsive.css
    - widgets.less

{% endhighlight %}

To reference the css files in the CSS directory, you would place the following code in your stylesheet.less file.

{% highlight sass %}

@import "@{templateLocal}/css/boilerplate.less";
@import "@{templateLocal}/css/widgets.less";
@import "@{templateLocal}/css/responsive.css";

{% endhighlight %}


### Special Functions for LESS

There are many functions that you can use within LESS files. Most of them are found within the library itself. See [here](http://lesscss.org/#reference) for LESS functions references.

We have built some other functions so we can achieve the most advanced responsive effects.

#### BKScale Function
The `bkscale` function will scale down a number value between 1 and 0. For example, if you wanted to reduce the text down for smaller devices you can do the following:

{% highlight scss %}

// @font__h1--font-size comes through to the stylesheet at 36px
h1 {
  font-size: @font__h1--font-size; // 36px
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: bkscale(@font__h1--font-size, 0.6); // 21.6px
  }
}

{% endhighlight %}

### Example CSS File

Here is a simple example of how stylesheet.less files could be created. You can view more examples [on GitHub](https://github.com/basekit-templates).

{% highlight scss %}

body {
  background-color: @color__body--background;
  margin: 0;
  padding: 0;
}

a {
  color: @color__link--text;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1, h2, h3, h4, h5, p {
  margin: 0;
  padding: 0 0 10px;
}

h1 {
	font-family: @font__h1--font-family;
	font-size: @font__h1--font-size;
	font-weight: @font__h1--font-weight;
	line-height: @font__h1--line-height;
	letter-spacing: @font__h1--letter-spacing;
	color: @color__h1--text;
}

h2 {
    font-family: @font__h2--font-family;
    font-size: @font__h2--font-size;
    font-weight: @font__h2--font-weight;
    line-height: @font__h2--line-height;
    letter-spacing: @font__h2--letter-spacing;
    color: @color__h2--text;
}

h3 {
    font-family: @font__h3--font-family;
    font-size: @font__h3--font-size;
    font-weight: @font__h3--font-weight;
    line-height: @font__h3--line-height;
    letter-spacing: @font__h3--letter-spacing;
    color: @color__h3--text;
}

h4 {
    font-family: @font__h4--font-family;
    font-size: @font__h4--font-size;
    font-weight: @font__h4--font-weight;
    line-height: @font__h4--line-height;
    letter-spacing: @font__h4--letter-spacing;
    color: @color__h4--text;
}

p {
    font-family: @font__p--font-family;
    font-size: @font__p--font-size;
    font-weight: @font__p--font-weight;
    line-height: @font__p--line-height;
    letter-spacing: @font__p--letter-spacing;
    color: @color__p--text;
}

{% endhighlight %}

