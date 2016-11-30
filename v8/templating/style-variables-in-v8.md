---
layout: doc
title: Style Variables in V8
---

# Style Variables in V8

Styles are optional. A template has a number of predefined variables that are set in the metadata. This gives the developer full control over which styles the user can edit.

Style attributes have to be wrapped in the “styles” object. This object replaces ‘colorSwatches’ and ‘fontSwatches’ object -- which are not required for V8 templates.

Variables can be (optionally) grouped into the following categories. This helps structure templates with a large amount of variables.

## Variable categories


|**Styles**|**Element**|
|-------------------|-------------------|
| **Colors** ||
| color__body--background |  `<body>`   |
| color__body--border |   `<body>`   |
| color__container--background |  `<div class="container">`|
| color__link--text | `<a>`  |
| color__companyname--text |   `<div class="companyname">`  |
||
| **Typography** | |
| color__h1--text |   `<h1>`  |
| color__h1--background|   `<h1>`  |
|font__h1--font-family| `<h1>`  |
|font__h1--font-size| `<h1>`  |
|font__h1--font-weight| `<h1>`  |
|font__h1--line-height| `<h1>`  |
|font__h1--letter-spacing| `<h1>`  |
|||
| color__h2--text |   `<h2>`  |
| color__h2--background |   `<h2>`  |
|font__h2--font-family| `<h2>`  |
|font__h2--font-size| `<h2>`  |
|font__h2--font-weight| `<h2>`  |
|font__h2--line-height| `<h2>`  |
|font__h2--letter-spacing| `<h2>`  |
||
| color__h3--text |   `<h3>`  |
| color__h3--background |   `<h3>`  |
|font__h3--font-family| `<h3>`  |
|font__h3--font-size| `<h3>`  |
|font__h3--font-weight| `<h3>`  |
|font__h3--line-height| `<h3>`  |
|font__h3--letter-spacing| `<h3>`  |
||
| color__h4--text |   `<h4>`  |
| color__h4--background |   `<h4>`  |
|font__h4--font-family|`<h4>`  |
|font__h4--font-size|`<h4>`  |
|font__h4--font-weight|`<h4>`  |
|font__h4--line-height|`<h4>`  |
|font__h4--letter-spacing|`<h4>`  |
||
| color__p--text |   `<p>`  |
| color__p--background |   `<p>`  |
|font__p--font-family|`<p>`  |
|font__p--font-size|`<p>`  |
|font__p--font-weight|`<p>`  |
|font__p--line-height|`<p>`  |
|font__p--letter-spacing|`<p>`  |
|||
| **Button** | |
| color__button--background |   `<a class="button">`  |
| color__button--background--hover |   `<a class="button">`  |
| color__button--text |   `<a class="button">`  |
| color__button--text--hover |   `<a class="button">`  |
| color__button--border |   `<a class="button">`  |
|||
| **Sidebar** | |
| color__sidebar--background |   `<div class="template-sidebar">`  |
| color__sidebar--border |   `<div class="template-sidebar">`  |
|||
| **Navigation** | |
| color__navigation--background |   `<div class="extendednavigation">`  |
| color__navigation--text |   `<div class="extendednavigation">`  |
| color__navigation--border |   `<div class="extendednavigation">`  |
| color__navigation--text--hover |   `<div class="extendednavigation">`  |
| color__navigation--text--selected |   `<div class="extendednavigation">`  |
| color__navigation-list--background |   `<div class="extendednavigation__navigation-list">`  |
|color__navigation-item--background|	`<div class="extendednavigation__navigation-item">`|
|color__navigation-item--background--hover|	`<div class="extendednavigation__navigation-item">`|
|color__navigation-item--background--selected|	`<div class="extendednavigation__navigation-item">`|
|color__navigation--icon|	`<button class="navigation-toggle">`|
|||
| **Feature** | |
| color__feature--background |   `<div class="feature">`  |
| color__feature-content--background |   `<div class="feature__content-wrap">`  |
| color__feature-headline--text |   `<div class="feature__headline">`  |
| color__feature-headline--background |   `<div class="feature__headline">`  |
| color__feature-strapline--text |   `<div class="feature__strapline">`  |
| color__feature-strapline--background |   `<div class="feature__strapline">`  |
| color__feature-button--text |   `<div class="feature__button">`  |
| color__feature-button--border |   `<div class="feature__button">`  |
| color__feature-button--background |   `<div class="feature__button">`  |
| color__feature-button--background--hover |   `<div class="feature__button">`  |
|||
| **Form** | |
| color__form--background |   `<form class="form">`  |
| color__form--border |   `<form class="form">`  |
| color__form-legend--text |   `<legend class="legend">`  |
| color__form-legend--background |   `<legend class="legend">`  |
| color__form-label--text |   `<label class="label">`  |
|||
| **Image** | |
| color__image--background |   `<div class="imagewidget">`  |
| color__image-caption--background |   `<figure class="imagewidget__caption">`  |
| color__image-title--text |   `<span class="imagewidget__image-title">`  |
| color__image-title--background |   `<span class="imagewidget__image-title">`  |
| color__image-description--text |   `<span class="imagewidget__image-description">`  |
| color__image-description--background |   `<span class="imagewidget__image-description">`  |
|||
| **Gallery** | |
| color__gallery--background |   `<div class="gallery">`  |
| color__gallery-caption--background |   `<figure class="gallery__caption">`  |
| color__gallery-title--text |   `<span class="gallery__image-title">`  |
| color__gallery-title--background |   `<span class="gallery__image-title">`  |
| color__gallery-description--text |   `<span class="gallery__image-description">`  |
| color__gallery-description--background |   `<span class="gallery__image-description">`  |
|||
| **Slideshow** | |
| color__slideshow--background |   `<div class="responsiveslideshow">`  |
| color__slideshow-caption--background |   `<figure class="responsiveslideshow__caption">`  |
| color__slideshow-title--text |   `<span class="responsiveslideshow__image-title">`  |
| color__slideshow-title--background |   `<span class="responsiveslideshow__image-title">`  |
| color__slideshow-description--text |   `<span class="responsiveslideshow__image-description">`  |
| color__slideshow-description--background |   `<span class="responsiveslideshow__image-description">`  |
| color__slideshow-pagination-item--background |   `<li class="responsiveslideshow__pagination-item">`  |
| color__slideshow-pagination-item--background--hover |   `<li class="responsiveslideshow__pagination-item">`  |
| color__slideshow-pagination-item--background--selected |   `<li class="responsiveslideshow__pagination-item  selected">`  |
| color__slideshow-pagination-item--text |   `<li class="responsiveslideshow__pagination-item">`  |
| color__slideshow-pagination-item--text--hover |  |
| color__slideshow-pagination-item--text--selected |  |
|||
| **Twitter** | |
|color__twitter--background|	`<div class="twitter">`|
|color__twitter-item--background|	`<li class="twitter__tweet-item">`|
|color__twitter-account-name--background|	`<span class="twitter__account-name">`|
|color__twitter-account-name--text|	`<span class="twitter__account-name">`|
|||
| **Social Icons** | |
|color__socialicons--icon	|`<a class="socialicons__social-link">`|
|color__socialicons--icon--hover	|`<a class="socialicons__social-link">`|
|color__socialicons--icon--background	|`<a class="socialicons__social-link">`|
|color__socialicons--icon--background--hover	|`<a class="socialicons__social-link">`|
|color__socialicons--text	|`<span class="socialicons__social-name">`|
|||
| **Blog** | |
|color__blogsearch--background	|`<div class="blogsearch">`|
|color__blogsearch-legend--background	|`<legend class="blogsearch__legend">`|
|color__blogsearch-label--text|	`<label class="blogsearch__label">`|
|color__blogpostlist--background	|`<div class="blogpostlist">`|
|color__blogpostlist-article--background	|`<article class="blogpostlist__post-article">`|
|color__blogpostlist-title--background	|`<h2 class="blogpostlist__post-title">`|
|color__blogpostlist-title--text	|`<h2 class="blogpostlist__post-title">`|
|color__blogpost--background	|`<div class="blogpost">`|
|color__blogpost-article--background	|`<article class="blogpost__post-article">`|
|color__blogpost-title--background|`	<h1 class="blogpost__post-title">`|
|color__blogpost-title--text	|`<h1 class="blogpost__post-title">`|
|||
| **Ecommerce** | |
|color__ecomproductslist--background	|`<div class="ecomproductslist">`|
|color__ecomproductslist-filters--background	|`<div class="ecomproductslist__product-filters">`|
|color__ecomproductslist-legend--background	|`<legend class="ecomproductslist__legend">`|
|color__ecomproductslist-legend--text	|`<legend class="ecomproductslist__legend">`|
|color__ecomproductslist-label--text	|`<label class="ecomproductslist__label">`|
|color__ecomproductslist-product-list--background	|`<ul class="ecomproductslist__product-list">`|
|color__ecomproductslist-product-item--background	|`<li class="ecomproductslist__product-item">`|
|color__ecomproductslist-product-title--background	|`<h3 class="ecomproductslist__product-title">`|
|color__ecomproduct--background	|`<div class="ecomproduct">`|
|color__ecomproduct-images--background	|`<div class="ecomproduct__product-images">`|
|color__ecomproduct-content--background	|`<div class="ecomproduct__product-content">`|
|color__ecomproduct-title--background	|`<h1 class="ecomproduct__product-title">`|
|color__ecomproduct-title--text	|`<h1 class="ecomproduct__product-title">`|
|color__ecomproduct-price--background	|`<h3 class="ecomproduct__product-price">`|
|color__ecomproduct-price--text	|`<h3 class="ecomproduct__product-price">`|
|color__ecombasket--background	|`<div class="ecombasket">`|
|color__ecombasket-list--background	|`<div class="ecombasket__basket-list">`|
|color__ecombasket-button--background	|`<button class="ecombasket__button">`|
|color__ecombasket-button--background--hover	|`<button class="ecombasket__button">`|
|color__ecombasket-button--text	|`<button class="ecombasket__button">`|
|color__ecombasket-button--border	|`<button class="ecombasket__button">`|




## LESS Application

Variables set in the metadata should be applied to its corresponding element in CSS.

{% highlight scss %}

body {
	background-color: @color__body--background;
}

{% endhighlight %}


## What's next?

To find out how these variables are applied in the metadata head to [Metadata in V8](/v8/templating/metadata/).
