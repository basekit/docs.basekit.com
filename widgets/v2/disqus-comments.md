---
layout: widget
title: Disqus Comments
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/disqus-comments/
- version: Version 1.0
  url: /widgets/v1/disqus-comments/
---

# Disqus comments

This widget is only compatible with Editor **version 7.32 and above**. Add a Disqus widget to your website. Disqus usage documentation can be found here: [http://disqus.com/websites/](http://disqus.com/websites/){:target="_blank"}

## Examples

This widget is managed by a third party. The Editor wraps the Disqus comments widget, and enables you to add it to your website.

### Example usage

{% highlight python %}
{% raw %}

{{widget('disqus', 'pagecomments', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__pagecomments" data-name="disqus" class="widget  widget--template-widget">
  <div class="bk-disqus  disqus  widget__disqus">
    <div class="embed-wrap  embed-wrap  disqus__embed-wrap">
      <div id="disqus_thread"></div>
      <script>
        ...
      </script>
      <noscript>
        <p>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></p>
      </noscript>
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently, this widget does not have any options.
