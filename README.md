[BaseKit Documentation](http://docs.basekit.com)
=========================

Official documentation for building websites on the BaseKit platform

Contents
--------
* [Setup](#setup)
  * [Local Installation](#local-installation)
  * [Install Dependencies](#install-dependencies)
* [Gulp Tasks](#gulp-tasks)
* [Writing](#writing)
* [License](#license)

Setup
-----

### Local Installation

Running the site on your local machine:

1. ```$ gem install github-pages``` - Install github pages ruby gem
2. ```$ git clone git@github.com:basekit/docs.basekit.com.git``` - clone project
3. ```$ cd docs.basekit.com``` - Switch to project directory
4. ```$ jekyll serve --watch``` - Serve site locally using Jekyll
5. go to [```http://localhost:4000```](http://localhost:4000)

### Install Dependencies

Installing all the assets and dependencies required for development:

1. ```$ brew install npm``` - Install node
2. ```$ npm install``` - Install package dependencies
3. ```$ bower install``` - Install project assets

Gulp Tasks
----------

These are tasks that can be ran with gulp, all of which take the installed bower components and place them into the relevant project directories:

* ```$ gulp``` - Processes all assets for the project
  
  * ```$ gulp styles``` - Copies all style files into ```_sass``` directory
  
    * ```$ gulp css``` - Converts CSS assets into SCSS and copies it into the ```_sass``` directory
    * ```$ gulp sass``` - Copies SCSS assets into the ```_sass``` directory
  
  * ```$ gulp icons``` - Prepares SVG and PNG icons
  
    * ```$ gulp svg``` - Compiles SVG icons into single ```icons.svg``` file
    * ```$ gulp png``` - Creates PNG counterparts of each SVG icon and places them into the ```assets/icons``` directory
    * ```$ gulp fonticons``` - Copies icons fonts into ```fonts``` directory


Writing
-------
The Documentation uses markdown to manage it's content. It also uses pygments for code samples and liquid shortcodes for small chunks of HTML. Take a look at the examples below:

### Code Sample
```
{% highlight html %}
{% raw %}
<div class="element">
  <span>This is some sample HTML</span>
</div>
{% endraw %}
{% endhighlight %}
```

### Button
```{% include button.html link="http://docs.basekit.com" text="This a button" %}```

### Centralised Text
```{% include aligncenter.html content="This text is centre aligned" %}```

### Centralised Button
```{% include buttoncenter.html link="http://docs.basekit.com" text="This button is centre aligned" %}```

### Call To Action
```> **IMPORTANT**: This is a breaking change.```

License
-------

This software is released under the [MIT License](http://www.opensource.org/licenses/MIT).
