---
layout: widget
title: Blog Post List
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/blog-post-list/
- version: Version 1.0
  url: /widgets/v1/blog-post-list/
---

# Blog post list

This widget is only compatible with Editor **version 7.32 and above**.

> **IMPORTANT:** This widget will only work as expected when the menu plugin is activated on the user's account.

This widget will only work as expected in the `blogpost.twig` [page type](/templating/page-types/). Otherwise the engine will fallback to `default.twig`. This widget will add a list of widgets to the page. The widget will feed off [plugin data](/data/) to populate itself.

## Examples

### Example usage

{% highlight python %}
{% raw %}

{{widget('blogpostlist', 'allblogposts', {})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__main-widgets__blogpostlistWidget" data-name="blogpostlist" class="widget  widget--zone-widget">
  <div class="bk-blogpostlist  blogpostlist  widget__blogpostlist">
    <div class="post-items  blogpostlist__post-items">
      <article class="post-article  blogpostlist__post-article">
        <div class="post-image  blogpostlist__post-image">
          <a class="image-link  blogpostlist__image-link" href="/blog/cras-dictum%2C-urna-ut-luctus-vulputate">
          <img class="image  blogpostlist__image" src="//placehold.it/2250x800" alt="Cras dictum, urna ut luctus vulputate">
          </a>
        </div>
        <div class="post-content  blogpostlist__post-content">
          <header class="post-header  blogpostlist__post-header">
            <h2 class="post-title  blogpostlist__post-title">
              <a class="title-link  blogpostlist__title-link" href="/blog/cras-dictum%2C-urna-ut-luctus-vulputate">Cras dictum, urna ut luctus vulputate</a>
            </h2>
          </header>
          <div class="post-excerpt  blogpostlist__post-excerpt">
            <p>Cras ut hendrerit nunc. Etiam ut viverra lacus. Donec sagittis, nibh ut dapibus convallis, turpis leo scelerisque lectus, nec bibendum libero sem id urna.</p>
            <a class="read-more  blogpostlist__read-more" href="/blog/cras-dictum%2C-urna-ut-luctus-vulputate">Read more</a>
          </div>
        </div>
        <footer class="post-footer  blogpostlist__post-footer">
          <time class="timestamp  blogpostlist__timestamp" datetime="2014-10-22T00:00:00+00:00">22 October 2014</time>
        </footer>
      </article>
      <article class="post-article  blogpostlist__post-article">
        <div class="post-image  blogpostlist__post-image">
          <a class="image-link  blogpostlist__image-link" href="/blog/maecenas-quis-dapibus-massa.">
          <img class="image  blogpostlist__image" src="//placehold.it/300x100" alt="Maecenas quis dapibus massa.">
          </a>
        </div>
        <div class="post-content  blogpostlist__post-content">
          <header class="post-header  blogpostlist__post-header">
            <h2 class="post-title  blogpostlist__post-title">
              <a class="title-link  blogpostlist__title-link" href="/blog/maecenas-quis-dapibus-massa.">Maecenas quis dapibus massa.</a>
            </h2>
          </header>
          <div class="post-excerpt  blogpostlist__post-excerpt">
            <p>Donec nec scelerisque sem, nec commodo justo. Duis lectus est, malesuada eget purus gravida, lobortis consectetur sapien.</p>
            <a class="read-more  blogpostlist__read-more" href="/blog/maecenas-quis-dapibus-massa.">Read more</a>
          </div>
        </div>
        <footer class="post-footer  blogpostlist__post-footer">
          <time class="timestamp  blogpostlist__timestamp" datetime="2014-10-22T00:00:00+00:00">22 October 2014</time>
        </footer>
      </article>
    </div>
    <footer class="post-list-footer  blogpostlist__post-list-footer">
      <nav class="post-pagination  blogpostlist__post-pagination">
        <ul class="pagination-list  blogpostlist__pagination-list">
          <li class="pagination-item  blogpostlist__pagination-item">
            <a class="button  button--pagination  button--previous  icon  icon--previous  blogpostlist__button" href="/blog/page/2">
            <span class="control-text  blogpostlist__control-text">Older</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget Options

* `postDisplayType` (string): This will make the blog post list widget either display the summary or the whole post

  * `summary` (default)
  * `post`
