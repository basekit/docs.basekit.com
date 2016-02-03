---
layout: widget
title: Click To Call
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/click-to-call/
- version: Version 1.0
  url: /widgets/v1/click-to-call/
---

# Click To Call

The click to call widget has similar properties to the [button widget](/widgets/v2/button-widget/) but links directly to the phone number that has been added into the profile settings. This provides a direct way for a user to call the company, either via mobile web viewing or from a desktop calling application such as Skype. The widget uses the phone number from the profile section as a default for the link and the text in the link. These can be both changed via the Editor.

## Examples

### Basic usage

{% highlight python %}
{% raw %}
{{widget('clicktocall', 'clicktocalldefault', {})|raw}}
{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('clicktocall', 'headerclicktocall', {
  'phoneText': 'Call Now',
  'italic': true,
  'bold': true,
  'fontSize': 18,
  'align': 'widget-align-center'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__clicktocall-headerclicktocall" class="widget  widget--template-widget" data-widget-type="clicktocall">
  <div class="bk-clicktocall  clicktocall  widget__clicktocall  widget-align-center">
    <a href="tel:" class="phone-number-link  icon  icon--phone  clicktocall__phone-number-link italic bold" style="font-size:18px">
      <span class="label  clicktocall__label">Call Now</span>
    </a>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* `phoneText`: The text shown in the click to call widget.

* `italic`: Sets the click to call to italicised using an `italic` class on the button element, `true` or `false` respectively.

* `bold`: Sets the click to call to bold using a `bold` class on the button element, `true` or `false` respectively.

* `fontSize`: Changes the click to call font size in pixel values, options are `14`, `16`, `18`, `20`, `22`, `24`

* `align`: Sets the button alignment using classes on the surround `div` element. The following options are available:

  * `widget-align-left`: To align the text to the left.
  * `widget-align-center`: To align the text to centre.
  * `widget-align-right`: To align the text to the right.
