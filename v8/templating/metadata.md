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
            "color__body--background": "#ffffff",
            "color__link--text": "#e7a022",
            "color__companyname--text": "#ffffff",

            "font__companyname--font-family" : "@font-swatch10-font-family",
            "font__companyname--font-size" : "18px",
            "font__companyname--font-weight" : "26px",
            "font__companyname--line-height" : "400",
            "font__companyname--letter-spacing" : "2px"
        },
        "typography": {
            "color__h1--text": "#1e1e1e",
            "font__h1--font-family" : "@font-swatch1-font-family",
            "font__h1--font-size" : "36px",
            "font__h1--font-weight" : "400",
            "font__h1--line-height" : "48px",
            "font__h1--letter-spacing" : "0px",

            "color__h2--text": "#1e1e1e",
            "font__h2--font-family" : "@font-swatch2-font-family",
            "font__h2--font-size" : "30px",
            "font__h2--font-weight" : "400",
            "font__h2--line-height" : "40px",
            "font__h2--letter-spacing" : "0px",

            "color__h3--text": "#1e1e1e",
            "font__h3--font-family" : "@font-swatch3-font-family",
            "font__h3--font-size" : "22px",
            "font__h3--font-weight" : "400",
            "font__h3--line-height" : "34px",
            "font__h3--letter-spacing" : "0px",

            "color__h4--text": "#1e1e1e",
            "font__h4--font-family" : "@font-swatch4-font-family",
            "font__h4--font-size" : "20px",
            "font__h4--font-weight" : "400",
            "font__h4--line-height" : "38px",
            "font__h4--letter-spacing" : "0px",

            "color__p--text": "#808080",
            "font__p--font-family" : "@font-swatch5-font-family",
            "font__p--font-size" : "17px",
            "font__p--font-weight" : "400",
            "font__p--line-height" : "36px",
            "font__p--letter-spacing" : "0px"
        },
        "button": {
            "color__button--background": "#1e1e1e",
            "color__button--background--hover": "darken(@color__button--background, 10%)",
            "color__button--text": "@color__link--text",

            "font__button--font-family" : "@font-swatch7-font-family",
            "font__button--font-size" : "14px",
            "font__button--font-weight" : "400",
            "font__button--line-height" : "24px",
            "font__button--letter-spacing" : "2px"
        },
        "navigation": {
            "color__navigation--text": "#737373",
            "color__navigation--text--hover": "darken(@color__navigation--text, 10%)",
            "color__navigation--text--selected": "@color-swatch3",
            "color__navigation--background": "@color__body--background",

            "font__navigation--font-family" : "@font-swatch6-font-family",
            "font__navigation--font-size" : "16px",
            "font__navigation--font-weight" : "400",
            "font__navigation--line-height" : "24px",
            "font__navigation--letter-spacing" : "0px"
        },
        "feature": {
            "color__feature-headline--text": "#ffffff",
            "color__feature-strapline--text": "darken(color__feature-strapline--text, 10%)",
            "color__feature-button--text": "#ffffff",
            "color__feature-button--background": "@color__link--text",
            "color__feature-button--background--hover": "lighten(color__link--text, 10%)",
            "color__feature-button--border": "transparent",
            "color__feature-content--background":"#000000",


            "font__feature-headline--font-family" : "@font-swatch8-font-family",
            "font__feature-headline--font-size" : "42px",
            "font__feature-headline--font-weight" : "600",
            "font__feature-headline--line-height" : "52px",
            "font__feature-headline--letter-spacing" : "0px",

            "font__feature-strapline--font-family" : "@font-swatch9-font-family",
            "font__feature-strapline--font-size" : "20px",
            "font__feature-strapline--font-weight" : "400",
            "font__feature-strapline--line-height" : "30px",
            "font__feature-strapline--letter-spacing" : "0px"
        },
        "forms": {
            "color__form--background": "darken(@color__body--background, 5%)",
            "color__form-legend--text": "@color__p--text",
            "color__form-legend--background": "transparent",
            "color__form-label--text": "@color__p--text"
        },
        "image": {
            "color__image-title--text": "@color__h3--text",
            "color__image-description--text": "@color__p--text"
        },
        "twitter": {
            "color__twitter-item--background": "darken(@color__body--background, 5%)",
            "color__twitter-account-name--text": "@color__h3--text",
            "color__twitter-tweet--text": "@color__p--text"
        },
        "socialicons": {
            "color__socialicons--icon": "@color-swatch1",
            "color__socialicons--icon--background": "@font-swatch6-color"
        },
        "blog": {
            "color__blogpostlist-title--text": "@color__link--text",
            "color__blogpost-title--text": "@color__link--text"
        },
        "ecommerce": {
            "color__ecomproductslist-label--text": "@color__form-label--text",
            "color__ecomproductslist-product-title--text": "color__h3--text",
            "color__ecomproductslist-filters--background": "darken(@color__body--background, 5%)",
            "color__ecomproduct--background": "darken(@color__body--background, 5%)",
            "color__ecomproduct-title--text": "@color__h1-text",
            "color__ecomproduct-price--text": "@color__h3-text",
            "color__ecombasket-button--background": "@color__link-text",
            "color__ecombasket-button--background--hover": "@color__button--background",
            "color__ecombasket-button--text": "@color__button--background--hover"
        }
    }
}

{% endhighlight %}
