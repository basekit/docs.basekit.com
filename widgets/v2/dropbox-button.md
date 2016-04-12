---
layout: widget
title: Dropbox Button
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/dropbox-button/
- version: Version 1.0
  url: /widgets/v1/dropbox-button/
---

# Dropbox button

The Dropbox download button is a widget that allows the user to offer a file from their Dropbox account as a downloadable file. This can be dragged onto the page via the Editor and added into the template using the code documented below.

## Examples

### Basic usage

To include a Dropbox widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('dropbox', 'downloadbutton', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('dropbox', 'downloadbutton', {
  'align': 'widget-align-left',
  'showFileName': true
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__dropboxWidget" data-name="dropbox" class="widget  widget--zone-widget">
  <div class="bk-dropbox  dropbox  widget__dropbox">
    <button class="button  icon  icon--dropbox  dropbox__button  js-link-btn" data-link="">Download</button>
    <span class="label  dropbox__label">test.file</span>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the dropbox button widget:

* `showFileName`: Show the file name next to the download button Show the file name. `true` to show the file name, or `false` to hide it. It is hidden by default.

* `align`: Sets the download button alignment using classes on the surround `div` element. The following options are available:

  * `widget-align-left`: To align the download button to the left.
  * `widget-align-center`: To align the download button to centre.
  * `widget-align-right`: To align the download button to the right.
