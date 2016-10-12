---
layout: doc
title: Uploading a Template in V7
---

# Upload a Template to The Editor in V7

> **Note**: If you're using version 8 of the Editor please use the V8 documentation: [Upload a Template to The Editor in V8](/v8/getting-started/uploading/).

When your developer account has been set up. You will be able to upload templates via the Template section within your account. This can be done by uploading a ZIP or using a GIT repository.

## Getting to the custom templates section

From within the Editor, press the `Manage` button.

{% include imagecenter.html image="/assets/content/getting-started/editor-manage.png" alt="Manage button" %}

This will take you to the manage section picker. On this screen, click the `Templates` link to reveal the custom templates section.

{% include imagecenter.html image="/assets/content/getting-started/manage-templates-link.png" alt="Manage templates link" %}

## Upload your first template by ZIP file (from version 7.38)

In the Custom Template section click the `Upload ZIP` button.

{% include imagecenter.html image="/assets/content/getting-started/add-templates-3a.png" alt="Upload ZIP button" %}

You will be taken to the Zip upload panel. Select the Zip file from your local machine then press the `Upload` button.

{% include imagecenter.html image="/assets/content/getting-started/template-zip-upload.png" alt="Import template from ZIP" %}

## Upload your first template by Github (from version 7.32)

In the Custom Template section click the `Import from Github` button.

{% include imagecenter.html image="/assets/content/getting-started/add-templates-3b.png" alt="Import from GitHub button" %}

#### Enter your github.com URL

Custom templates can be pulled in from GitHub. To do this, you’ll need a GitHub account. If you haven’t got one yet, it’s free so go [grab one now](http://github.com/signup).

![Import from GitHub](/assets/content/getting-started/add-templates-4.png)

The correct format for entry is: `username/repositoryName`, for example: `basekit-templates/example`.

#### Private option

If the repository is private, click the `Private` option checkbox.

#### Pull the template into the Editor

When you enter a correctly formatted location for the repository. Click the `Get branches` button.

You have the option to pull a version of the template you want; `branches` or `tag`. When you select a branch, click the `Add` button.

{% include imagecenter.html image="/assets/content/getting-started/add-templates-5.png" alt="Select branch" %}

This will start the process of pulling the template down into your account. This will take 10 - 30 seconds.

![Processing template](/assets/content/getting-started/add-templates-6.png)

## Apply the template to the site

Once the template has been pull from GitHub. Click the options on the template and select view. This will take you to preview your site with your new template.

{% include imagecenter.html image="/assets/content/getting-started/add-templates-7.png" alt="Template options" %}

If you can happy with the template, click the `Use template` button. This will redirect you back to the editor with the template applied to your site.

{% include imagecenter.html image="/assets/content/getting-started/add-templates-8.png" alt="Use template" %}

#### Update the template

If you make changes to your code, push them them to GitHub and make your way back to the Template pick and click the `Custom Templates` button. To manage your custom templates, click the `Manage custom templates` button. Here you can add, delete and update your installed templates.

To re-pull code down from the template's git repository, click the template `Options` cog and press the `Update` button.

{% include imagecenter.html image="/assets/content/getting-started/add-templates-7.png" alt="Template options" %}

You have the option to pull a version of the template you want; `branches` or `tag`. When you select a branch, click the `Add` button.

This will start the process of pulling the template down into your account. This will take 10 - 30 seconds.

---

#### Does pulling these changes affect my live site?

It will update the template used in the editor but to see the changes live, you will need to publish your site again.
