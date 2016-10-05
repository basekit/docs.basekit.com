---
layout: doc
title: Local Development
---

# Local Development

BaseKit's Template Development Kit enables you to view templates, including your own, locally without the need of logging into your Editor account. Meaning that you can use make changes to your template and see the results instantly.


1. ## Install a local web server application
   In order to run our Template Development Kit you'll need to download a local web server application. If you already have a stand-alone web server application installed, [head to step 4](#download-the-template-development-kit). <br/> We recommend using:
   * [Mamp for Mac OS X](http://www.mamp.info/en/downloads/)
   * [Mamp for Windows](http://www.mamp.info/en/mamp_windows.html)

   ### What is a local web server application?
   * It simulates an internet connection on your machine.

   ### Why use one?
   * You won't be breaking a live site
   * You can work on your site without worrying about having an internet connection.
   * It saves you time. Think of it like a live web server, only now you can work on your own machine without having to constantly upload and download files. A local server finds your content locally (from your hard drive), requiring no waiting for uploading and downloading.

2. ## Download the Template Development Kit
   [ Download the Template Development Kit](http://basekit-tdk.s3.amazonaws.com/tdk-stable.zip) and unzip it. We recommend creating a new folder at the root of your machine, something like 'Sites' next to your Documents folder.

   {% include button.html link="http://basekit-tdk.s3.amazonaws.com/tdk-stable.zip" text="Download Current Stable Version" icon="cloud-download" %} (stable)

   {% include button.html link="http://basekit-tdk.s3.amazonaws.com/tdk-develop.zip" text="Latest / Bleeding Edge Version" icon="cloud-download" %} (development)

   [Download Specific Version](https://github.com/basekit-templates/tdk/wiki)

3. ## Using a local server
   Now you will need the Local Template Viewer. The zip file you downloaded will need to be placed into the Template Viewer folder and then into the folder named 'templates'.

   See the example below using our [June](https://github.com/basekit-templates/june) template:

   {% include imagecenter.html image="/assets/content/getting-started/template-directory.png" alt="template directory" %}

   Now open your local web server application of choice. We will be using MAMP for this example:

   {% include imagecenter.html image="/assets/content/getting-started/mamp.png" alt="MAMP" %}

   Click on the preferences button:

   {% include imagecenter.html image="/assets/content/getting-started/mamp-preferences.png" alt="MAMP preference" %}

   The preferences window will open with numerous tabs. Click on the Web Server or Apache (depending on what version of MAMP you are using) tab:

   {% include imagecenter.html image="/assets/content/getting-started/mamp-server-options.png" alt="server options" %}

   Click the grey folder icon next to "Document Root", and then select the `public` folder inside the Template Viewer folder. Click OK to confirm your changes.

   You should be taken back to the main menu in the MAMP window. Click **Start Servers**. Once loaded, the symbol will turn green:

   {% include imagecenter.html image="/assets/content/getting-started/mamp-servers.png" alt="start servers" %}

   Once green, MAMP will automatically open up a web browser to give you information on your hostname and port number. Now search for **localhost** or **localhost:[insert port number here]** in your web browser.

   > **Note:** You may have problems finding your localhost if your server isn’t green.

4. ## The Template Viewer

   Once you have found your localhost, a page similar to the one below will appear. (Again we have used the template [June](https://github.com/basekit-templates/june) as an example.)

{% include imagecenter.html image="/assets/content/getting-started/tdk-templates.png" alt="TDK templates" %}

   Click on the template you wish to code, and get building.

   ![TDK](/assets/content/getting-started/tdk.png)

## What's next?

Check out the documentation on [editing a template](/getting-started/editing/).

Key points to make:

- What is the local Template Development Kit
- What do you need before you start using it
  - Sign up to a BaseKit partner, see [getting started][/getting-started/]
  - Have a template already downloaded [downloading][/getting-started/downloading/]
- Using a local server with MAMP
- Setting up the TDK
- The template viewer
- What's next? Editing a template
