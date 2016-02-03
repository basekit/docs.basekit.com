---
layout: widget
title: YouTube
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/youtube/
- version: Version 1.0
  url: /widgets/v1/youtube/
---

# YouTube

Add a YouTube video to your template.

## Overview

You can add YouTube videos to your template. The videos can be later customised within the BaseKit Editor. 

To include a video in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('youtube', 'thisuniquewidgetname', {'videoId': 'j9Hjrs6WQ8M', 'userInput': '<iframe src="http://www.youtube.com/embed/j9Hjrs6WQ8M" frameborder="0" allowfullscreen></iframe>'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `videoId`: The video ID. i.e., in all of the examples below the ID is `j9Hjrs6WQ8M`

* `userInput`: The video URL or "embed" code, which you can copy in the Youtube page. You can use all of these different formats:

  * `http://www.youtube.com/watch?feature=player_embedded&v=j9Hjrs6WQ8M`

  * `http://www.youtube.com/watch?v=j9Hjrs6WQ8M`

  * `http://www.youtube.com/v/j9Hjrs6WQ8M&hl=en_GB&fs=1`

  * `http://youtu.be/j9Hjrs6WQ8M`

  * `http://www.youtube-nocookie.com/embed/j9Hjrs6WQ8M?rel=0`

  * `<iframe width="560" height="315" src="http://www.youtube.com/embed/j9Hjrs6WQ8M" frameborder="0" allowfullscreen></iframe>`
