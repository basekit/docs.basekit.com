---
layout: doc
title: Editing a Template for V8
---

# Editing a Template for V8

Editing a template for the V8 Editor is much the same as editing a template for V7. There are just some key differences that you'll need to watch out for when either editing a template or creating your own:

- **`metadata.json`:** In the V8 version of the metadata file there is a wider range of variables that you can use in your styles and the user can control in the editor. To see more see [Metadata in V8](/v8/templating/metadata/)
- **`stylesheet.less`:** The variables mentioned in the previous item are also found in the styles, it is important to make sure that these match up and are valid variables. To check, please see the documentation on [Using LESS in V8](/v8/templating/less/)
- **BK LESS Framework:** To help the styling of widgets and templates in V8 there is a new version of the BK Less Framework. To find out more, see below about the [BK LESS Framework](#bk-less-framework) or see [Using LESS in V8](/v8/templating/less/)

## BK LESS Framework

Prior, you would add one of the following to your `stylesheet.less` file:
{% highlight sass %}
{% raw %}
@import "@{templateCommon}/basekit-bootstrap.less"; // BK Bootstrap
// OR
@import "@{templateCommon}/bk-less-framework.less"; // LESS Framework v7
{% endraw %}
{% endhighlight %}
With the new version of the Editor, you can use the following to provide default styles for your widgets and template partials:
{% highlight sass %}
{% raw %}
@import "@{templateCommon}/bk-less-framework-v8.less"; // LESS Framework v8
{% endraw %}
{% endhighlight %}

## The online Editor

It's still very much possible to edit the code of a template from within the Editor itself. You should be presented with the online code editor once you click on the **Developer Tab** in the main menu.

{% include imagecenter.html image="/assets/content/v8/getting-started/editor.png" alt="online code editor" %}
