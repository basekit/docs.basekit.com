---
layout: widget
title: Click To Call
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/click-to-call/
- version: Version 1.0
  url: /widgets/v1/click-to-call/
---

# Click To Call

Add a click to call widget to your template.


## Overview
You can add a click to call widget to your template to allow the visitor to click and call the number in the profile section or customised by the editor user. The widget can be later customised within the BaseKit Editor.

To include a click to call widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('clicktocall', 'thisuniquewidgetname', {phoneText: 'Click to Call'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options
You can change the following options for the widget:

* `phoneText`: The text on the widget

* `italic`: The text style. `true` or `false` (default)

* `bold`: The text style. `true` or `false` (default)

* `textAlign`: The text style. You can set it:

  * `justifyleft`
  * `justifyright`
  * `justifycenter` (default)
  * `justifyfull`

* `fontSize`: The text style. You can set it: 
`inherit` (default), `14`, `16`, `18`, `20`, `22`, `24`

* `align`: The widget alignment. You can set it to:

  * `widget-align-left`
  * `widget-align-center`
  * `widget-align-right`
