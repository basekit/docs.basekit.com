---
layout: widget
title: Blog Post
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/blog-post/
- version: Version 1.0
  url: /widgets/v1/blog-post/
---

# Blog post

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT**: This widget will only work as expected in the ```blogpost.twig``` page type. Otherwise the engine will fallback to ```default.twig```.

## Examples

### Example usage

{% highlight python %}
{% raw %}

{{widget('blogpost', 'singleblogpost', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__singleblogpost" data-name="blogpost" class="widget  widget--zone-widget">
  <div class="bk-blogpost  blogpost  widget__blogpost">
    <article class="post-article  post-article--has-image  blogpost__post-article">
      <div class="post-image  blogpost__post-image">
        <a class="image-link  blogpost__image-link" href="#" data-image-href="//placehold.it/2250x800" rel="lightbox" title="Cras dictum, urna ut luctus vulputate">
        <img class="image  blogpost__image" src="//placehold.it/2250x800" alt="Cras dictum, urna ut luctus vulputate">
        </a>
      </div>
      <div class="post-content  blogpost__post-content">
        <header class="post-header  blogpost__post-header">
          <h1 class="post-title  blogpost__post-title">Cras dictum, urna ut luctus vulputate</h1>
        </header>
        <div class="post-body  blogpost__post-body">
          <p>
            <strong>Cras dictum, urna ut luctus vulputate, massa nunc semper nisl, et tempor libero elit at massa.</strong> Cras ut hendrerit nunc. Etiam ut viverra lacus. Donec sagittis, nibh ut dapibus convallis, turpis leo scelerisque lectus, nec bibendum libero sem id urna. Phasellus cursus nec risus in gravida. Nullam tristique felis et neque ornare suscipit. Nulla congue auctor mauris sed consectetur. Nulla consectetur viverra tellus, aliquet pellentesque magna blandit ac. Ut feugiat, arcu ut tempus commodo, nisi tellus semper ante, in faucibus lacus nisl id elit. Pellentesque tristique nibh nec interdum pulvinar.
          </p>
        </div>
      </div>
      <footer class="post-footer  blogpost__post-footer">
        <time class="timestamp  blogpost__timestamp" datetime="2014-10-22T00:00:00+00:00">22 October 2014</time>
        <div class="post-attributes  blogpost__post-attributes">
          <div class="post-category  blogpost__post-category">
            <p class="category-title  blogpost__category-title">Category</p>
            <a class="category-link  product__category-link" href="/blog/categories/cars">cars</a>
          </div>
          <div class="post-tags  blogpost__post-tags">
            <p class="tags-title  blogpost__tags-title">Tags</p>
            <ul class="tag-list  blogpost__tag-list">
              <li class="tag-item  blogpost__tag-item">
                <a class="tag-link  blogpost__tag-link" href="/blog/tags/yellow">yellow</a>
              </li>
              <li class="tag-item  blogpost__tag-item">
                <a class="tag-link  blogpost__tag-link" href="/blog/tags/red">red</a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="sharing-links  blogpost__sharing-links">
          <li class="network-item  blogpost__network-item">
            <button class="button  icon  icon--twitter  blogpost__button  js-twitter-btn">Share on Twitter</button>
          </li>
          <li class="network-item  blogpost__network-item">
            <button class="button  icon  icon--facebook  blogpost__button  js-facebook-btn">Share on Facebook</button>
          </li>
          <li class="network-item  blogpost__network-item">
            <button class="button  icon  icon--googleplus  blogpost__button  js-googleplus-btn">Share on Google+</button>
          </li>
        </ul>
      </footer>
    </article>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

Currently this widget does not have any options.
