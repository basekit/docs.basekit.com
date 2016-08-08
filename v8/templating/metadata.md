---
layout: doc
title: Metadata in V8
---

# Metadata in V8

All templates must contain a `metadata.json` file. This file provides key information about your template to the Editor environments on which it is installed.

## Properties of Metadata.json

* `name` (string) Name of the template. Use only the letters of the alphabet (upper or lower case), underscores (_), and dashes (-).

* `thumbnail` (string) Filename of the thumbnail that need to be included with the template repository. The file type should be JPG. Width: 285px. Height: 410px

* `pageTypes` (array) From Version >= 7.22. The page types that are available with your template. These are linked to the Twig files within the top level directory in your repository. i.e. home would expect home.twig. Currently supported page types are: ["home, about, contact, gallery"]

## The metadata.json Example File

{% highlight json %}

{
  "name": "example",
  "thumbnail": "example.png",
  "widgetVersion":2,
  "pageTypes": [
    "home", "about", "contact", "gallery"
  ]
}

{% endhighlight %}

## Advanced Metadata.json (Optional)

Adding more information to your metadata file means that you can take advantage of Editor features such as colour swatch swapping and font swatch editing. Adding custom colours and fonts gives the user more control of the appearance of their site.

* `widgetVersion` (integer): From Version >= 7.42. Default is `1`. The options are currently `1` and `2`. We recommend using widget version 2 as it has improved markup.

* `templateType` (string): From Version >= 7.30. Template type of the template. Default is `standard` if not included. This will determine which type of template is for filtering in the template picker. Can either be `standard`, `blog`, `ecommerce` or `menu`.

* `images` (array): From Version >= 7.32. If you want the images in your template to appear in the Images sidebar within the Editor, you can define them in metadata.json:

{% highlight json %}

{
  "images": [
    "images/gallery/1.jpg",
    "images/gallery/2.jpg",
    "images/gallery/3.jpg",
    "images/gallery/4.jpg",
    "images/gallery/5.jpg",
    "images/gallery/6.jpg"
  ]
}

{% endhighlight %}

* `colorSwatches` (multi level array): A colour swatch consists of 7 colours. If the swatch is selected, the colours can be referenced in LESS. i.e. @color-swatch1. There can only be 7 colours per swatch but there can be more than one swatch within a template.

{% highlight json %}

{
  "colorSwatches": {
    "Funky Named": {
      "color1": "#ffffff",
      "color2": "#72d0eb",
      "color3": "#83c028",
      "color4": "#2f353e",
      "color5": "#b4bec7",
      "color6": "#434f5b",
      "color7": "#ffffff"
    },
    "Mega Swatch": {
      "color1": "#ffffff",
      "color2": "#e0eef0",
      "color3": "#413e4a",
      "color4": "#b38184",
      "color5": "#9d8e8e",
      "color6": "#4b494f",
      "color7": "#ffffff"
    }
  }
}

{% endhighlight %}

#### Referenced in LESS

{% highlight scss %}

body {
  background-color: @color-swatch1;
  margin: 0;
  padding: 0;
}

{% endhighlight %}

* `fontSwatch` (multi level array): A font swatch is a collection of fonts and their respective values. We defined values for font swatches to link LESS styling to the Editor. There are currently 9 fonts defined in a swatch; font-swatch1 to font-swatch9. This matches up in the font settings panel in the Editor. The fonts are linked to certain tags in the Editor. For example, font-swatch1 is linked to the H1 tag in all templates. This is achieved through LESS, matching up swatch values to H1 properties. Note: `font-swatch1` does not explicitly have to be matched up to H1, it is designed this way through LESS declarations. If you do not use `font-swatch1` for H1 properties there will be a disconnect between the Editor and your design, we therefore suggest that you stick to our recommended standards.

  For a full list of available fonts within the Editor please refer to [Font Stacks](/data/font-stacks/).

{% highlight json %}

