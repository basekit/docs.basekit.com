---
layout: widget
title: Feature
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/feature/
- version: Version 1.0
  url: /widgets/v1/feature/
---

# Feature

The feature widget is template widget designed to a large image overlaid with a title, strapline and button. This is a common layout in web design and is normally presented at the top of a page. The widget has several options that can be set within the template, along with further options in the Editor.

## Examples

### Basic usage

{% highlight python %}
{% raw %}

{{widget('feature', 'feature', {})|raw}}

{% endraw %}
{% endhighlight %}

By default the feature widget will only show the title and strapline, which will be sample text supplied by the Editor.

### Example usage

{% highlight python %}
{% raw %}

{{widget('feature', 'homepagefeature', {
  'header': 'This is the header',
  'strapline': 'This is the strapline',
  'defaultBgImg': asset('images/feature-image.jpg'),
  'positionTopPercentage': '50',
  'showBtn': true,
  'buttonText': 'This is the button',
  'action': 'external',
  'url': 'http://docs.basekit.com',
  'target': '_blank'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__feature-homepagefeature" class="widget  widget--template-widget" data-widget-type="feature">
  <div class="bk-feature  feature  widget__feature">
    <div class="background-image  feature__background-image" style="background-image: url('.../images/feature-image.jpg'); background-position: center 50%">
      <div class="content-wrap  feature__content-wrap">
        <h2 class="headline  feature__headline">This is the header</h2>
        <h3 class="strapline  feature__strapline">This is the strapline</h3>
        <button class="button  icon  button--primary  feature__button  js-feature-btn">This is the button</button>
      </div>
    </div>
  </div>
  <img src=".../images/feature-image.jpg" style="display:none;" alt="feature image">
</div>

{% endraw %}
{% endhighlight %}

## Widget Options

The options available to the feature widget when developing a template can be divided into three sections. These are as follows.

### Text options

* `header`: The text shown for the heading.

* `strapline`: The text shown for the strapline.

### Image options

* `defaultBgImg`: The default image shown in the background of the feature widget. The image must be in the template, e.g. `asset('images/feature-image.png')`

* `positionTopPercentage`: The vertical position of the feature image stated in the previous option. Set using CSS  `background-position` as a percentage.

### Button options

* `buttonText`: The text shown for the button.

* `showBtn`: Whether to show the feature button or not, `true` to show or `false` to hide. If this is not set then it shall be hidden by default.

* `italic`: Sets the button to italicised using an `italic` class on the button element, `true` or `false` respectively.

* `bold`: Sets the button to bold using a `bold` class on the button element, `true` or `false` respectively.

* `fontSize`: Changes the button font size in pixel values, options are `14`, `16`, `18`, `20`, `22`, `24`

* `action`: Changes the button action type. Options are:

  * `none`: No action will be set.
  * `internal`: Sets the action for internal pages, e.g. `/blog`.
  * `external`: Sets the action for internal pages, e.g. `http://docs.basekit.com`.
  * `email`:  Sets the action for emails.

* `target`: Sets the `target` attribute of the button. `_blank` to open the page in a new window or tab, or `_self` to open in the same window or tab.

* `url`: To be used in conjunction with `action`. See following examples:

{% highlight python %}
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
