---
layout: widget
title: Slideshow
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/slideshow/
- version: Version 1.0
  url: /widgets/v1/slideshow/
---

# Slideshow

Add a slideshow widget to your template.

## Overview

You can add a slideshow widget to your template. This widget will display an image gallery slideshow.

To include a slideshow widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('responsiveslideshow', 'thisuniquewidgetname', {'duration':'3', 'transSpeed': '1000', 'transType': 'fade', 'showButtons': true, 'showBullets': false, 'allowPause': true, 'allowLoop': true, 'images':[{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'},{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'},{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'},{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'}]})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `duration`: The slideshow duration in seconds

* `transSpeed`: The speed of the transition in milliseconds

* `transType`: The type of transition. Possible values:

  * `dissolve`
  * `fade`
  * `none`

* `showButtons`: Show the buttons to go to the next/prev image. Possible values: `true` or `false`

* `showBullets`: Show the bullets to go to a different image. Possible values: `true` or `false`

* `allowPause`: Allow to pause the slideshow. Possible values: `true` or `false`

* `allowLoop`: Make the slideshow repeat in a loop. Possible values: `true` or `false`

* `crop`: Crop the images in the slideshow to fit, or not. Possible values: `true` or `false`

* `images`: An array of images with properties (`imageHeight`, `imageWidth`, `url`, `title`, `description`) as opposed to using an album
