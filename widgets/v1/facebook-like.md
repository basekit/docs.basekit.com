---
layout: widget
title: Facebook Like
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/facebook-like/
- version: Version 1.0
  url: /widgets/v1/facebook-like/
---

# Facebook Like

Add a Facebook Like widget to your template.

## Overview

You can add a Facebook Like widget to your template. The widget can be later customised within the BaseKit Editor.

To include a Facebook Like widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('facebooklike', 'thisuniquewidgetname', {text: 'FaceBook Like', showFaces: 'true', action: 'like', colorscheme: 'light', layout: 'standard', height: '80', font: 'arial', locale: 'en_US', thisUrl: 'www.mysite.com'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `text`: The text on the widget

* `showFaces`: Display the Facebook profile pictures below the button. `true` or `false`

* `action`: The verb to display on the button. `Like` or `recommend`

* `colorscheme`: The colour scheme. `light` or `dark`

* `layout`: Determines the size and amount of social context next to the button.
`standard`, `button_count` or `box_count`

* `height`: The height of the widget depending on the `layout` and `showFaces`

  * if the `layout` is `box_count`, set it to `90`
  * if the `showFace` is `true` and if the `layout` is not `box_count`, set it to `80`
  * if the `showFace` is `false`, set it to `30`
  
* `font`: The button text font. `arial`, `lucida grande`, `segoe ui`, `tahoma`, `trebuchet ms`, `verdana`

* `og_url`: The page visitors are going to like, e.g. `www.mysite.com`

* `og_title` (optional): The liked page title, e.g. `Home Page`

* `og_description` (optional): The liked page title. `This is the home page`

* `og_site_name` (optional): The liked page site name, e.g. `BaseKit`

* `og_image` ( optional): The image showing alongside the news item, e.g. `http://image.basekit.com/live77891_bk13-imac-and-iphone-hp-new-headerv8-big.png`
