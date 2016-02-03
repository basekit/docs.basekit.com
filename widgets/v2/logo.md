---
layout: widget
title: Logo
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/logo/
- version: Version 1.0
  url: /widgets/v1/logo/
---

# Logo

The logo widget is classed as a template widget, which means it is designed to only be used in templates and it's not possible drag the widget into the site via the Editor. The logo widget can be overwritten by the user but they also have the choice of reverting back to the logo that is set by the code in the template.

The logo can either be changed directly in the visual Editor or by navigating to Manage > Profile. Images can either be chosen from the Images panel or by uploading an image.

## Examples

### Basic usage

{% highlight python %}
{% raw %}

{{widget('logo', 'sitelogo', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

The logo widget only has one option of a default logo, which is set with `defaultlogo` as shown in the below example:

{% highlight python %}
{% raw %}

{{widget('logo', 'sitelogo', {
  "defaultlogo": asset('images/logo.png')
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__logo-defaultoptionslogo" class="widget  widget--template-widget" data-widget-type="logo">
  <div class="bk-logo  logo  widget__logo">
    <a href="/" class="logo-link  logo__logo-link">
      <img class="logo-image  logo__logo-image" alt="Business Name" title="Business Name" src="...images/logo.png">
    </a>
  </div>
</div>

{% endraw %}
{% endhighlight %}

Much in the same way the [image widget](/widgets/v2/image/) works, the image set in the logo widget must be in the the template.
