---
layout: doc
title: Using LESS in V7
---

# Using LESS in V7

> **Note**: If you're using version 8 of the Editor please use the V8 documentation: [Using LESS in V8](/v8/templating/less/).

[LESS](http:// lesscss.org/) extends CSS with dynamic behaviour such as **mixins, operations, functions and variables**. As an extension to CSS, LESS is not only backwards compatible with CSS, but the extra features it adds use existing CSS syntax. What this means is that you can write leaner code very quickly.

## LESS Usage
LESS runs on both **server-side** and **client-side**, and is used to combine values from the editor with a templates CSS style.

The Editor provides many LESS variables that a designer can use to build into their CSS. When a user changes values within the Editor, the LESS file is refreshed and new values are pushed into the site. We use the power of LESS variables to achieve this.

## Important Note: Editor Variable Dependencies
The Editor variables defined below are used in conjunction with [advanced metadata](/templating/metadata/#advanced-metadatajson-optional). Adding advanced metadata will allow you to give your template customisability, giving the user the ability to change colours and fonts via the Editor.

## LESS Variables
Here is the list of variables you can use in the stylesheet.less to get values from the Editor:

### Colour Swatch Variables
A template can be created around one or more colour swatches. There are 7 colour in a swatch. They can be added to a template. They can be changed by the user with the editor. We use colour swatches to link up colour theming to the Editor.

{% highlight sass %}

// Colour Swatch Variables related to the colour swatches within the editor
@color-swatch1 // Background
@color-swatch2 // Contrast colour
@color-swatch3 // Button colour
@color-swatch4 // Title colour
@color-swatch5 // Paragraph colour
@color-swatch6 // Nav text colour
@color-swatch7 // Header background colour

{% endhighlight %}

### Background Style Variables
It's common for a user to want to be able to change background properties of a site design. This can also be achieved in the Editor, and values can be referenced in the LESS file using the following variables.

{% highlight sass %}

// Site Background Properties
@siteBackgroundColor
@siteBackgroundGradientFrom
@siteBackgroundGradientTo
@siteBackgroundGradientType
@siteBackgroundImage
@siteBackgroundImageScale
@siteBackgroundPositionX
@siteBackgroundPositionY
@siteBackgroundRepeat

{% endhighlight %}

### Font Swatch Variables

Font swatches are extensive in the Editor template engine. A font swatch contains nine fonts, each with properties such as colour, size, line height, etc. Within the Editor, we match a swatch to specific tags. For example, font-swatch1 refers to the H1 tag within the editor. See below for details.

{% highlight sass %}

// Font Swatch Variables related to the colour swatches within the editor

// Font Swatch 1 = H1 tag
@font-swatch1-color
@font-swatch1-font-family
@font-swatch1-font-size
@font-swatch1-font-weight
@font-swatch1-letter-spacing
@font-swatch1-line-height

// Font Swatch 2 = H2 tag
@font-swatch2-color
@font-swatch2-font-family
@font-swatch2-font-size
@font-swatch2-font-weight
@font-swatch2-letter-spacing
@font-swatch2-line-height

// Font Swatch 3 = H3 tag
@font-swatch3-color
@font-swatch3-font-family
@font-swatch3-font-size
@font-swatch3-font-weight
@font-swatch3-letter-spacing
@font-swatch3-line-height

// Font Swatch 4 = H4 tag
@font-swatch4-color
@font-swatch4-font-family
@font-swatch4-font-size
@font-swatch4-font-weight
@font-swatch4-letter-spacing
@font-swatch4-line-height

// Font Swatch 5 = P tag
@font-swatch5-color
@font-swatch5-font-family
@font-swatch5-font-size
@font-swatch5-font-weight
@font-swatch5-letter-spacing
@font-swatch5-line-height

// Font Swatch 6 = Navigation
@font-swatch6-background-color
@font-swatch6-background-color-hover
@font-swatch6-color
@font-swatch6-color-hover
@font-swatch6-font-family
@font-swatch6-font-size
@font-swatch6-font-weight
@font-swatch6-letter-spacing
@font-swatch6-line-height

// Font Swatch 7 = Buttons
@font-swatch7-background-color
@font-swatch7-background-color-hover
@font-swatch7-color
@font-swatch7-font-family
@font-swatch7-font-size
@font-swatch7-font-weight
@font-swatch7-letter-spacing
@font-swatch7-line-height

// Font Swatch 8 = Feature Title
@font-swatch8-color
@font-swatch8-font-family
@font-swatch8-font-size
@font-swatch8-font-weight
@font-swatch8-letter-spacing
@font-swatch8-line-height

// Font Swatch 9 = Feature Text
@font-swatch9-color
@font-swatch9-font-family
@font-swatch9-font-size
@font-swatch9-font-weight
@font-swatch9-letter-spacing
@font-swatch9-line-height

// Font Swatch 10 = Company Name
@font-swatch10-color
@font-swatch10-font-family
@font-swatch10-font-size
@font-swatch10-font-weight
@font-swatch10-letter-spacing
@font-swatch10-line-height

{% endhighlight %}

### @Import for LESS

The Editor library supports `@import` functionality for less. This means you are able to split your styles into separate files and have the LESS compiler render the files in place. This means that you can avoid large stylesheets and organise code into smaller partials.

The Editor also supports server-side LESS rendering and well as client-side rendering. As server-side and client-side rendering engines reference files in different formats, we have to prepend the location on the front of the path so both technologies can locate the file accordingly.

This means we need to inject a path pointing to the LESS file:

{% highlight sass %}
{% raw %}
@import "@{templateCommon}/bk-less-framework.less";
@import "@{templateLocal}/css/partial.less";
{% endraw %}
{% endhighlight %}

#### templateCommon

The `"@{templateCommon}"` variable will be replaced with a path pointing to the Template Development Kit common template resources directory, where you can reference files such as `basekit-bootstrap.less` or the newer `bk-less-framework.less`.

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

There are many functions that you can use within LESS files. Most of them are found within the library itself. See [here](http:// lesscss.org/#reference) for LESS functions references.

We have built some other functions so we can achieve the most advanced responsive effects.

#### BKScale Function
The `bkscale` function will scale down a number value between 1 and 0. For example, if you wanted to reduce the text down for smaller devices you can do the following:

{% highlight scss %}

// @font-swatch1-font-size comes through to the stylesheet at 36px
h1 {
  font-size: @font-swatch1-font-size; // 36px
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: bkscale(@font-swatch1-font-size, 0.6); // 21.6px
  }
}

{% endhighlight %}

### Example CSS File

Here is a simple example of how stylesheet.less files could be created. You can view more examples [on GitHub](https:// github.com/basekit-templates).

{% highlight scss %}

body {
  background-color: @color-swatch1;
  margin: 0;
  padding: 0;
}

a {
  font-family: @font-swatch2-font-family;
  font-size: @font-swatch5-font-size;
  font-weight: @font-swatch5-font-weight;
  color: @color-swatch3;
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
  font-family: @font-swatch1-font-family;
  font-weight: @font-swatch1-font-weight;
  color: @font-swatch1-color;
  line-height: @font-swatch1-line-height;
  letter-spacing: @font-swatch1-letter-spacing;
  font-size: @font-swatch1-font-size;
}

h2 {
  font-family: @font-swatch2-font-family;
  font-size: @font-swatch2-font-size;
  font-weight: @font-swatch2-font-weight;
  line-height: @font-swatch2-line-height;
  color: @font-swatch2-color;
  letter-spacing: @font-swatch2-letter-spacing;
}

h3 {
  font-family: @font-swatch3-font-family;
  font-size: @font-swatch3-font-size;
  font-weight: @font-swatch3-font-weight;
  color: @font-swatch3-color;
  line-height: @font-swatch3-line-height;
  letter-spacing: @font-swatch3-letter-spacing;
}

h4 {
  font-family: @font-swatch4-font-family;
  font-size: @font-swatch4-font-size;
  font-weight: @font-swatch4-font-weight;
  line-height: @font-swatch4-line-height;
  color: @font-swatch4-color;
  letter-spacing: @font-swatch4-letter-spacing;
}

p {
  font-family: @font-swatch5-font-family;
  font-size: @font-swatch5-font-size;
  font-weight: @font-swatch5-font-weight;
  line-height: @font-swatch5-line-height;
  color: @font-swatch5-color;
  letter-spacing: @font-swatch5-letter-spacing;
}

{% endhighlight %}
