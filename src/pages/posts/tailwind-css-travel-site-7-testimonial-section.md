---
title: "Tailwind CSS Travel Site - 7. Testimonial Section"
date: "2020-03-25"
slug: "tailwind-css-travel-site-7-testimonial-section"
description: "In this tutorial, we are going to build the testimonial section for our travel site in Tailwind CSS"
hero: "/images/hero/tailwind-css-travel-site.png"
tags: ["tailwind-css-travel-site"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this lesson, we are going to be building the testimonial section of our travel site.

The final result will look like:

![](/images/tailwind-travel-site/3-testimonial-final.jpg)

You can pick up where we last left off, by cloning the previous tutorial's branch with git.

```bash
git clone git@github.com:robertguss/howtocode.io-tailwind-css-landing-page.git

git checkout 6-callouts-section
```

First, let's create a new `testimonial.html` partial in `src/partials`. Then let's include it in `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home | FunTravel</title>
    <link rel="stylesheet" href="./css/main.css" />
  </head>

  <body>
    <include src="./partials/nav.html"></include>
    <include src="./partials/hero.html"></include>
    <include src="./partials/quote-form.html"></include>
    <include src="./partials/popular-destinations.html"></include>
    <include src="./partials/features.html"></include>
    <include src="./partials/callouts.html"></include>
    <include src="./partials/testimonial.html"></include>

    <script src="./js/main.js"></script>
  </body>
</html>
```

Now let's add in our testimonial markup.

```html
<section class="container mx-auto">
  <div class="testimonial-container w-1/2 mx-auto relative pb-32">
    <p class="testimonial italic text-3xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem,
      aspernatur odit sit aliquam, natus reprehenderit maxime voluptatibus nisi
      assumenda, sequi velit delectus ducimus neque voluptatum a. Reiciendis,
      obcaecati modi?
    </p>

    <!-- Citation -->
    <div class="flex items-center mt-6">
      <img
        class="w-10 h-10 rounded-full mr-4"
        src="./images/jonathan.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <div class="">
        <p class="text-gray-900 leading-none">Larry Silver</p>
        <p class="text-gray-600 text-sm">Aug 18</p>
      </div>
    </div>
  </div>
</section>
```

Which looks like:

![](/images/tailwind-travel-site/1-testimonial.jpg)

To make this look a little more "designed" we can add a quote svg icon like so:

```html
<section class="container mx-auto">
  <div class="testimonial-container w-1/2 mx-auto relative pb-32">
    <div class="quotes w-24 absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        style="fill: #ccc;"
        xml:space="preserve"
      >
        <path
          class="st0"
          d="M75.6,40.5c11,0,19.9,9,19.9,20c0,11-9,20-20,20s-20-9-20-20c0-22.1,17.9-40,40-40  C95.5,20.5,82.4,25.4,75.6,40.5z M45.5,60.5c0,11-9,20-20,20s-20-9-20-20l0,0c0-22.1,17.9-40,40-40c0,0-13.1,4.9-19.9,20  C36.6,40.5,45.5,49.5,45.5,60.5z"
        />
      </svg>
    </div>

    <p class="testimonial italic text-3xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem,
      aspernatur odit sit aliquam, natus reprehenderit maxime voluptatibus nisi
      assumenda, sequi velit delectus ducimus neque voluptatum a. Reiciendis,
      obcaecati modi?
    </p>

    <!-- Citation -->
    <div class="flex items-center mt-6">
      <img
        class="w-10 h-10 rounded-full mr-4"
        src="./images/jonathan.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <div class="">
        <p class="text-gray-900 leading-none">Larry Silver</p>
        <p class="text-gray-600 text-sm">Aug 18</p>
      </div>
    </div>
  </div>
</section>
```

Which now looks like:

![](/images/tailwind-travel-site/2-quotes.jpg)

Let's add some custom css to reposition the icon and change the color. Add the following css to `main.css`

```css
.quotes {
  top: -50px;
  left: -50px;
  z-index: -1;
}

.testimonial {
  z-index: 2;
}
```

Now our testimonial looks like:

![](/images/tailwind-travel-site/3-testimonial-final.jpg)

That's it! Now our testimonial section is complete 🔥

Our travel site so far looks like:

![](/images/tailwind-travel-site/4-full-page.jpg)

You can download a copy of the completed tutorial from the repo [here](https://github.com/robertguss/simple-starter-kit). Each section of the tutorial is within its own branch. The branch for this article is `1-installing-tailwind-css`

Or you can do it via git with:

```bash
git clone git@github.com:robertguss/howtocode.io-tailwind-css-landing-page.git

git checkout 7-testimonial-section
```
