---
layout: widget
title: Social Icons
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/social-icons/
- version: Version 1.0
  url: /widgets/v1/social-icons/
---

# Social icons

Add a social icons widget to your template.

You can add a social icons widget to your template. This widget will display icon links for the user's social media profile URLs.

## Examples

### Basic usage

To include a social icons widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('socialicons', 'socialnetworks', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('socialicons', 'socialnetworks', {
  'googleplus': 'https://plus.google.com/101946323226233111530',
  'linkedin':'http://www.linkedin.com/company/mycompanyname',
  'facebook': 'https://www.facebook.com/mycompanyname',
  'twitter': 'https://twitter.com/mycompanyname',
  'youtube': 'https://www.youtube.com/user/mycompanyname',
  'rss': 'http://news.bbc.co.uk/1/hi/help/rss/default.stm',
  'pinterest': 'https://www.pinterest.com/mycompanyname',
  'instagram': 'https://www.instagram.com/mycompanyname'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__socialnetworks" data-name="socialicons" class="widget  widget--template-widget">
  <div class="bk-socialicons  socialicons  widget__socialicons">
    <ul class="social-list  socialicons__social-list">
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--twitter  socialicons__social-link" href="twitter.com" target="_blank">
          <span class="social-name  socialicons__social-name">Twitter</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--facebook  socialicons__social-link" href="facebook.com" target="_blank">
          <span class="social-name  socialicons__social-name">Facebook</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--rss  socialicons__social-link" href="rss.com " target="_blank">
          <span class="social-name  socialicons__social-name">RSS</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--linkedin  socialicons__social-link" href="linkedin.com " target="_blank">
          <span class="social-name  socialicons__social-name">Linkedin</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--googleplus  socialicons__social-link" href="googleplus.com " target="_blank">
          <span class="social-name  socialicons__social-name">Google+</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--youtube  socialicons__social-link" href="youtube.com " target="_blank">
          <span class="social-name  socialicons__social-name">YouTube</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--pinterest  socialicons__social-link" href="pinterest.com " target="_blank">
          <span class="social-name  socialicons__social-name">Pinterest</span>
        </a>
      </li>
      <li class="social-item  socialicons__social-item">
        <a class="social-link  icon  icon--instagram  socialicons__social-link" href="instagram.com " target="_blank">
          <span class="social-name  socialicons__social-name">Instagram</span>
        </a>
      </li>
    </ul>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget. You can use custom links or use the shared profile data:

* `googleplus`: The Google+ URL. i.e., `https://plus.google.com/101946323226233111530` or `profile`

* `linkedin`: The Linkedin URL. i.e., `http://www.linkedin.com/company/mycompanyname` or `profile`

* `facebook`: The Facebook URL. i.e., `https://www.facebook.com/mycompanyname` or `profile`

* `twitter`: The Twitter URL. i.e., `https://twitter.com/mycompanyname` or `profile`

* `youtube`: The Youtube URL. i.e., `https://www.youtube.com/user/mycompanyname` or `profile`

* `rss`: The RSS URL. i.e, `http://news.bbc.co.uk/1/hi/help/rss/default.stm` or `profile`

* `pinterest`: The Pinterest URL. i.e., `https://www.pinterest.com/mycompanyname` or `profile`

* `instagram`: The Instagram URL. i.e, `https://www.instagram.com/mycompanyname` or `profile`

* `align`: Sets the social icon alignment using classes on the surround `div` element. The following options are available:

  * `widget-align-left`: To align the icons to the left.
  * `widget-align-center`: To align the icons to centre.
  * `widget-align-right`: To align the icons to the right.
