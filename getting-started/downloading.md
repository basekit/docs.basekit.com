---
layout: doc
title: Downloading a Template in V7
---

# Downloading a Template in V7

> **Note**: If you're using version 8 of the Editor please use the V8 documentation: [Downloading a Template in V8](/v8/getting-started/downloading/).

Once you've activated the Developer Mode within the Editor you can download the template you're currently using. Which means you can make small changes to the template, or use it as a basis for your own custom template.

Go to the developer tab in the Editor and you'll be presented with the online code editor.

{% include imagecenter.html image="/assets/content/getting-started/editor.jpg" alt="online code editor" %}

Click the cog icon at the top right of the screen. Then click "Download template ZIP" to download the currently selected template.

{% include imagecenter.html image="/assets/content/getting-started/download-template.png" alt="download template" %}

Once downloaded, unzip the template. You should be then presented with a folder containing a selection of files, some of which will be the following:

* `stylesheet.less`: this is where you'll add your styles using CSS or LESS for example
* `default.twig`: this is the default layout for all your pages. You can add more Twig files later
* `metadata.json`: this is where you will set all your [options for your template](/templating/metadata/)

{% include imagecenter.html image="/assets/content/getting-started/template-files.png" alt="template files" %}

## What's next?

Now that you have a template to edit with locally you'll need the Template Development Kit to develop your template and see the changes, see [Local Development](/getting-started/local-developement/) for more information.