{
  "fontSwatch": {
    "title": "Arvo",
    "font1": {
      "font-family": "Arvo",
      "font-size": "36px",
      "font-weight": "inherit",
      "line-height": "36px",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font2": {
      "font-family": "Arvo",
      "font-size": "24px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font3": {
      "font-family": "Arvo",
      "font-size": "18px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font4": {
      "font-family": "Helvetica Neue, Arial",
      "font-size": "16px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font5": {
      "font-family": "Helvetica, arial",
      "font-size": "14px",
      "font-weight": "inherit",
      "line-height": "28px",
      "color": "@color-swatch5",
      "letter-spacing": "inherit"
    },
    "font6": {
      "font-family": "Arvo",
      "font-size": "15px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch6",
      "color-hover": "@color-swatch2",
      "letter-spacing": "inherit",
      "background-color": "@color-swatch2",
      "background-color-hover": "@color-swatch1"
    },
    "font7": {
      "font-family": "Helvetica, arial",
      "font-size": "14px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch1",
      "letter-spacing": "inherit",
      "background-color": "@color-swatch3",
      "background-color-hover": "darken(@color-swatch3,20%)"
    },
    "font8": {
      "font-family": "Arvo",
      "font-size": "50px",
      "font-weight": "inherit",
      "line-height": "50px",
      "color": "@color-swatch1",
      "letter-spacing": "inherit"
    },
    "font9": {
      "font-family": "Arvo",
      "font-size": "24px",
      "font-weight": "inherit",
      "line-height": "50px",
      "color": "@color-swatch1",
      "letter-spacing": "inherit"
    },
    "font9": {
      "font-family": "Arvo",
      "font-size": "36px",
      "font-weight": "inherit",
      "line-height": "50px",
      "color": "@color-swatch1",
      "letter-spacing": "inherit"
    }
  }
}

{% endhighlight %}

#### Referenced in LESS

{% highlight scss %}

h1 {
  font-family:    @font-swatch1-font-family;
  font-weight:    @font-swatch1-font-weight;
  color:          @font-swatch1-color;
  line-height:    @font-swatch1-line-height;
  letter-spacing: @font-swatch1-letter-spacing;
  font-size:      @font-swatch1-font-size;
}

{% endhighlight %}

### The Advanced metadata.json Example File

{% highlight json %}

{
  "name": "Example",
  "screenshot": "example-screenshot.jpg",
  "thumbnail": "example.png",
  "widgetVersion":2,
  "pageTypes": ["home, about, contact, gallery"],
  "colorSwatches": {
    "Funky Named": {
      "color1": "#ffffff",
      "color2": "#72d0eb",
      "color3": "#83c028",
      "color4": "#2f353e",
      "color5": "#b4bec7",
      "color6": "#434f5b",
      "color7": "#ffffff"
    },
    "Mega Swatch": {
      "color1": "#ffffff",
      "color2": "#e0eef0",
      "color3": "#413e4a",
      "color4": "#b38184",
      "color5": "#9d8e8e",
      "color6": "#4b494f",
      "color7": "#ffffff"
    }
  },
  "fontSwatch": {
    "title": "Arvo",
    "font1": {
      "font-family": "Arvo",
      "font-size": "36px",
      "font-weight": "inherit",
      "line-height": "36px",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font2": {
      "font-family": "Arvo",
      "font-size": "24px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font3": {
      "font-family": "Arvo",
      "font-size": "18px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font4": {
      "font-family": "Helvetica Neue, Arial",
      "font-size": "16px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch4",
      "letter-spacing": "inherit"
    },
    "font5": {
      "font-family": "Helvetica, arial",
      "font-size": "14px",
      "font-weight": "inherit",
      "line-height": "28px",
      "color": "@color-swatch5",
      "letter-spacing": "inherit"
    },
    "font6": {
      "font-family": "Arvo",
      "font-size": "15px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch6",
      "color-hover": "@color-swatch2",
      "letter-spacing": "inherit",
      "background-color": "@color-swatch2",
      "background-color-hover": "@color-swatch1"
    },
    "font7": {
      "font-family": "Helvetica, arial",
      "font-size": "14px",
      "font-weight": "inherit",
      "line-height": "inherit",
      "color": "@color-swatch1",
      "letter-spacing": "inherit",
      "background-color": "@color-swatch3",
      "background-color-hover": "darken(@color-swatch3,20%)"
    },
    "font8": {
      "font-family": "Arvo",
      "font-size": "50px",
      "font-weight": "inherit",
      "line-height": "50px",
      "color": "@color-swatch1",
      "letter-spacing": "inherit"
    },
    "font9": {
      "font-family": "Arvo",
      "font-size": "24px",
      "font-weight": "inherit",
      "line-height": "50px",
      "color": "@color-swatch1",
      "letter-spacing": "inherit"
    }
  }
}

{% endhighlight %}
