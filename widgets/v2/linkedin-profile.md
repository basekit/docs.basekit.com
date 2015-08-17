---
layout: widget
title: LinkedIn Profile
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/linkedin-profile/
- version: Version 1.0
  url: /widgets/v1/linkedin-profile/
---

# LinkedIn Profile

Add a LinkedIn personal profile widget to your template.

You can add a LinkedIn personal profile widget to your template. This profile URL can be changed later in the Editor.

## Examples

### Basic usage

To include a LinkedIn profile widget in your template you will need to add the following line:

{% highlight django %}
{% raw %}

  {{widget('linkedinprofile', 'profilecard', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight django %}
{% raw %}

  {{widget('linkedinprofile', 'profilecard', {'linkedin': 'http://www.linkedin.com/in/johndoe'})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__profilecard" class="widget  widget--template-widget" data-widget-type="linkedinprofile">
  <div class="bk-linkedinprofile  linkedinprofile  widget__linkedinprofile">
    <div class="embed-wrap  embed-wrap--linkedin  linkedinprofile__embed-wrap">
      ...
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* ```linkedin```: The LinkedIn profile public URL. For example: ```http://www.linkedin.com/in/johndoe```
