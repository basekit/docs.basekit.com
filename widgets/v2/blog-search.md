---
layout: widget
title: Blog Search
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/blog-search/
- version: Version 1.0
  url: /widgets/v1/blog-search/
---

# Blog search

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT**: This widget will only work with the Blog plugin is enabled on the user's account. This search the blog posts associated to the users site.

## Examples

### Example usage

{% highlight django %}
{% raw %}

  {{widget('blogsearch', 'blogsearch', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__blogsearch" data-name="blogsearch" class="widget  widget--zone-widget">
  <div class="bk-blogsearch  blogsearch  widget__blogsearch">
    <form class="form  blogsearch__form  js-blogsearch-form">
      <fieldset class="fieldset  blogsearch__fieldset">
        <legend class="legend  blogsearch__legend">Search Blog</legend>
        <div class="form-body  blogsearch__form-body">
          <div class="form-group  blogsearch__form-group">
            <label class="label  label--search  blogsearch__label" for="page-zones__main-widgets__blogsearchWidget__blogsearch__search">Search posts</label>
            <input class="input  input--search  input--single-line  blogsearch__input  js-blogsearch-input" id="page-zones__main-widgets__blogsearchWidget__blogsearch__search" name="page-zones__main-widgets__blogsearchWidget__blogsearch__search" placeholder="Search term" type="search" />
          </div>
          <div class="form-group  blogsearch__form-group">
            <input class="button  button--submit  blogsearch__input" type="submit" value="Search" />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently, this widget does not have any options.
