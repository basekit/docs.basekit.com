---
layout: widget
title: Map
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/map/
- version: Version 1.0
  url: /widgets/v1/map/
---

# Map widget

Add a map widget to your template.

You can add a map widget to your template. The map address can be changed later with the Editor.

## Examples

### Basic usage

To include a map widget in your template you will need to add the following line:

{% highlight django %}
{% raw %}

  {{widget('map', 'googlemaps', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight django %}
{% raw %}

  {{widget('map', 'googlemaps', {
    'height': '150',
    'zoom': '15',
    'address': 'profile'
  })|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__MapWidget" data-name="map" class="widget  widget--zone-widget">
  <div class="bk-map  map  widget__map">
    <div class="embed-wrap  map__embed-wrap  js-map">
      ...
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* ```height```: The height of the map in pixels. Possible values: from ```100``` to ```500```

* ```zoom```: The map zoom. Possible values: from ```1``` to ```20```

* ```address```: The address for setting up the map. If you set to ```profile```, it will use the profile data
