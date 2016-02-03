---
layout: doc
title: Plugin Data
---

# Plugin Data

Version: >= 7.32. Plugin data is the backbone of the site's data. All plugin widgets feed off this data.

## Overview

The plugin data currently contains the following data:

* [Assets](#assets): Image and album data
* [Blog](#blog): All the post data for the blog
* [Ecommerce](#ecommerce): All the product data for the ecommerce
* [Menu](#menu): All the item and price data for a menu

## Assets

You can render these values from the assets plugin data:

### Example Data

{% highlight json %}

{
  "plugins": {
    "assets": {
       "images": {
      "3324003":{
        "ref":3324003,
        "url":"http://image.basekit.com/live275712_bob-van-aubel-ray-bans.jpg",
        "fileName":"bob-van-aubel-ray-bans.jpg",
        "fileType":"image",
        "fileSize":21705,
        "title":"",
        "updated":{
          "date":"2014-06-11 15:41:27",
          "timezone_type":3, 
          "timezone":"Europe/London" 
        },
        "description":"",
        "path":"live275712_bob-van-aubel-ray-bans.jpg",
        "imageWidth":256,
        "imageHeight":171,
        "deleted":false,
        "albumRef":2139,
        "albumTitle":"Standard",
        "providerRef":null
      }
    }
  }
}

{% endhighlight %}

### Usage

* `images` (object): This is an object of images. It contains images keyed by their reference. Each image reference is associated to an object that contains image data

### Example Usage


{% highlight python %}
{% raw %}

{% set resizerUrl = app.resizerUrl %}
{% set images = plugins.assets.images %}
{% if images|count > 0 %}
  <ul>
    {% for image in images %}
      <li><img {{image.url}}{% else %}{{ resizerUrl }}/{{image.path}}?w=960{% endif %}"/></li> 
    {% endfor %}
  </ul>
{% endif %}

{% endraw %}
{% endhighlight %}

* `albums` (object): This is an object of album keys with an associated array of asset refs that are contained in that album.

### Example Usage

{% highlight python %}
{% raw %}

{% set resizerUrl = app.resizerUrl %}
{% set assetsInAlbum = plugins.assets.albums['my-album-name'] %}
{% for assetRef in assetsInAlbum %}
  {% set image = plugins.assets.images[assetRef] %}
  <img {{image.url}}{% else %}{{ resizerUrl }}/{{image.path}}?w=960{% endif %}"/> 
{% endfor %}

{% endraw %}
{% endhighlight %}

## Blog

All blog functionality feeds off this data:

### Example Data


{% highlight json %}

{
  "plugins": {
    "blog": {
      "posts":[
        {
          "ref":19,
          "title":"Welcome to my blog",
          "slug":"welcome-to-my-blog",
          "summary":"We are pleased to announce our new blog. We hope that you enjoy it!",
          "content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu tristique est. Nulla sed orci vel mauris ultrices mattis eget in dolor. Nam elementum eros dolor, nec dignissim risus dictum non. Proin eu ultricies eros. Duis varius velit et orci pharetra, sit amet sollicitudin augue dapibus. Cras posuere scelerisque neque et venenatis. Praesent ullamcorper hendrerit arcu, sed consectetur orci ultricies a. Ut luctus pretium arcu, eu convallis risus ultricies ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut cursus sem vitae interdum molestie. Praesent dictum bibendum odio a sodales. Nullam quis lacus viverra, viverra nunc eu, cursus lorem. Praesent feugiat enim sit amet pellentesque aliquet. Aenean blandit volutpat leo a tristique. Maecenas ut varius magna.</p>",
          "publishedDate":{
            "date":"2014-06-11 15:42:46",
            "timezone_type":3,
            "timezone":"Europe/London"
          },
          "featureImageAssetRef":3324007,
          "tags":[
            "Ford",
            "Lotus"
          ],
          "category":"Cars"
        }
      ],
      "isPostPage":false,
      "searchUrl":"/blog/search/",
      "directory":"blog",
      "displayBlogHomePageLink":false,
      "postsPerPage":25,
      "totalPages":0,
      "currentPage":1,
      "pathFormat":"/blog/page/"
    }
  }
}

{% endhighlight %}

### Usage

* `posts` (object): This is an object of posts. This will contain multiple posts on all pages. The exception to this is the single posts page (viewing the post via the permalink). In this case, there will be only one post in the posts object

### Example Usage

{% highlight python %}
{% raw %}

{% if plugins.blog.posts|length %}
  <section class="blog-post-list">
    {% for post in plugins.blog.posts %}
      {% set postPermalink = "/" ~ plugins.blog.directory ~ "/" ~ post.slug|url_encode %}
      <article class="blog-post-item{% if post.featureImageAssetRef is not null %} has-image{% endif %}">
        
        {% if post.featureImageAssetRef is not null %}
          {% set assetRef = post.featureImageAssetRef %}
          {% set featureImg = plugins.assets.images[assetRef] %}
        <div class="blog-post-feature-image-wrap">
          <img class="blog-post-feature-image" src="{{ featureImg.url }}" alt="">
        </div>
        {% endif %}

        <h2 class="blog-post-title">
          <a href="{{ postPermalink }}">
            {{ post.title|raw }}
          </a>
        </h2>

        {% if post.summary|length > 0 %}
          {% if data.postDisplayType == "summary" %}
            <p class="blog-post-summary">{{ post.summary }}</p>
            <p class="blog-post-more-link">
              <a href="{{ postPermalink }}">{{ "widgets.blogpostlist.read_more"|translate("Read more") }}</a>
            </p>
          {% else %}
            <section class="blog-post-body">
              {{ post.content|raw }}
            </section>
          {% endif %}
        {% endif %}
        <a href="{{ postPermalink }}" class="blog-post-date">
          <time pubdate datetime="{{ post.publishedDate.date }}" class="blog-post-published-date">{{ post.publishedDate.date }}</time>
        </a>
      </article>
    {% endfor%}
  </section>
  
  <footer class="blog-list-footer">
    {% if plugins.blog.currentPage > 1 and plugins.blog.currentPage <= plugins.blog.totalPages %}
      <a href="{{ plugins.blog.pathFormat ~ (plugins.blog.currentPage - 1) }}" class="blog-post-pagination-pagepaginate-newer">{{ "shared_views.blog-list.newer"|translate("Newer") }}</a>
    {% endif %}

    {% if (plugins.blog.totalPages > 1 and plugins.blog.currentPage != plugins.blog.totalPages and plugins.blog.currentPage <= plugins.blog.totalPages) or (page.immutable == 0) %}
      <a href="{{ plugins.blog.pathFormat ~ (plugins.blog.currentPage + 1) }}" class="blog-post-pagination-page paginate-older">{{ "shared_views.blog-list.older"|translate("Older") }}</a>
    {% endif %}

  </footer>

{% else %}
  <p>There are no posts to display.</p>
{% endif %}

{% endraw %}
{% endhighlight %}

## Ecommerce

All ecommerce functionality feeds off this data:

### Example Data

{% highlight json %}
{% raw %}

{
  "store":{
    "ref":84,
    "email":"noreply@mysite.com",
    "currency":{
      "ref":3,
      "name":"Pound Sterling",
      "alphaCode":"GBP",
      "htmlCode":"&#163;"
    },
    "stripePublishableKey":"pk_test_8drfmWiZWGAwbyS9CKNJgP4S",
    "chargeUrl":"http://plugins.basekit-qa.co.uk/ecommerce/payment/start",
    "paymentCompletionUrl":"http://plugins.basekit-qa.co.uk/ecommerce/payment/complete",
    "calculateUrl":"http://plugins.basekit-qa.co.uk/ecommerce/calculate",
    "paypal":false,
    "taxProducts":false,
    "termsAndConditions":1,
    "categories":[
      {
        "ref":95,
        "name":"picture",
        "slug":"picture"
      }
    ],
    "tags":[
      {
        "ref":210,
        "title":"oil",
        "slug":"oil"
      },
      {
        "ref":211,
        "title":"canvas",
        "slug":"canvas"
      },
      {
        "ref":213,
        "title":"drawing",
        "slug":"drawing"
      }
    ]
  },
  "product":null,
  "products":[
    {
      "ref":263,
      "slug":"oil-on-canvas",
      "title":"Oil on canvas",
      "longDescription":"Original oil painting of a cake on high quality canvas - measuring 40 x 40 cm",
      "visibility":1,
      "assets":[
        {
          "ref":308,
          "assetRef":3845
        },
        {
          "ref":315,
          "assetRef":3846
        },
        {
          "ref":314,
          "assetRef":3847
        }
      ],
      "category":{
        "ref":95,
        "name":"picture",
        "slug":"picture"
      },
      "created":{
        "date":"2014-06-03 14:13:27",
        "timezone_type":3,
        "timezone":"Europe/London"
      },
      "updated":{
        "date":"2014-06-09 15:55:52",
        "timezone_type":3,
        "timezone":"Europe/London"
      },
      "featureImageAssetRef":3845,
      "stockUnlimited":0,
      "stockTrack":0,
      "stockWarningLevel":0,
      "formattedPrice":"£20.00",
      "multiplePrices":false,
      "variations":[
        {
          "ref":307,
          "productRef":263,
          "title":"Oil on canvas",
          "sku":"84-263-305",
          "price":"20.00",
          "stock":0,
          "weight":"0.000",
          "active":false,
          "options":[

          ],
          "formattedPrice":"£20.00"
        },
        {
          "ref":450,
          "productRef":263,
          "title":"Oil on canvas",
          "sku":"84-263-305",
          "price":"20.00",
          "stock":0,
          "weight":"0.000",
          "active":true,
          "options":[

          ],
          "formattedPrice":"£20.00"
        }
      ],
      "inactiveVariations":[
        {
          "ref":305,
          "productRef":263,
          "title":"Oil on canvas",
          "sku":"84-263-305",
          "price":"20.00",
          "stock":0,
          "weight":"0.000",
          "active":false,
          "options":[

          ],
          "formattedPrice":"£20.00"
        },
        {
          "ref":306,
          "productRef":263,
          "title":"Oil on canvas",
          "sku":"84-263-305",
          "price":"20.00",
          "stock":0,
          "weight":"0.000",
          "active":false,
          "options":[

          ],
          "formattedPrice":"£20.00"
        }
      ],
      "tags":[
        {
          "ref":210,
          "title":"oil",
          "slug":"oil"
        },
        {
          "ref":211,
          "title":"canvas",
          "slug":"canvas"
        }
      ],
      "options":[

      ]
    },
    {
      "ref":279,
      "slug":"picture-on-canvas",
      "title":"Picture on canvas",
      "longDescription":"This lovely picture is on fine quality canvas and measures 50 x 50 cm.",
      "visibility":1,
      "assets":[
        {
          "ref":307,
          "assetRef":3844
        }
      ],
      "category":{
        "ref":95,
        "name":"picture",
        "slug":"picture"
      },
      "created":{
        "date":"2014-06-06 15:39:10",
        "timezone_type":3,
        "timezone":"Europe/London"
      },
      "updated":{
        "date":"2014-06-09 15:55:53",
        "timezone_type":3,
        "timezone":"Europe/London"
      },
      "featureImageAssetRef":3844,
      "stockUnlimited":0,
      "stockTrack":0,
      "stockWarningLevel":0,
      "formattedPrice":"£20.00",
      "multiplePrices":true,
      "variations":[
        {
          "ref":445,
          "productRef":279,
          "title":"Picture on canvas (size: s)",
          "sku":"84-279-423",
          "price":"20.00",
          "stock":0,
          "weight":"0.000",
          "active":true,
          "options":[
            {
              "size":"s"
            }
          ],
          "formattedPrice":"£20.00"
        },
        {
          "ref":446,
          "productRef":279,
          "title":"Picture on canvas (size: m)",
          "sku":"84-279-437",
          "price":"30.00",
          "stock":0,
          "weight":"0.000",
          "active":true,
          "options":[
            {
              "size":"m"
            }
          ],
          "formattedPrice":"£30.00"
        }
      ],
      "inactiveVariations":[
        {
          "ref":423,
          "productRef":279,
          "title":"Picture on canvas (size: l)",
          "sku":"84-279-423",
          "price":"20.00",
          "stock":0,
          "weight":"0.000",
          "active":false,
          "options":[

          ],
          "formattedPrice":"£40.00"
        }
      ],
      "tags":[
        {
          "ref":211,
          "title":"canvas",
          "slug":"canvas"
        },
        {
          "ref":212,
          "title":"little",
          "slug":"little"
        },
        {
          "ref":213,
          "title":"drawing",
          "slug":"drawing"
        }
      ],
      "options":{
        "size":{
          "title":"size",
          "values":[
            {
              "title":"s"
            },
            {
              "title":"m"
            }
          ]
        }
      }
    }
  ],
  "countries":{
    "AF":"Afghanistan",
    "AX":"Åland Islands",
    "AL":"Albania",
    "DZ":"Algeria",
    "AS":"American Samoa",
    "AD":"Andorra",
    "AO":"Angola",
    "AI":"Anguilla",
    "AQ":"Antarctica",
    "AG":"Antigua and Barbuda",
    "AR":"Argentina",
    "AM":"Armenia",
    "AW":"Aruba",
    "AU":"Australia",
    "AT":"Austria",
    "AZ":"Azerbaijan",
    "BS":"Bahamas",
    "BH":"Bahrain",
    "BD":"Bangladesh",
    "BB":"Barbados",
    "BY":"Belarus",
    "BE":"Belgium",
    "BZ":"Belize",
    "BJ":"Benin",
    "BM":"Bermuda",
    "BT":"Bhutan",
    "BO":"Bolivia",
    "BA":"Bosnia and Herzegovina",
    "BW":"Botswana",
    "BV":"Bouvet Island",
    "BR":"Brazil",
    "IO":"British Indian Ocean Territory",
    "VG":"British Virgin Islands",
    "BN":"Brunei",
    "BG":"Bulgaria",
    "BF":"Burkina Faso",
    "BI":"Burundi",
    "KH":"Cambodia",
    "CM":"Cameroon",
    "CA":"Canada",
    "CV":"Cape Verde",
    "KY":"Cayman Islands",
    "CF":"Central African Republic",
    "TD":"Chad",
    "CL":"Chile",
    "CN":"China",
    "CX":"Christmas Island",
    "CC":"Cocos [Keeling] Islands",
    "CO":"Colombia",
    "KM":"Comoros",
    "CG":"Congo - Brazzaville",
    "CD":"Congo - Kinshasa",
    "CK":"Cook Islands",
    "CR":"Costa Rica",
    "CI":"Côte d’Ivoire",
    "HR":"Croatia",
    "CU":"Cuba",
    "CY":"Cyprus",
    "CZ":"Czech Republic",
    "DK":"Denmark",
    "DJ":"Djibouti",
    "DM":"Dominica",
    "DO":"Dominican Republic",
    "EC":"Ecuador",
    "EG":"Egypt",
    "SV":"El Salvador",
    "GQ":"Equatorial Guinea",
    "ER":"Eritrea",
    "EE":"Estonia",
    "ET":"Ethiopia",
    "QU":"European Union",
    "FK":"Falkland Islands",
    "FO":"Faroe Islands",
    "FJ":"Fiji",
    "FI":"Finland",
    "FR":"France",
    "GF":"French Guiana",
    "PF":"French Polynesia",
    "TF":"French Southern Territories",
    "GA":"Gabon",
    "GM":"Gambia",
    "GE":"Georgia",
    "DE":"Germany",
    "GH":"Ghana",
    "GI":"Gibraltar",
    "GR":"Greece",
    "GL":"Greenland",
    "GD":"Grenada",
    "GP":"Guadeloupe",
    "GU":"Guam",
    "GT":"Guatemala",
    "GG":"Guernsey",
    "GN":"Guinea",
    "GW":"Guinea-Bissau",
    "GY":"Guyana",
    "HT":"Haiti",
    "HM":"Heard Island and McDonald Islands",
    "HN":"Honduras",
    "HK":"Hong Kong SAR China",
    "HU":"Hungary",
    "IS":"Iceland",
    "IN":"India",
    "ID":"Indonesia",
    "IR":"Iran",
    "IQ":"Iraq",
    "IE":"Ireland",
    "IM":"Isle of Man",
    "IL":"Israel",
    "IT":"Italy",
    "JM":"Jamaica",
    "JP":"Japan",
    "JE":"Jersey",
    "JO":"Jordan",
    "KZ":"Kazakhstan",
    "KE":"Kenya",
    "KI":"Kiribati",
    "KW":"Kuwait",
    "KG":"Kyrgyzstan",
    "LA":"Laos",
    "LV":"Latvia",
    "LB":"Lebanon",
    "LS":"Lesotho",
    "LR":"Liberia",
    "LY":"Libya",
    "LI":"Liechtenstein",
    "LT":"Lithuania",
    "LU":"Luxembourg",
    "MO":"Macau SAR China",
    "MK":"Macedonia",
    "MG":"Madagascar",
    "MW":"Malawi",
    "MY":"Malaysia",
    "MV":"Maldives",
    "ML":"Mali",
    "MT":"Malta",
    "MH":"Marshall Islands",
    "MQ":"Martinique",
    "MR":"Mauritania",
    "MU":"Mauritius",
    "YT":"Mayotte",
    "MX":"Mexico",
    "FM":"Micronesia",
    "MD":"Moldova",
    "MC":"Monaco",
    "MN":"Mongolia",
    "ME":"Montenegro",
    "MS":"Montserrat",
    "MA":"Morocco",
    "MZ":"Mozambique",
    "MM":"Myanmar [Burma]",
    "NA":"Namibia",
    "NR":"Nauru",
    "NP":"Nepal",
    "NL":"Netherlands",
    "AN":"Netherlands Antilles",
    "NC":"New Caledonia",
    "NZ":"New Zealand",
    "NI":"Nicaragua",
    "NE":"Niger",
    "NG":"Nigeria",
    "NU":"Niue",
    "NF":"Norfolk Island",
    "KP":"North Korea",
    "MP":"Northern Mariana Islands",
    "NO":"Norway",
    "OM":"Oman",
    "QO":"Outlying Oceania",
    "PK":"Pakistan",
    "PW":"Palau",
    "PS":"Palestinian Territories",
    "PA":"Panama",
    "PG":"Papua New Guinea",
    "PY":"Paraguay",
    "PE":"Peru",
    "PH":"Philippines",
    "PN":"Pitcairn Islands",
    "PL":"Poland",
    "PT":"Portugal",
    "PR":"Puerto Rico",
    "QA":"Qatar",
    "RE":"Réunion",
    "RO":"Romania",
    "RU":"Russia",
    "RW":"Rwanda",
    "BL":"Saint Barthélemy",
    "SH":"Saint Helena",
    "KN":"Saint Kitts and Nevis",
    "LC":"Saint Lucia",
    "MF":"Saint Martin",
    "PM":"Saint Pierre and Miquelon",
    "VC":"Saint Vincent and the Grenadines",
    "WS":"Samoa",
    "SM":"San Marino",
    "ST":"São Tomé and Príncipe",
    "SA":"Saudi Arabia",
    "SN":"Senegal",
    "RS":"Serbia",
    "CS":"Serbia and Montenegro",
    "SC":"Seychelles",
    "SL":"Sierra Leone",
    "SG":"Singapore",
    "SK":"Slovakia",
    "SI":"Slovenia",
    "SB":"Solomon Islands",
    "SO":"Somalia",
    "ZA":"South Africa",
    "GS":"South Georgia and the South Sandwich Islands",
    "KR":"South Korea",
    "ES":"Spain",
    "LK":"Sri Lanka",
    "SD":"Sudan",
    "SR":"Suriname",
    "SJ":"Svalbard and Jan Mayen",
    "SZ":"Swaziland",
    "SE":"Sweden",
    "CH":"Switzerland",
    "SY":"Syria",
    "TW":"Taiwan",
    "TJ":"Tajikistan",
    "TZ":"Tanzania",
    "TH":"Thailand",
    "TL":"Timor-Leste",
    "TG":"Togo",
    "TK":"Tokelau",
    "TO":"Tonga",
    "TT":"Trinidad and Tobago",
    "TN":"Tunisia",
    "TR":"Turkey",
    "TM":"Turkmenistan",
    "TC":"Turks and Caicos Islands",
    "TV":"Tuvalu",
    "UM":"U.S. Minor Outlying Islands",
    "VI":"U.S. Virgin Islands",
    "UG":"Uganda",
    "UA":"Ukraine",
    "AE":"United Arab Emirates",
    "GB":"United Kingdom",
    "US":"United States",
    "UY":"Uruguay",
    "UZ":"Uzbekistan",
    "VU":"Vanuatu",
    "VA":"Vatican City",
    "VE":"Venezuela",
    "VN":"Vietnam",
    "WF":"Wallis and Futuna",
    "EH":"Western Sahara",
    "YE":"Yemen",
    "ZM":"Zambia",
    "ZW":"Zimbabwe"
  },
  "shippings":[
    {
      "ref":42,
      "name":"mail",
      "courier":"mail",
      "cost":"1.00",
      "countryCode":"GB",
      "created":{
        "date":"2014-06-09 11:14:21",
        "timezone_type":3,
        "timezone":"Europe/London"
      },
      "startWeight":null,
      "endWeight":null,
      "weightRestricted":0,
      "deleted":1
    },
    {
      "ref":43,
      "name":"mail",
      "courier":"mail",
      "cost":"1.00",
      "countryCode":"GB",
      "created":{
        "date":"2014-06-09 11:14:31",
        "timezone_type":3,
        "timezone":"Europe/London"
      },
      "startWeight":null,
      "endWeight":null,
      "weightRestricted":0,
      "deleted":0
    }
  ],
  "uaCountryCode":"US",
  "taxes":[

  ],
  "filteredProducts":{
    "products":[
      {
        "ref":263,
        "slug":"oil-on-canvas",
        "title":"Oil on canvas",
        "longDescription":"Original oil painting of a cake on high quality canvas - measuring 40 x 40 cm",
        "visibility":1,
        "assets":[
          {
            "ref":308,
            "assetRef":3845
          },
          {
            "ref":315,
            "assetRef":3846
          },
          {
            "ref":314,
            "assetRef":3847
          }
        ],
        "category":{
          "ref":95,
          "name":"picture",
          "slug":"picture"
        },
        "created":{
          "date":"2014-06-03 14:13:27",
          "timezone_type":3,
          "timezone":"Europe/London"
        },
        "updated":{
          "date":"2014-06-09 15:55:52",
          "timezone_type":3,
          "timezone":"Europe/London"
        },
        "featureImageAssetRef":3845,
        "stockUnlimited":0,
        "stockTrack":0,
        "stockWarningLevel":0,
        "formattedPrice":"£20.00",
        "multiplePrices":false,
        "variations":[
          {
            "ref":307,
            "productRef":263,
            "title":"Oil on canvas",
            "sku":"84-263-305",
            "price":"20.00",
            "stock":0,
            "weight":"0.000",
            "active":false,
            "options":[

            ],
            "formattedPrice":"£20.00"
          },
          {
            "ref":450,
            "productRef":263,
            "title":"Oil on canvas",
            "sku":"84-263-305",
            "price":"20.00",
            "stock":0,
            "weight":"0.000",
            "active":true,
            "options":[

            ],
            "formattedPrice":"£20.00"
          }
        ],
        "inactiveVariations":[
          {
            "ref":305,
            "productRef":263,
            "title":"Oil on canvas",
            "sku":"84-263-305",
            "price":"20.00",
            "stock":0,
            "weight":"0.000",
            "active":false,
            "options":[

            ],
            "formattedPrice":"£20.00"
          },
          {
            "ref":306,
            "productRef":263,
            "title":"Oil on canvas",
            "sku":"84-263-305",
            "price":"20.00",
            "stock":0,
            "weight":"0.000",
            "active":false,
            "options":[

            ],
            "formattedPrice":"£20.00"
          }
        ],
        "tags":[
          {
            "ref":210,
            "title":"oil",
            "slug":"oil"
          },
          {
            "ref":211,
            "title":"canvas",
            "slug":"canvas"
          }
        ],
        "options":[

        ]
      },
      {
        "ref":279,
        "slug":"picture-on-canvas",
        "title":"Picture on canvas",
        "longDescription":"This lovely picture is on fine quality canvas and measures 50 x 50 cm.",
        "visibility":1,
        "assets":[
          {
            "ref":307,
            "assetRef":3844
          }
        ],
        "category":{
          "ref":95,
          "name":"picture",
          "slug":"picture"
        },
        "created":{
          "date":"2014-06-06 15:39:10",
          "timezone_type":3,
          "timezone":"Europe/London"
        },
        "updated":{
          "date":"2014-06-09 15:55:53",
          "timezone_type":3,
          "timezone":"Europe/London"
        },
        "featureImageAssetRef":3844,
        "stockUnlimited":0,
        "stockTrack":0,
        "stockWarningLevel":0,
        "formattedPrice":"£20.00",
        "multiplePrices":true,
        "variations":[
          {
            "ref":445,
            "productRef":279,
            "title":"Picture on canvas (size: s)",
            "sku":"84-279-423",
            "price":"20.00",
            "stock":0,
            "weight":"0.000",
            "active":true,
            "options":[
              {
                "size":"s"
              }
            ],
            "formattedPrice":"£20.00"
          },
          {
            "ref":446,
            "productRef":279,
            "title":"Picture on canvas (size: m)",
            "sku":"84-279-437",
            "price":"30.00",
            "stock":0,
            "weight":"0.000",
            "active":true,
            "options":[
              {
                "size":"m"
              }
            ],
            "formattedPrice":"£30.00"
          }
        ],
        "inactiveVariations":[
          {
            "ref":423,
            "productRef":279,
            "title":"Picture on canvas (size: l)",
            "sku":"84-279-423",
            "price":"20.00",
            "stock":0,
            "weight":"0.000",
            "active":false,
            "options":[

            ],
            "formattedPrice":"£40.00"
          }
        ],
        "tags":[
          {
            "ref":211,
            "title":"canvas",
            "slug":"canvas"
          },
          {
            "ref":212,
            "title":"little",
            "slug":"little"
          },
          {
            "ref":213,
            "title":"drawing",
            "slug":"drawing"
          }
        ],
        "options":{
          "size":{
            "title":"size",
            "values":[
              {
                "title":"s"
              },
              {
                "title":"m"
              }
            ]
          }
        }
      }
    ],
    "totalCount":"2"
  },
  "currentPage":1,
  "pageOffset":0,
  "totalPages":1
}

{% endraw %}
{% endhighlight %}

### Usage

* `products` (object): This is an object of all products

### Example Usage

{% highlight python %}
{% raw %}

{% set products = plugins.ecommerce.products %}
{% if products|length %}
  <ul>
    {% for product in products %}
      <li>{{product.title}}</li>
    {% endfor %}
  </ul>
{% endif %}

{% endraw %}
{% endhighlight %}

* `filteredProducts` (object): This is an object of filtered products depending on the number set in the ecommerce plugin setup manage section. This data is also paginated based on currentPage and pageOffset.

### Example Usage

{% highlight python %}
{% raw %}

{% set products = plugins.ecommerce.filteredProducts.products %}
{% if products|length %}
  <ul>
    {% for product in products %}
      <li>{{product.title}}</li>
    {% endfor %}
  </ul>
{% endif %}

{% endraw %}
{% endhighlight %}

### Menu

All menu functionality feeds off this data:

### Example Data

{% highlight json %}
{% raw %}

{
   "ref":157,
   "siteRef":32,
   "currency":{
      "ref":3,
      "name":"Pound Sterling",
      "alphaCode":"GBP",
      "htmlCode":"&#163;"
   },
   "menuPageRef":1,
   "created":"2014-06-17 10:45:41",
   "updated":"2014-06-17 10:45:41",
   "items":[
      {
         "ref":410,
         "parentRef":null,
         "title":"Section Name",
         "description":"This is the top level section that will appear in the menu sections widget.",
         "displayOrder":1,
         "availability":null,
         "note":"This is a section note - i.e. breakfast served from 9am - 12pm",
         "category":null,
         "menuType":"section",
         "active":1,
         "highlight":0,
         "created":"2014-06-17 10:46:39",
         "updated":null,
         "items":[
            {
               "ref":411,
               "parentRef":410,
               "title":"Subsection",
               "description":"Sections can have subsections",
               "displayOrder":2,
               "availability":null,
               "note":"This is a subsection note",
               "category":null,
               "menuType":"section",
               "active":1,
               "highlight":0,
               "created":"2014-06-17 10:48:04",
               "updated":"2014-06-17 10:48:12",
               "items":[
                  {
                     "ref":945,
                     "title":"Subsection info",
                     "description":"This is the subsection item description",
                     "assetRef":1516,
                     "highlight":0,
                     "menuType":"item",
                     "displayOrder":1,
                     "sectionRef":411,
                     "active":1,
                     "defaultImageUrl":"",
                     "dietaryInfo":{
                        "foodVegetarian":0,
                        "foodVegan":1,
                        "foodNutFree":0,
                        "foodGlutenFree":0,
                        "foodDairyFree":0,
                        "calories":null
                     },
                     "foodNutrition":"subsection item nutritional info",
                     "foodSpicy":"medium spicy",
                     "prices":{
                        "name":"Normal",
                        "price":"15.00"
                     }
                  }
               ]
            },
            {
               "ref":944,
               "title":"Menu item",
               "description":"This is the menu item. Yum!",
               "assetRef":1523,
               "highlight":1,
               "menuType":"item",
               "displayOrder":3,
               "sectionRef":410,
               "active":1,
               "defaultImageUrl":"",
               "dietaryInfo":{
                  "foodVegetarian":1,
                  "foodVegan":0,
                  "foodNutFree":0,
                  "foodGlutenFree":1,
                  "foodDairyFree":0,
                  "calories":null
               },
               "foodNutrition":"Nutrition info",
               "foodSpicy":"not spicy",
               "prices":{
                  "name":"Normal",
                  "price":"12.00"
               }
            }
         ]
      }
   ]
}

{% endraw %}
{% endhighlight %}

### Usage

* `items` (object): This is a nested structure of sections and subsections. Items reside under their associated section or subsection.

### Example Usage

{% highlight python %}
{% raw %}

{% if plugins.menu and plugins.menu.items and plugins.menu.items|length > 0 %}
  <ul>
    {% for topSection in plugins.menu.items %}
      {% if topSection.active == 1 %}
        <li><a href="#menu-section-{{topSection.ref}}">{{ topSection.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
{% endif %}

{% endraw %}
{% endhighlight %}
