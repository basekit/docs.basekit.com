---
layout: widget
title: Company Name
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/company-name/
- version: Version 1.0
  url: /widgets/v1/company-name/
---

# Company Name

Add a company name widget to your template.

## Overview

You can add a company name widget to your template which simply the company name wrapped inside a link to the homepage. The text displayed in the widget can be customised within the BaseKit Editor.

To include a company name widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('companyname', 'headercompanyname', {"business": "profile"})|raw}}

{% endraw %}
{% endhighlight %}
