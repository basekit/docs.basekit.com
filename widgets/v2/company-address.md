---
layout: widget
title: Company Address
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/company-address/
- version: Version 1.0
  url: /widgets/v1/company-address/
---

# Company Address

Add a company address widget to your template.

You can add a company address widget to your template which contains the company address in the 'manage shared contact' section. The widget can be later customised within the Editor.

## Examples

To include a company address widget in your template you will need to add the following line:

### Basic usage

{% highlight python %}
{% raw %}

{{widget('companyaddress', 'address', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__address" data-name="profile" class="widget  widget--template-widget">
  <div class="bk-profile  profile  widget__profile">
    <div class="company-business  company-business--profile-widget">
      <p class="business  company-business__business">Business Name</p>
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

This widget will use the data in your 'manage shared contact' section. So you don't need to set it.
