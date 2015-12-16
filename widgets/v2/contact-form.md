---
layout: widget
title: Contact Form
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/contact-form/
- version: Version 1.0
  url: /widgets/v1/contact-form/
---

# Contact form

Add a contact form widget to your template.

You can add a contact form widget to your template to allow the visitor to send an email to the email address in the manage shared contact section or customised email address by the Editor user. The widget can be later customised within the Editor.

## Examples

### Basic usage

To include a contact form widget in your template you will need to add the following line:

{% highlight django %}
{% raw %}

  {{widget('contactform', 'contact', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight django %}
{% raw %}

  {{widget('contactform', 'contact', {
    'text': 'Submit',
    'formTitle': 'Contact Us',
    'email': 'profile'
  })|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__contact" data-name="contactform" class="widget  widget--template-widget">
  <div class="bk-contactform  contactform  widget__contactform">
    <form class="form  contactform__form">
      <fieldset class="fieldset  contactform__fieldset">
        <legend class="legend  contactform__legend">Contact Us</legend>
        <div class="form-body  contactform__form-body">
          <div class="form-group  contactform__form-group">
            <label class="label  label--email  contactform__label" for="page-zones__main-widgets__ContactFormWidget__input--email">Your Email</label>
            <input class="input  input--email  input--single-line  contactform__input js-email-input" id="page-zones__main-widgets__ContactFormWidget__input--email" name="page-zones__main-widgets__ContactFormWidget__input--email" placeholder="name@email.com" type="email" />
          </div>
          <div class="form-group  contactform__form-group">
            <label class="label  label--message  contactform__label" for="page-zones__main-widgets__ContactFormWidget__textarea--message">Message</label>
            <textarea class="textarea  textarea--message  contactform__textarea js-message-input" id="page-zones__main-widgets__ContactFormWidget__textarea--message" name="page-zones__main-widgets__ContactFormWidget__textarea--message"></textarea>
          </div>
          <div class="form-group  contactform__form-group">
            <input class="button  button--submit  contactform__input  " type="submit"  value="Send" />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* ```text```: The text on the button

* ```italic```: The text style on the button. ```true``` or ```false``` (default)

* ```bold```: The text style on the button. ```true``` or ```false``` (default)

* ```align```: The text style on the button. You can set it: 

  * ```justifyleft```
  * ```justifyright```
  * ```justifycenter``` (default)
  * ```justifyfull```

* ```fontSize```: The text style on the button. You can set it: 
  ```inherit``` (default), ```14```, ```16```, ```18```, ```20```, ```22```, ```24```

* ```formTitle```: The subject for the email

* ```email```: The email address that the final message will be sent to. Using ```profile``` (default), will mean that it will use the email set in the manage shared email address settings. Alternatively you can set a custom email address, e.g. ```example@example.com```

* ```goalSource```: The source of the URL to redirect to after the form is submitted.
  Using ```profile``` will mean it will use the internal URL, or you can set a URL of your choice

* ```goalUrl```: The URL after submit the form

  * If the ```goalSource``` is set to ```profile```, it should be set to an internal link, e.g. ```home```
  * If the ```goalSource``` is set to ```custom```, it should be set to an external link, e.g. ```www.mysite.com```

