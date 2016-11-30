---
layout: doc
title: Metadata in V8
---

# Metadata in V8

Built upon the concept of the [Advanced Metadata.json](/templating/metadata#the-metadatajson-example-file) the v8 metadata extends on the v7 version allowing for an easier and more versatile way to control your styles.


## The metadata.json Example File


{% highlight json %}
{
    "styles": {
        "site": {
            "color__body--background": "@color-swatch1",
            "color__link--text": "@color-swatch2",
            "color__companyname--text": "@font-swatch10-color",

            "font__companyname--font-family" : "@font-swatch10-font-family",
            "font__companyname--font-size" : "@font-swatch10-font-size",
            "font__companyname--font-weight" : "@font-swatch10-font-weight",
            "font__companyname--line-height" : "@font-swatch10-line-height",
            "font__companyname--letter-spacing" : "@font-swatch10-letter-spacing"
        },
        "typography": {
            "color__h1--text": "@font-swatch1-color",
            "font__h1--font-family" : "@font-swatch1-font-family",
            "font__h1--font-size" : "@font-swatch1-font-size",
            "font__h1--font-weight" : "@font-swatch1-font-weight",
            "font__h1--line-height" : "@font-swatch1-line-height",
            "font__h1--letter-spacing" : "@font-swatch1-letter-spacing",

            "color__h2--text": "@font-swatch2-color",
            "font__h2--font-family" : "@font-swatch2-font-family",
            "font__h2--font-size" : "@font-swatch2-font-size",
            "font__h2--font-weight" : "@font-swatch2-font-weight",
            "font__h2--line-height" : "@font-swatch2-line-height",
            "font__h2--letter-spacing" : "@font-swatch2-letter-spacing",

            "color__h3--text": "@font-swatch3-color",
            "font__h3--font-family" : "@font-swatch3-font-family",
            "font__h3--font-size" : "@font-swatch3-font-size",
            "font__h3--font-weight" : "@font-swatch3-font-weight",
            "font__h3--line-height" : "@font-swatch3-line-height",
            "font__h3--letter-spacing" : "@font-swatch3-letter-spacing",

            "color__h4--text": "@font-swatch4-color",
            "font__h4--font-family" : "@font-swatch4-font-family",
            "font__h4--font-size" : "@font-swatch4-font-size",
            "font__h4--font-weight" : "@font-swatch4-font-weight",
            "font__h4--line-height" : "@font-swatch4-line-height",
            "font__h4--letter-spacing" : "@font-swatch4-letter-spacing",

            "color__p--text": "@font-swatch5-color",
            "font__p--font-family" : "@font-swatch5-font-family",
            "font__p--font-size" : "@font-swatch5-font-size",
            "font__p--font-weight" : "@font-swatch5-font-weight",
            "font__p--line-height" : "@font-swatch5-line-height",
            "font__p--letter-spacing" : "@font-swatch5-letter-spacing"
        },
        "button": {
            "color__button--background": "@color-swatch3",
            "color__button--background--hover": "@color-swatch2",
            "color__button--text": "@font-swatch7-color",

            "font__button--font-family" : "@font-swatch7-font-family",
            "font__button--font-size" : "@font-swatch7-font-size",
            "font__button--font-weight" : "@font-swatch7-font-weight",
            "font__button--line-height" : "@font-swatch7-line-height",
            "font__button--letter-spacing" : "@font-swatch7-letter-spacing"
        },
        "navigation": {
            "color__navigation--text": "@font-swatch6-color",
            "color__navigation--text--hover": "@font-swatch6-color-hover",
            "color__navigation--text--selected": "@color-swatch3",
            "color__navigation--background": "@color__body--background",

            "font__navigation--font-family" : "@font-swatch6-font-family",
            "font__navigation--font-size" : "@font-swatch6-font-size",
            "font__navigation--font-weight" : "@font-swatch6-font-weight",
            "font__navigation--line-height" : "@font-swatch6-line-height",
            "font__navigation--letter-spacing" : "@font-swatch6-letter-spacing"
        },
        "feature": {
            "color__feature-headline--text": "@font-swatch8-color",
            "color__feature-strapline--text": "@font-swatch9-color",
            "color__feature-button--text": "@font-swatch7-color",
            "color__feature-button--background": "@color-swatch2",
            "color__feature-button--background--hover": "darken(@color-swatch2, 10%)",
            "color__feature-button--border": "transparent",
            "color__feature-content--background":"#000000",


            "font__feature-headline--font-family" : "@font-swatch8-font-family",
            "font__feature-headline--font-size" : "@font-swatch8-font-size",
            "font__feature-headline--font-weight" : "@font-swatch8-font-weight",
            "font__feature-headline--line-height" : "@font-swatch8-line-height",
            "font__feature-headline--letter-spacing" : "@font-swatch8-letter-spacing",

            "font__feature-strapline--font-family" : "@font-swatch9-font-family",
            "font__feature-strapline--font-size" : "@font-swatch9-font-size",
            "font__feature-strapline--font-weight" : "@font-swatch9-font-weight",
            "font__feature-strapline--line-height" : "@font-swatch9-line-height",
            "font__feature-strapline--letter-spacing" : "@font-swatch9-letter-spacing"
        },
        "forms": {
            "color__form--background": "darken(@color__body--background, 3%)",
            "color__form-legend--text": "darken(@font-swatch5-color, 4%)",
            "color__form-legend--background": "darken(@color__body--background, 6%)",
            "color__form-label--text": "@font-swatch5-color"
        },
        "image": {
            "color__image-title--text": "@color-swatch4",
            "color__image-description--text": "@color-swatch5"
        },
        "twitter": {
            "color__twitter-item--background": "darken(@color__body--background, 2%)",
            "color__twitter-account-name--text": "@color-swatch2",
            "color__twitter-tweet--text": "@font-swatch5-color"
        },
        "socialicons": {
            "color__socialicons--icon": "@color-swatch1",
            "color__socialicons--icon--background": "@font-swatch6-color"
        },
        "blog": {
            "color__blogpostlist-title--text": "@color-swatch2",
            "color__blogpost-title--text": "@font-swatch1-color"
        },
        "ecommerce": {
            "color__ecomproductslist-label--text": "@color__form-label--text",
            "color__ecomproductslist-product-title--text": "@font-swatch3-color",
            "color__ecomproductslist-filters--background": "darken(@color__body--background, 3%)",
            "color__ecomproduct--background": "darken(@color__body--background, 3%)",
            "color__ecomproduct-title--text": "@font-swatch1-color",
            "color__ecomproduct-price--text": "@font-swatch3-color",
            "color__ecombasket-button--background": "@color-swatch3",
            "color__ecombasket-button--background--hover": "@color-swatch2",
            "color__ecombasket-button--text": "@font-swatch7-color"
        }
    }
}

{% endhighlight %}
