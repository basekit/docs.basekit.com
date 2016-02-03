---
layout: widget
title: YouTube
searchable: true
versions:
- version: Version 2.0
  url: /widgets/v2/youtube/
- version: Version 1.0
  url: /widgets/v1/youtube/
---

# YouTube

Add a YouTube video to your template.

You can add YouTube videos to your template. The videos can be later customised within the Editor. 

## Examples

### Basic usage

To include a video in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('youtube', 'video', {})|raw}}

{% endraw %}
{% endhighlight %}

### Example usage

{% highlight python %}
{% raw %}

{{widget('youtube', 'video', {
  'videoId': '...',
  'userInput': '<iframe src="..." allowfullscreen></iframe>'
})|raw}}

{% endraw %}
{% endhighlight %}

#### Resulting HTML:

{% highlight html %}
{% raw %}

<div id="page-zones__template-widgets__video" data-name="youtube" class="widget  widget--template-widget">
  <div class="bk-youtube  youtube  widget__youtube">
    <div class="embed-wrap  embed-wrap--video  youtube__embed-wrap">
      <iframe class="iframe  iframe--video  youtube__iframe" width='100' height='215' src="https://www.youtube.com/embed/j9Hjrs6WQ8M?wmode=transparent"></iframe>
    </div>
  </div>
</div>

{% endraw %}
{% endhighlight %}

## Widget options

You can change the following options for the widget:

* `videoId`: The video ID. i.e., in all of the examples below the ID is `j9Hjrs6WQ8M`

* `userInput`: The video URL or "embed" code, which you can copy in the Youtube page. You can use all of these different formats:

  * `http://www.youtube.com/watch?feature=player_embedded&v=j9Hjrs6WQ8M`

  * `http://www.youtube.com/watch?v=j9Hjrs6WQ8M`

  * `http://www.youtube.com/v/j9Hjrs6WQ8M&hl=en_GB&fs=1`

  * `http://youtu.be/j9Hjrs6WQ8M`

  * `http://www.youtube-nocookie.com/embed/j9Hjrs6WQ8M?rel=0`

  * `<iframe width="560" height="315" src="http://www.youtube.com/embed/j9Hjrs6WQ8M" frameborder="0" allowfullscreen></iframe>`
