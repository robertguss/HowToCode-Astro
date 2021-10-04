---
title: "Tailwind CSS Travel Site - 3. Quote Form"
date: "2020-03-21"
slug: "tailwind-css-travel-site-3-quote-form"
description: "In this tutorial, we are going to build the quote form for our travel site with Tailwind CSS"
hero: "/images/hero/tailwind-css-travel-site.png"
tags: ["tailwind-css-travel-site"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this lesson, we are going to be building the quote form.

The final result will look like:

![](/images/tailwind-travel-site/5-margin-right.jpg)

You can pick up where we last left off, by cloning the previous tutorial's branch with git.

```bash
git clone git@github.com:robertguss/howtocode.io-tailwind-css-landing-page.git

git checkout 2-nav-and-hero
```

First, let's create a new partial for the quote form. Create a new file called `quote-form.html` in `src/partials`. Then include this new file in `index.html`

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

    <script src="./js/main.js"></script>
  </body>
</html>
```

Inside of our new partial we will add the following markup

```html
<section
  class="quote-form flex items-center justify-center p-12 container mx-auto rounded-lg h-24 bg-gray-200"
></section>
```

Tailwind CSS classes:

| Class          | Value                                       |
| -------------- | ------------------------------------------- |
| flex           | display: flex;                              |
| items-center   | align-items: center;                        |
| justify-center | justify-content: center;                    |
| p-12           | padding: 3rem;                              |
| container      | https://tailwindcss.com/docs/container/#app |
| mx-auto        | margin-right: auto; margin-left: auto;      |
| rounded-lg     | border-radius: 0.5rem;                      |
| h-24           | height: 6rem;                               |
| bg-gray-200    | background-color: #edf2f7;                  |

We also need to add a small amount of custom css to bring the quote form up slightly. Add the following css to `main.css`

```css
.quote-form {
  margin-top: -45px;
  opacity: 0.99;
  z-index: 10;
}
```

The quote form should look like this:

![](/images/tailwind-travel-site/1-quote-form-section.jpg)

Next, we will add our first input for our quote form. It will act as a place for the user to enter in the destination they would like to travel to.

Add the following markup in between the `<section>` we just created:

```html
<input
  class="shadow rounded py-2 px-3 text-gray-700 w-1/4"
  type="text"
  placeholder="Where are you going?"
/>
```

Tailwind CSS classes:

| Class         | Value                                                                        |
| ------------- | ---------------------------------------------------------------------------- |
| shadow        | box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); |
| rounded       | border-radius: 0.25rem;                                                      |
| py-2          | padding-top: 0.5rem; padding-bottom: 0.5rem;                                 |
| px-3          | padding-right: 0.75rem; padding-left: 0.75rem;                               |
| text-gray-700 | color: #4a5568;                                                              |
| w-1/4         | width: 25%;                                                                  |

The quote form should look like this:

![](/images/tailwind-travel-site/2-quote-form-destination-input.jpg)

For the sake of simplicity, we can duplicate this first input 2 more times for both of our date inputs. We just need to change the type from `type="text"` to `type="date"` like so:

```html
<input class="shadow rounded py-2 px-3 text-gray-700 w-1/4" type="date" />
<input class="shadow rounded py-2 px-3 text-gray-700 w-1/4" type="date" />
```

So our entire quote form markup should look like this:

```html
<section
  class="quote-form flex items-center justify-center p-12 container mx-auto rounded-lg h-24 bg-gray-200"
>
  <input
    class="shadow rounded py-2 px-3 text-gray-700 w-1/4"
    type="text"
    placeholder="Where are you going?"
  />
  <input class="shadow rounded py-2 px-3 text-gray-700 w-1/4" type="date" />
  <input class="shadow rounded py-2 px-3 text-gray-700 w-1/4" type="date" />
</section>
```

And our quote form now looks like:

![](/images/tailwind-travel-site/3-quote-form-date-fields.jpg)

Let's add the final piece, the submit button.

```html
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4"
>
  Submit
</button>
```

Tailwind CSS classes:

| Class             | Value                                        |
| ----------------- | -------------------------------------------- |
| bg-blue-500       | background-color: #a0aec0;                   |
| hover:bg-blue-700 | hover:background-color: #4a5568;             |
| text-white        | color: #fff;                                 |
| font-bold         | font-weight: 700;                            |
| py-2              | padding-top: 0.5rem; padding-bottom: 0.5rem; |
| px-4              | padding-right: 1rem; padding-left: 1rem;     |
| rounded           | border-radius: 0.25rem;                      |
| w-1/4             | width: 25%;                                  |

![](/images/tailwind-travel-site/4-submit-button.jpg)

Finally, we will add some margin to the right of each element to provide some spacing between each form field by adding the class `mr-8` to each input element.

```html
<section
  class="quote-form flex items-center justify-center p-12 container mx-auto rounded-lg h-24 bg-gray-200"
>
  <input
    class="shadow rounded py-2 px-3 text-gray-700 w-1/4 mr-8"
    type="text"
    placeholder="Where are you going?"
  />
  <input
    class="shadow rounded py-2 px-3 text-gray-700 w-1/4 mr-8"
    type="date"
  />
  <input
    class="shadow rounded py-2 px-3 text-gray-700 w-1/4 mr-8"
    type="date"
  />
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4"
  >
    Submit
  </button>
</section>
```

![](/images/tailwind-travel-site/5-margin-right.jpg)

Our finished quote form 😎

You can download a copy of the completed tutorial from the repo [here](https://github.com/robertguss/simple-starter-kit). Each section of the tutorial is within its own branch. The branch for this article is `3-quote-form`

Or you can do it via git with:

```bash
git clone git@github.com:robertguss/howtocode.io-tailwind-css-landing-page.git

git checkout 3-quote-form
```
