---
layout: widget
title: Advanced Contact Form
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/advanced-contact-form/
---

# Advanced contact form

Add a contact form widget to your template with additional options and fields.

You can add an advanced contact form widget to your template with just the same properties as the normal [contact form widget](/widgets/v2/contact-form/), but with the addition of custom fields and options. These additional options and fields can be added via the Editor in the advanced contact form widget options.

## Examples

### Basic usage

To include an advanced contact form widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('advancedcontactform', 'advancedcontact', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('advancedcontactform', 'contact', {
 'text': 'Submit',
  'formTitle': 'Contact Us',
  'email': 'profile'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div class="bk-advancedcontactform  advancedcontactform  widget__advancedcontactform">
  <form action="" method="post" class="form  advancedcontactform__form js-form">
    <fieldset class="fieldset  advancedcontactform__fieldset">
      <legend class="legend  advancedcontactform__legend">Contact Us</legend>
      <div class="form-body  advancedcontactform__form-body">
        <div class="form-group  advancedcontactform__form-group">
          <label class="label  label--email  advancedcontactform__label" for="page-zones__main-widgets__advancedcontactform-email__input--email">Your Email:</label>
          <input type="email" class="input  input--email  input--single-line  advancedcontactform__input  js-email-input" placeholder="Type your Email" name="page-zones__main-widgets__advancedcontactform-email__input--email" id="page-zones__main-widgets__advancedcontactform-email__input--email">
        </div>
        <div class="form-group  advancedcontactform__form-group">
          <label class="label  label--single-line  advancedcontactform__label" for="page-zones__main-widgets__advancedcontactform-singleline_0__textarea--message" title="singleline_0" name="page-zones__main-widgets__advancedcontactform-singleline_0"> Single line text</label>
          <input type="text" class="input  input--text  input--single-line  advancedcontactform__input  js-singleline-input singleline_0 js-input-singleline_0" name="page-zones__main-widgets__advancedcontactform__input--single-line" title="singleline_0">
        </div>
        <div class="form-group  advancedcontactform__form-group">
          <label class="label  label--message  advancedcontactform__label" for="page-zones__main-widgets__advancedcontactform-multiline_0__textarea--message">Multi line text</label>
          <textarea class="textarea  textarea--message  advancedcontactform__textarea  js-message-input multiline_0 js-input-multiline_0" name="page-zones__main-widgets__advancedcontactform-multiline_0__textarea--message" id="page-zones__main-widgets__advancedcontactform-multiline_0__textarea--message"></textarea>
        </div>
        <div class="form-group  advancedcontactform__form-group">
          <label class="label  label--radio  advancedcontactform__label" title="radiobutton_0" name="page-zones__main-widgets__advancedcontactform-radiobutton_0__label--radio"> Radio options</label>
          <ul class="option-list  option-list--radio  advancedcontactform__option-list">
            <li class="option-item option-item--radio">
              <input type="radio" class="input  input--radio advancedcontactform__input radiobutton_0_option_1 js-input-radio js-input-radiobutton_0_option_1" name="page-zones__main-widgets__advancedcontactform--radio" value="Yes" title="radiobutton_0_option_1">
              <label class="label  label--radio  advancedcontactform__label" title="radiobutton_0_option_1" name="page-zones__main-widgets__advancedcontactform-radiobutton_0_option_1__label--radio">Yes</label>
            </li>
            <li class="option-item option-item--radio">
              <input type="radio" class="input  input--radio advancedcontactform__input radiobutton_0_option_2 js-input-radio js-input-radiobutton_0_option_2" name="page-zones__main-widgets__advancedcontactform--radio" value="No" title="radiobutton_0_option_2">
              <label class="label  label--radio  advancedcontactform__label" title="radiobutton_0_option_2" name="page-zones__main-widgets__advancedcontactform-radiobutton_0_option_2__label--radio">No</label>
            </li>
          </ul>
        </div>
        <div class="form-group  advancedcontactform__form-group">
          <label class="label  label--checkbox  advancedcontactform__label" title="checkbox_0" name="page-zones__main-widgets__advancedcontactform-checkbox_0__label--checkbox"> Checkbox</label>
          <ul class="option-list  option-list--checkbox  advancedcontactform__option-list">
            <li class="option-item option-item--checkbox">
              <input type="checkbox" class="input  input--checkbox  advancedcontactform__input  js-input-checkbox checkbox_0_option_1 js-input-checkbox_0_option_1" name="page-zones__main-widgets__advancedcontactform__input--checkbox" value="A checkbox?" title="checkbox_0_option_1">
              <label class="label  label--checkbox  advancedcontactform__label" title="checkbox_0_option_1" name="page-zones__main-widgets__advancedcontactform-checkbox_0_option_1__label--checkbox">A checkbox?</label>
            </li>
          </ul>
        </div>
        <div class="form-group  advancedcontactform__form-group">
          <label class="label  label--select  advancedcontactform__label" title="dropdown_0" name="page-zones__main-widgets__advancedcontactform-dropdown_0__label--select"> Dropdown</label>
          <div class="select-wrap">
            <select class="select  advancedcontactform__select  js-input-select dropdown-menu-dropdown_0 js-input-dropdown_0">
              <option value="First option">First option</option>
              <option value="Second option">Second option</option>
              <option value="Third option">Third option</option>
            </select>
          </div>
        </div>
        <div class="form-group  advancedcontactform__form-group">
          <button class="button  button--submit js-button  advancedcontactform__button" type="submit">Send</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

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

