---
layout: widget
title: Image
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/image/
- version: Version 1.0
  url: /widgets/v1/image/
---

# Image

The image widget is a simple method of adding an image to a page with optional title and description. Images that are added within the content widget, or any widget with an enabled text editor, will not follow the same image widget structure or have the same options.

## Examples

By default, the image widget must have a ```src``` option that is an image from the template. All other options are not essential.

### Basic usage

{% highlight django %}
{% raw %}

{{widget('image', 'footerimage', {
  'src': asset('/images/feature-bg.jpg')
})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

In this example the image widget is being used to place a logo into the header area:

{% highlight django %}
{% raw %}

{{widget('image', 'headerimage', {
  'src': asset('images/logo.png'),
  'title': 'The title text',
  'description': 'The description text',
  'alt': 'The alternate text',
  'fileName': 'Logo Image',
  'fileSize': 3,
  'imageSize': '132 x 31',
  'imageWidth': '132'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__headerimage" data-name="image" class="widget  widget--template-widget">
  <div class="bk-image imagewidget  widget__imagewidget">
    <figure class="figure  imagewidget__figure">
      <a  href="#" data-image-href="...images/logo.png" rel="lightbox"  title="The title text" class="image-link  imagewidget__image-link">
        <img class="image  imagewidget__image" src="...images/logo.png" alt="The alternate text" title="This is the image title" data-filename="Logo Image" data-filesize="3" data-imagesize="132 x 31" width="132" />
      </a>
      <figcaption class="caption  imagewidget__caption">
        <span class="image-title  imagewidget__image-title">The title text</span>
        <span class="image-description  imagewidget__image-description">The description text</span>
      </figcaption>
    </figure>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget Options

The image widget has a range of options, both for the content restraints but also for user information:

* ```src```: The path of the image, this is relative to the template. This means that you will need to include the image in your images or assets directory of your template.

* ```title```: The title of the image, this will be applied to the ```title``` attribute of the ```img``` and the title shown in the caption details below the image.

* ```description```: The description shown below the image in the caption details.

* ```alt```: The alternate text for when images fail to load in the browser, placed in the ```img``` ```alt``` attribute.

* ```fileName```: The name shown in the Editor UI.

* ```fileSize```: The file size shown in KB in the Editor UI.

* ```imageWidth```: The width of the image, set into the ```width``` attribute of the ```img```.

The ```src```, ```title```, ```description```, ```alt```, and ```imageWidth``` can all be changed be the user within the Editor. The other options will be relative to the image and will be replaced if the image is changed.
