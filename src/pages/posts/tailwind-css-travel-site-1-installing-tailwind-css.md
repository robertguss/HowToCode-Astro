---
title: "Tailwind CSS Travel Site - 1. Installing Tailwind CSS"
date: "2020-03-19"
slug: "tailwind-css-travel-site-1-installing-tailwind-css"
description: "In this tutorial, we are going to learn how to install & setup Tailwind CSS for our project"
hero: "/images/hero/tailwind-css-travel-site.png"
tags: ["tailwind-css-travel-site"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this tutorial we are going to be building the home page for a fictitious travel site. Before we can begin, we first need to setup our project and install [Tailwind CSS](https://tailwindcss.com/).

I have created a [simple starter kit](https://github.com/robertguss/simple-starter-kit) to get us going quickly.

You can also clone it via git:

```bash
git clone https://github.com/robertguss/simple-starter-kit travel-site

cd travel-site

npm install
```

With all of our dependencies installed, we can now begin to setup our project with Tailwind. Per the [docs](https://tailwindcss.com/docs/installation/#1-install-tailwind-via-npm), we first need to install Tailwind.

```bash
npm install tailwindcss
```

Next we need to add Tailwind to our `src/css/main.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next we need to setup PostCSS with Tailwind. Add the following inside of `postcss.config.js`

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

To test that everything is setup and working correctly, I am going to copy and paste a card component from their [docs](https://tailwindcss.com/components/cards) into `src/partials/intro.html`.

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img
    class="w-full"
    src="https://source.unsplash.com/400x200/?nature"
    alt="Sunset in the mountains"
  />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#photography</span
    >
    <span
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#travel</span
    >
    <span
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
      >#winter</span
    >
  </div>
</div>
```

_**I have modified the img src, otherwise parcel won't compile correctly as it cannot find the image referenced in their docs.**_

Start up the dev server with:

```bash
npm run dev
```

In your terminal you should see something like:

```bash
Server running at http://localhost:1234
```

Open your browser to [`http://localhost:1234`](http://localhost:1234) or whatever url Parcel outputs to your terminal.

If you have done everything correctly you should see something like this:
![Tailwind CSS Card](/images/tailwind-travel-site/installation-tailwind-card.jpg)Tailwind CSS Card

_**The url referenced in the card comes from [Unsplash](https://unsplash.com/) and it will generate a new image every time, so yours will most likely be different.**_

That's it! We are now all setup with Tailwind CSS and ready to start building our travel site home page 👍

You can download a copy of the completed tutorial from the repo [here](https://github.com/robertguss/simple-starter-kit). Each section of the tutorial is within its own branch. The branch for this article is `1-installing-tailwind-css`

Or you can do it via git with:

```bash
git clone git@github.com:robertguss/howtocode.io-tailwind-css-landing-page.git

git checkout 1-installing-tailwind-css
```
