---
layout: widget
title: Gallery
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/gallery/
- version: Version 1.0
  url: /widgets/v1/gallery/
---

# Gallery

Add a gallery widget to your template.

## Overview

You can add a gallery widget to your template. It will use images in your album and can be later customised within the BaseKit Editor. 

To include a gallery widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('gallery', 'thisuniquewidgetname', {'images':[{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'},{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'},{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'},{'imageHeight':'350', 'imageWidth':'300', 'url':'http://placehold.it/350x300', 'title':'test title', 'description': 'test desc'}]})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

* `showTitle`: optional show or hide the image title. `true` or `false`

* `showDescription`: optional show or hide the image description. `true` or `false`

* `images`: optional An array of images with properties (`imageHeight`, `imageWidth`, `url`, `title`, `description`) as opposed to using an album
