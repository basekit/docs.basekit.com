---
layout: widget
title: Signup Form
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/signup-form/
- version: Version 1.0
  url: /widgets/v1/signup-form/
---

# Sign Up Form

Add a signup form widget to your template.

## Overview

You can add a single line signup form widget to your template to allow the visitor to send an email to the email address in the manage shared contact section, or customised email address by the editor user. The widget can be later customised within the BaseKit Editor. 

To include a signup Form widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('signupform', 'thisuniquewidgetname', {'text': 'Send', 'label': 'Your Email', 'formTitle': 'Signup Form', 'email': 'profile'})|raw}}

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

* `fontSize`: The text style on the button. You can set it: `inherit` (default), `14`, `16`, `18`, `20`, `22`, `24`

* `formTitle`: The subject for the email

* `label`: The text next to the email input field

* `email`: The email address that the email will be sent to. It can be set to use the manage shared email address or put your own email address

  * `profiledefault`: The email address in the manage shared contact email address field
  * `example@example.com`: Could be set to custom email address

* `goalSource`: The source of the URL after submit the form

  * `profile`: It will use the internal link
  * `custom`: Could be set to custom email address

* `goalUrl`: The URL after the user submits the form

  * If the `goalSource` is set to `profile`, it should be set to an internal link, e.g. `home`
  * If the `goalSource` is set to `custom`, it should be set to an external link, e.g. `www.mysite.com`
