---
layout: widget
title: Slideshow
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/slideshow/
- version: Version 1.0
  url: /widgets/v1/slideshow/
---

# Slideshow

Much in the same way the [gallery widget](/widgets/v2/gallery/) works, the slideshow widget allows the user to display a selection or group of images that have been uploaded to the Images section of the Editor. By default the slideshow comes with no images, the user must select them when they select the widget. If you are using the slideshow as part of your template you can state the images that are shown.

## Examples

### Basic usage

{% highlight django %}
{% raw %}

{{widget('responsiveslideshow', 'slideshow', {})|raw}}

{% endraw %}
{% endhighlight %}

The above example will display an area in the template where the user can select and then add images to, it will not show any images by default.

### Example usage

{% highlight django %}
{% raw %}

  {{widget('responsiveslideshow', 'slideshow', {
    'duration':'3',
    'transSpeed': '1000',
    'transType': 'fade',
    'showButtons': true,
    'showBullets': false,
    'allowPause': true,
    'allowLoop': true,
    'images':[
      {
        'imageHeight':'350',
        'imageWidth':'300',
        'url':'http://placehold.it/350x300',
        'title':'First slide title',
        'description': 'First slide description'
      },
      {
        'imageHeight':'350',
        'imageWidth':'400',
        'url':'http://placehold.it/350x400', 
        'title':'Second slide title',
        'description': 'Second slide description'
      },
      {
        'imageHeight':'350',
        'imageWidth':'500',
        'url':'http://placehold.it/350x500',
        'title':'Third slide title',
        'description': 'Third slide description'
      }
    ]
  })|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__responsiveslideshow-slideshow" class="widget  widget--template-widget" data-widget-type="responsiveslideshow">
  <div class="bk-responsiveslideshow  responsiveslideshow  widget__responsiveslideshow">
    <ul class="slides-list  responsiveslideshow__slides-list  contain">
      <li data-ref="0" class="slide-item  responsiveslideshow__slide-item  responsiveslideshow-image-item  js-responsiveslideshow-image-item  current">
        <figure class="figure  responsiveslideshow__figure  portrait">
          <img class="image  responsiveslideshow__image  js-responsiveslideshow-image" src="//placehold.it/350x300" alt="First slide title">
          <figcaption class="caption  responsiveslideshow__caption">
            <span class="image-title  responsiveslideshow__image-title">First slide title</span>
            <span class="image-description  responsiveslideshow__image-description">First slide description</span>
          </figcaption>
        </figure>
      </li>
      <li data-ref="1" class="slide-item  responsiveslideshow__slide-item  responsiveslideshow-image-item  js-responsiveslideshow-image-item">
        <figure class="figure  responsiveslideshow__figure  landscape">
          <img class="image  responsiveslideshow__image  js-responsiveslideshow-image" src="//placehold.it/350x400" alt="Second slide title">
          <figcaption class="caption  responsiveslideshow__caption">
            <span class="image-title  responsiveslideshow__image-title">Second slide title</span>
            <span class="image-description  responsiveslideshow__image-description">Second slide description</span>
          </figcaption>
        </figure>
      </li>
      <li data-ref="2" class="slide-item  responsiveslideshow__slide-item  responsiveslideshow-image-item  js-responsiveslideshow-image-item">
        <figure class="figure  responsiveslideshow__figure  landscape">
          <img class="image  responsiveslideshow__image  js-responsiveslideshow-image" src="//placehold.it/350x500" alt="Third slide title">
          <figcaption class="caption  responsiveslideshow__caption">
            <span class="image-title  responsiveslideshow__image-title">Third slide title</span>
            <span class="image-description  responsiveslideshow__image-description">Third slide description</span>
          </figcaption>
        </figure>
      </li>
    </ul>
    <nav class="slide-navigation  responsiveslideshow__slide-navigation">
      <button class="previous-button  button  icon  icon--previous  responsiveslideshow__previous-button js-btn-prev js-slide-ctrl" data-ref="2">
        <span class="control-text  responsiveslideshow__control-text">Previous</span>
      </button>
      <button class="pause-toggle  button  icon  icon--pause  responsiveslideshow__pause-toggle js-btn-play">
        <span class="control-text  responsiveslideshow__control-text">Pause</span>
      </button>
      <button class="next-button  button  icon  icon--next  responsiveslideshow__next-button js-btn-next js-slide-ctrl" data-ref="2">
        <span class="control-text  responsiveslideshow__control-text">Next</span>
      </button>
    </nav>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* ```duration```: The duration of time the slide is shown for in seconds.

* ```transSpeed```: The speed of the slide transition in milliseconds.

* ```transType```: The type of transition between slides. There are currently 3 possible options; ```dissolve```, ```fade```, and ```none```.

* ```showButtons```: Whether to show or hide the previous and next controls. ```true``` for show and ```false``` for hide.

* ```showBullets```: Whether to show or hide the numbered pagination controls. ```true``` for show and ```false``` for hide.

* ```allowPause```: Whether to show or hide the pause button. ```true``` for show and ```false``` for hide.

* ```allowLoop```: Whether the slideshow should loop through the images repeatively. ```true``` to loop them, ```false``` to stop at the end of the cycle.

* ```crop```: Whether the images should crop or fit the slideshow area. Setting to ```true``` will make the images fill the entire slideshow space, ```false``` will make them fit the available space but keep them entirely visible.

* ```images```: The default images for the slideshow, see [Setting images](#setting-images) for more details.

## Setting images

{% highlight django %}
{% raw %}
...
{
  'imageHeight':'350',
  'imageWidth':'300',
  'url':'http://placehold.it/350x300',
  'title':'First slide title',
  'description': 'First slide description'
}
...
{% endraw %}
{% endhighlight %}

To see the above example in context please refer to the [Example usage](#example-usage). The images will be shown as default in the template, but they won't be shown in the images panel of the Editor. If the user replaces the images they will no longer be accessible, you will need to state them in the metadata file in order for them to appear in the images panel. The ```url``` can be either an internal or external image path, all other image settings are optional.

