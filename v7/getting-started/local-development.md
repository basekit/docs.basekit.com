---
layout: doc
title: Local Development (V7)
redirect_from:
  - /getting-started/local-development/
---

# Local Development

BaseKit's Template Development Kit enables you to use your own code editor and tools of choice. Follow these instructions to start developing templates locally.

1. ## Sign up for a BaseKit account
  * If you have come to us through the editor, you will already be signed up and logged in via your hosting/telecoms package. [Head straight to Step 2](#download-a-code-editor).
  * If you already have an account but are not logged in, do so now.
  * Don't have an account? Head to our [developer partner page](http://www.basekit.com/our-partners) to find a partner to sign up with.

2. ## Download a code editor
   In order to start developing a template, you'll need to download a code editor of your choice. <br/> We recommend using:
   * [Sublime Text 3](http://www.sublimetext.com/3), for Windows and Mac OS X
   * [Coda 2](http://panic.com/coda/) for Mac OS X
   * [Notepad++](http://notepad-plus-plus.org/) for Windows
   * [Atom Editor](https://atom.io/), for Windows and Mac OS X

   ### What is a code editor?
   A code, or text, editor is an application designed specifically for editing source code within development projects.

   ### Why use a code editor?
   Your files must contain plain text. Word processing programs like Microsoft Word, Apple Pages or Google Docs add unwanted hidden formatting. Your code generally won't work if it hasn't been written and saved in a plain text environment - a text editor.

   For more detailed information on code editors, and help choosing which ones to use, check out this article(http://blog.teamtreehouse.com/which-text-editor-should-i-use) from Treehouse.

3. ## Install a local web server application
   In order to run our Template Development Kit you'll need to download a local web server application. If you already have a stand-alone web server application installed, [head to step 4](#download-the-template-development-kit). <br/> We recommend using:
   * [Mamp for Mac OS X](http://www.mamp.info/en/downloads/)
   * [Mamp for Windows](http://www.mamp.info/en/mamp_windows.html)

   ### What is a local web server application?
   * It simulates an internet connection on your machine.

   ### Why use one?
   * You won't be breaking a live site
   * You can work on your site without worrying about having an internet connection.
   * It saves you time. Think of it like a live web server, only now you can work on your own machine without having to constantly upload and download files. A local server finds your content locally (from your hard drive), requiring no waiting for uploading and downloading.

4. ## Download the Template Development Kit
   [ Download the Template Development Kit](http://basekit-tdk.s3.amazonaws.com/tdk-stable.zip) and unzip it. We recommend creating a new folder at the root of your machine, something like 'Sites' next to your Documents folder.

   {% include button.html link="http://basekit-tdk.s3.amazonaws.com/tdk-stable.zip" text="Download Current Stable Version" icon="cloud-download" %} (stable)

   {% include button.html link="http://basekit-tdk.s3.amazonaws.com/tdk-develop.zip" text="Latest / Bleeding Edge Version" icon="cloud-download" %} (development)

   [Download Specific Version](https://github.com/basekit-templates/tdk/wiki)
