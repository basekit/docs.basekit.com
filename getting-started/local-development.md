---
layout: doc
title: Local Development
---

# Local Development

The Template Development Kit enables you to view templates, including your own, locally without the need of logging into the online Editor. Meaning that you can make changes to your template and see the results instantly.

To setup the TDK follow the steps below:

1. ## Install a local web server application

   A local web server application will create a server locally for your TDK and website to work on. If you already have a stand-alone web server application installed, [head to step 4](#download-the-template-development-kit). We recommend using:

   * [MAMP for Mac OS X](http://www.mamp.info/en/downloads/)
   * [MAMP for Windows](http://www.mamp.info/en/mamp_windows.html)

2. ## Download the Template Development Kit

   You can download the TDK from the following sources:

   - {% include button.html link="http://basekit-tdk.s3.amazonaws.com/tdk-stable.zip" text="Download Current Stable Version" icon="cloud-download" %} (stable)
   - [Download Specific Version](https://github.com/basekit-templates/tdk/wiki)

   Unzip the file once downloaded. We recommend creating a new folder at the root of your machine, something like `Sites` next to your Documents folder.

3. ## Launching a local server

   Just before you launch the TDK using your local server, you'll need to add your downloaded template to the TDK. Locate the `templates/` folder inside the unzipped folder structure of the TDK. See the example below using our [June](https://github.com/basekit-templates/june) template:

   {% include imagecenter.html image="/assets/content/getting-started/template-directory.png" alt="template directory" %}

   _Note: If you haven't downloaded a template already please see [Downloading a Template in V8](/v8/getting-started/downloading/)._

   Now open your local web server application of choice. We will be using MAMP for this example:

   {% include imagecenter.html image="/assets/content/getting-started/mamp.png" alt="MAMP" %}

   Click on the **preferences** button:

   {% include imagecenter.html image="/assets/content/getting-started/mamp-preferences.png" alt="MAMP preference" %}

   The preferences window will open with numerous tabs. Click on the **Web Server or Apache** (depending on what version of MAMP you are using) tab:

   {% include imagecenter.html image="/assets/content/getting-started/mamp-server-options.png" alt="server options" %}

   Click the grey folder icon next to "Document Root", and then select the `public/` folder inside the TDK folder. Click **OK** to confirm your changes.

   You should be taken back to the main menu in the MAMP window. Click **Start Servers**. Once loaded, the symbol will turn green:

   {% include imagecenter.html image="/assets/content/getting-started/mamp-servers.png" alt="start servers" %}

   Once green, MAMP will automatically open up a web browser to give you information on your hostname and port number. Now visit your local web server in your web browser, which should be something like **localhost:8000**.
   <br/>_**Note:** You may have problems finding your localhost if your server isn’t green._

4. ## The Template Viewer

   Once you have found your localhost, a page similar to the one below will appear. (Again we have used the template [June](https://github.com/basekit-templates/june) as an example.)

   {% include imagecenter.html image="/assets/content/getting-started/tdk-templates.png" alt="TDK templates" %}

   Click on the template you wish to code, and get building.

   ![TDK](/assets/content/getting-started/tdk.png)

## What's next?

Now that you can see templates locally you'll next want to edit the template to your needs, [editing a template](/getting-started/editing/).
