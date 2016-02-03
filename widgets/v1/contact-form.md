---
layout: widget
title: Contact Form
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/contact-form/
- version: Version 1.0
  url: /widgets/v1/contact-form/
---

# Contact Form

Add a contact form widget to your template.

## Overview

You can add a contact form widget to your template to allow the visitor to send an email to the email address in the manage shared contact section or customised email address by the Editor user. The widget can be later customised within the BaseKit Editor.

To include a contact form widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('contactform', 'thisuniquewidgetname', {'text': 'Submit','formTitle': 'Contact Form', 'email': 'profile'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `text`: The text on the button

* `italic`: The text style on the button. `true` or `false` (default)

* `bold`: The text style on the button. `true` or `false` (default)

* `align`: The text style on the button. You can set it: 

  * `justifyleft`
  * `justifyright`
  * `justifycenter` (default)
  * `justifyfull`

* `fontSize`: The text style on the button. You can set it: 
  `inherit` (default), `14`, `16`, `18`, `20`, `22`, `24`

* `formTitle`: The subject for the email

* `email`: The email address that the final message will be sent to. Using `profile` (default), will mean that it will use the email set in the manage shared email address settings. Alternatively you can set a custom email address, e.g. `example@example.com`

* `goalSource`: The source of the URL to redirect to after the form is submitted.
  Using `profile` will mean it will use the internal URL, or you can set a URL of your choice

* `goalUrl`: The URL after submit the form

  * If the `goalSource` is set to `profile`, it should be set to an internal link, e.g. `home`
  * If the `goalSource` is set to `custom`, it should be set to an external link, e.g. `www.mysite.com`

