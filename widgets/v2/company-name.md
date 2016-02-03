---
layout: widget
title: Company Name
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/company-name/
- version: Version 1.0
  url: /widgets/v1/company-name/
---

# Company name

You can add a company name widget to your template which simply the company name wrapped inside a link to the homepage. The text displayed in the widget can be customised within the BaseKit Editor.

## Examples

### Example usage

{% highlight python %}
{% raw %}

{{widget('companyname', 'headercompanyname', {"business": "profile"})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div class="bk-companyname  companyname  widget__companyname">
  <a href="http://website.com/url" class="company-link  companyname__company-link">My Website</a>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
