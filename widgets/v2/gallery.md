---
layout: widget
title: Gallery
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/gallery/
- version: Version 1.0
  url: /widgets/v1/gallery/
---

# Gallery widget

The gallery widget allows the user to display a selection or group of images that have been uploaded to the Images section of the Editor. By default the gallery comes with no images, the user must select them when they select the widget. If you are using the image gallery as part of your template you can state the images that are shown.

## Exmaples

### Basic usage

{% highlight python %}
{% raw %}

{{widget('gallery', 'imagegallery', {})|raw}}

{% endraw %}
{% endhighlight %}

The above example will display an area in the template where the user can select and then add images to, it will not show any images by default.

### Example usage

{% highlight python %}
{% raw %}

{{widget('gallery', 'imagegallery', {
  'showTitle': true,
  'showDescription': true,
  'images':[
    {
      'url':'http://placehold.it/350x300',
      'title':'First image title',
      'description': 'First image description'
    },
    {
      'url':'http://placehold.it/350x400',
      'title':'Second image title',
      'description': 'Second image description'
    },
    {
      'url':'http://placehold.it/650x300',
      'title':'Third image title',
      'description': 'Third image description'
    }
  ]
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__gallery-imagegallery" data-name="gallery" class="widget  widget--template-widget bk-gallery  widget__gallery">
  <div class="bk-gallery  gallery  widget__gallery">
    <ul class="gallery-list  gallery__gallery-list">
      <li class="gallery-item  gallery__gallery-item  square">
        <figure class="figure  gallery__figure" aria-haspopup="true">
          <a class="image-link  gallery__image-link" href="#" data-image-href="//placehold.it/2250x800" data-lightbox="set-" title="Test Title Goes Here" style="background-image:url('//placehold.it/350x300');">
            <img class="image  gallery__image" src="//placehold.it/350x300"/>
          </a>
          <figcaption class="caption  gallery__caption">
            <span class="image-title  gallery__image-title">First image title</span>
            <span class="image-description  gallery__image-description">First image description</span>
          </figcaption>
        </figure>
      </li>
      <li class="gallery-item  gallery__gallery-item  square">
        <figure class="figure  gallery__figure" aria-haspopup="true">
          <a class="image-link  gallery__image-link" href="#" data-image-href="//placehold.it/300x100" data-lightbox="set-" title="Test Title Goes Here" style="background-image:url('//placehold.it/350x400');">
            <img class="image  gallery__image" src="//placehold.it/350x400"/>
          </a>
          <figcaption class="caption  gallery__caption">
            <span class="image-title  gallery__image-title">Second image title</span>
            <span class="image-description  gallery__image-description">Second image description</span>
          </figcaption>
        </figure>
      </li>
      <li class="gallery-item  gallery__gallery-item  square">
        <figure class="figure  gallery__figure" aria-haspopup="true">
          <a class="image-link  gallery__image-link" href="#" data-image-href="//placehold.it/250x250" data-lightbox="set-" title="Test Title Goes Here" style="background-image:url('//placehold.it/650x300');">
            <img class="image  gallery__image" src="//placehold.it/650x300"/>
          </a>
          <figcaption class="caption  gallery__caption">
            <span class="image-title  gallery__image-title">Third image title</span>
            <span class="image-description  gallery__image-description">Third image description</span>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

The following options are available for the gallery widget:

* `showtitle`: Will show or hide the title, `true` for showing and `false` for hiding the image title. This can be overwritten by the user.

* `showDescription`: Will show or hide the description, `true` for showing and `false` for hiding the image description. This can be overwritten by the user.

* `images`: The default images for the gallery, see [Setting images](#setting-images) for more details.

## Setting images

{% highlight python %}
{% raw %}
...
{
  'imageWidth': '350',
  'imageHeight': '300',
  'url':'http://placehold.it/350x300',
  'title':'First image title',
  'description': 'First image description'
}
...
{% endraw %}
{% endhighlight %}

To see the above example in context please refer to the [Example usage](#example-usage). The images will be shown as default in the template, but they won't be shown in the images panel of the Editor. If the user replaces the images they will no longer be accessible, you will need to state them in the metadata file in order for them to appear in the images panel. The `url` can be either an internal or external image path, all other image settings are optional.

