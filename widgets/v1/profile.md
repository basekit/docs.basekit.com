---
layout: widget
title: Profile
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/profile/
- version: Version 1.0
  url: /widgets/v1/profile/
---

# Profile

Add a profile widget to your template.

## Overview

You can add a profile widget to your template. The profile widget contains 11 types, and can use data from the user profile or can be customised by the user. The widget can be later customised within the BaseKit Editor. 

To include a profile widget in your template you will need to add the following example lines:

{% highlight python %}
{% raw %}

{{widget('profile', 'thisuniquewidgetname', { 'profileType':'twitter', 'twitter':'profile', 'refreshtime':'1800000'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `profileType`: The profile type you want to display. `address`, `email`, `strapline`, `companydescription`, `phone`, `business`, `copyright`, `twitter`, `map`, `form`, `socialicons`

Once you select the profile type, you need to specify options for the type:

* ### Address type
  `profileType`: `address`

  * `address`: The address to display. If set to `profile`, it will use the profile data, or you can put address e.g. `My Company Name`

  * `address1`: The address1 to display. If set to `profile`, it will use the profile data, or you can put address e.g. `Example Street`

  * `address2`: The address2 to display. If set to `profile`, it will use the profile data, or you can put address e.g. `Atown`

  * `country`: The country to display. You can only set to `profile`

  * `addressPostalCode`: The postal code to display. If set to `profile`, it will use the profile data, or you can put postcode e.g. `BS1 2ND`

* ### Email type
  `profileType`: `email`

  * `email`: The email address to display. If set to `profile`, it will use the profile data, or you can put email address e.g. `me@myemail.com`

* ### Strapline type
  `profileType`: `strapline`

  * `strapline`: The strap line to display. If set to `profile`, it will use the profile data, or you can put custom strap line e.g. `my strapline`

* ### Company Description type
  `profileType`: `companydescription`

  * `companydescription`: The company description to display. If set to `profile`, it will use the profile data, or you can put custom data e.g. `my company`

* ### Phone type
  `profileType`: `phone`

  * `phone`: The phone number to display. If set to `profile`, it will use the profile data, or you can put custom data e.g. `12345678`

* ### Business type
  `profileType`: `business`

  * `business`: The business name to display. If set to `profile`, it will use the profile data, or you can put custom data e.g. `BaseKit`

* ### Copyright type
  `profileType`: `copyright`

  * `copyright`: The copyright to display. If set to `profile`, it will use the profile data, or you can put custom data e.g. `© Copyright 2012 BaseKit Platform. All rights reserved`

* ### Latest Twitter type
  `profileType`: `twitter`

  * `twitter`: The twitter username for getting the latest tweet. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `BaseKit`

  * `refreshtime`: It controls how often the data gets refreshed. It uses millisecond as the unit. You can set `60000` for one minute

* ### Map type
  `profileType`: `map`

  * `mapAddress`: The address for rendering a Google Maps visual. If set to `profile`, it will use the profile data, or you can put custom data e.g. `BS1 2ND`

  * `mapZoom`: The map zoom level, e.g `12`

  * `mapHeight`: The map height in `px`. It can be set e.g `150`

* ### Single Form type
  `profileType`: `form`

  It uses the profile email address as the form submission address, but the user can change the profile email address in the editor.

  * `formText`: The send button text. It can be set e.g `Send`

  * `formTitle`: The email subject. It can be set e.g `Contact Form`

  * `formItalic`: The button text style. `true` or `false`

  * `formBold`: The button text style. `true` or `false`

  * `formAlign`: The button text style. You can set it:

    * `justifyleft`
    * `justifyright`
    * `justifycenter`
    * `justifyfull`

  * `formFontSize`: The Button text style. You can set it: `inherit`, `14`, `16`, `18`, `20`, `22`, `24`

  * `goalSource`: The source of the URL after you submit the form
    * `profile` will use the internal link
    * `custom` could be set to custom email address

  * `goalUrl`: The url after submit the form
  
    * If the `goalSource` is set to `profile`, it should be set to an internal link, e.g. `home` 
    * If the `goalSource` is set to `custom`, it should be set to an external link, e.g. `www.mysite.com`

* ### Social Icons Type
  `profileType`: `socialicons`

  * `socialIconsLinkedin`: LinkedIn icon. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `http://www.linkedin.com/company/mycompany`

  * `socialIconsTwitter`: Twitter icon. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `twitter`

  * `socialIconsFacebook`: Facebook icon. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `http://facebook.com/mycompany`

  * `socialIconsRss`: RSS icon. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `http://www.google.com/rss`

  * `socialIconsGoogleplus`: Google+ icon. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `http://www.googleplus.com/mycompany`

  * `socialIconsYoutube`: YouTube icon. If set to `profile`, it will use the profile data, or you can put custom data in e.g. `http://www.youtube.com/mycompany`
  