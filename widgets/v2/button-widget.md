---
layout: widget
title: Button Widget
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/button-widget/
- version: Version 1.0
  url: /widgets/v1/button-widget/
---

# Button Widget

The button widget is capable of showing a simple button on a web page, this can be added within the Editor and by adding it into the template.

## Examples

### Basic usage

{% highlight django %}
{% raw %}

{{widget('button', 'button', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight django %}
{% raw %}

{{widget('button', 'docsbutton', {
  'text': 'Documentation',
  'align': 'widget-align-center',
  'action': 'external',
  'url': 'http://docs.basekit.com',
  'target': '_blank'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__button-docsbutton" class="widget  widget--template-widget" data-widget-type="button">
  <div class="bk-button  buttonwidget  widget__buttonwidget js-btn  widget-align-center">
    <button class="button  icon  buttonwidget__button  ">Documentation</button>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

The button widget has a wide selection of options. All of which are optional but it is advised that you set the ```text``` option, if not the button will be shown with no text at all.

* ```text```: The text shown on the button.

* ```italic```: Sets the button to italicised using an ```italic``` class on the button element, ```true``` or ```false``` respectively.

* ```bold```: Sets the button to bold using a ```bold``` class on the button element, ```true``` or ```false``` respectively.

* ```fontSize```: Changes the button font size in pixel values, options are ```14```, ```16```, ```18```, ```20```, ```22```, ```24```

* ```align```: Sets the button alignment using classes on the surround ```div``` element. The following options are available:

  * ```widget-align-left```: To align the button to the left.
  * ```widget-align-center```: To align the button to centre.
  * ```widget-align-right```: To align the button to the right.


* ```action```: Changes the button action type. Options are:

  * ```none```: No action will be set.
  * ```internal```: Sets the action for internal pages, e.g. ```/blog```.
  * ```external```: Sets the action for internal pages, e.g. ```http://docs.basekit.com```.
  * ```email```:  Sets the action for emails.

* ```target```: Sets the ```target``` attribute of the button. ```_blank``` to open the page in a new window or tab, or ```_self``` to open in the same window or tab.

* ```url```: To be used in conjunction with ```action```. See following examples:

{% highlight django %}
{% raw %}
...
'action': 'internal',
'url': '/blog'
...
'action': 'external',
'url': 'http://docs.basekit.com'
...
'action': 'email',
'url': 'my@email.com'
...
{% endraw %}
{% endhighlight %}
