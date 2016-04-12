---
layout: widget
title: Facebook Like
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/facebook-like/
- version: Version 1.0
  url: /widgets/v1/facebook-like/
---

# Facebook Like

Add a Facebook Like widget to your template.

You can add a Facebook Like widget to your template. The widget can be later customised within the Editor.

## Examples

### Basic usage

To include a Facebook Like widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('facebooklike', 'likebutton', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('facebooklike', 'likebutton', {
  showFaces: 'true',
  action: 'like',
  colorscheme: 'light',
  layout: 'standard',
  height: '80',
  font: 'arial',
  locale: 'en_US',
  thisUrl: 'www.mysite.com'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__likebutton" data-name="facebooklike" class="widget  widget--template-widget">
  <div class="bk-facebooklike  facebooklike  widget__facebooklike">
    <iframe src="//www.facebook.com/plugins/like.php..." style="height:40px;"></iframe>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* `showFaces`: Display the Facebook profile pictures below the button. `true` or `false`

* `action`: The verb to display on the button. `like` or `recommend`

* `colorscheme`: The colour scheme. `light` or `dark`

* `layout`: Determines the size and amount of social context next to the button.
`standard`, `button_count` or `box_count`

* `height`: The height of the widget depending on the `layout` and `showFaces`

  * if the `layout` is `box_count`, set it to `90`
  * if the `showFace` is `true` and if the `layout` is not `box_count`, set it to `80`
  * if the `showFace` is `false`, set it to `30`

* `font`: The button text font. `arial`, `lucida grande`, `segoe ui`, `tahoma`, `trebuchet ms`, `verdana`

* `thisUrl`: The page visitors are going to like, e.g. `www.mysite.com`
