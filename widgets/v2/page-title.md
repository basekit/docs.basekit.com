---
layout: widget
title: Page Title
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/page-title/
---

# Page title

The page title widget simply allows the user to add the title of the page to the page in the form of a h1 heading. This will always match the title of the page.

## Examples

Adding the page title widget to your template means the user can optionally show the title of the page without the user having to drag it onto each new page that is created.

### Basic usage

{% highlight django %}
{% raw %}

  {{widget('pagetitle', 'title', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div class="bk-pagetitle  pagetitle  widget__pagetitle">
  <h1 class="pagetitle-text  pagetitle__pagetitle-text">Lorem Ipsum</h1>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
