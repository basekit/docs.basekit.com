---
layout: widget
title: Button Widget
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/button-widget/
- version: Version 1.0
  url: /widgets/v1/button-widget/
---

# Button Widget

Add a button to your template.

## Overview

You can add a button to your template. The button can be later customised within the BaseKit Editor. 
To include a button in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('button', 'thisuniquewidgetname', {italic: true, text:'button', 'align':'widget-align-center'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `text`: The button text:

* `italic`: The button text style. `true` or `false` (default)

* `bold`: The button text style. `true` or `false` (default)

* `textAlign`: The button text alignment. You can set it:

  * `justifyleft`
  * `justifyright`
  * `justifycenter` (default)
  * `justifyfull`
  
* `fontSize`: The button text style. You can set it to: 

  * `inherit` (default), `14`, `16`, `18`, `20`, `22`, `24`

* `align`: The widget alignment. You can set it to: 

  * `widget-align-left`
  * `widget-align-center`
  * `widget-align-right`

* `action`: The button link action. You can set it to:

  * `none` (default)
  * `internal`
  * `external`
  * `email`

* `url`: The button link url. You can set it depends on the action:

  * if action is set `none`, then url should be empty (default) 
  * if action is set `internal`, then url should be an internal link to your page. e.g. `/home`
  * if action is set `external`, then url should be an external link, e.g. `www.mysite.com`
  * if action is set `email`, then url should be an email address, e.g. `example@example.com`

* `target`: It sets where to open the external url. You set it only when action is set to `external`:

  * if you want to open the external link in the current window set it to `_self`
  * if you want to open the external link in a new window set it to `_blank`
