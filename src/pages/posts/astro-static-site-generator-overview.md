---
title: "Astro - 1. Overview & Intro"
date: "2021-10-08"
slug: "astro-static-site-generator-overview"
description: "Astro is a new static site generator built by the creators of Snowpack. In this article I discuss what makes Astro unique and why you may want to consider using it for your next project."
hero: "/images/astro/astro-cover.png"
tags: ["astro-static-site-generator"]
layout: "../../layouts/BlogPostLayout.astro"
---

[Astro](https://astro.build/) is a brand new static site generator created by the developers of [Snowpack](https://www.snowpack.dev/). Astro, however, is not _just another_ static site generator. It has some really unique and powerful features that make it a compelling choice.

## Bring You Own Framework (BYOF)

Suppose you have been building websites for the past few years. In that case, you are probably quite familiar with building sites with some kind of front-end JavaScript framework like React, Preact, Vue, Svelte, etc. The great thing about Astro is that it allows you to build your site with all of these. You can, of course, use HTML and vanilla JS if you like. What makes this so powerful is that you don't need to learn another tool. You can use whichever framework you prefer and build sites using whatever you like.

## Astro Components

Astro also comes with it's own [components](https://docs.astro.build/core-concepts/astro-components) as `.astro` files. These are single-file components, similar to Vue, where the file contains all of your JS, HTML, and styles in a single file. The styles are scoped to the component only and will not leak or "cascade" into other components or areas of your site. Here is what my `Card.astro` component looks like.

```
---
import { format, parseISO } from 'date-fns/fp'

export interface Props {
  post: any;
}

const { post } = Astro.props;
---

<a href={post.url}
  class="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden">

  <img class="squiggle" src={post.hero} alt={post.title} width="360" height="192">
  <div class="py-6 px-8">
    <h2 class="font-bold text-2xl leading-tight">
      {post.title}
    </h2>
    <p class="text-xs text-gray-600 mt-4 flex items-center">
      {format('MM-dd-yyyy', parseISO(post.date))}
    </p>
  </div>
</a>

<style>
 /* Custom styles for this component would go here. */
</style>
```

At the top of the file is something called a "frontmatter component script." This is where your various JS libraries, components, and JS can be written to use within your component. This is also where you receive any data that is passed in via props into the component.

Next is where you write your HTML markup. You use a syntax very similar to JSX for rendering props and JS.

Finally, you can write your own custom CSS within `<style>` tags. Again these styles are scoped to this component only.

## NO JS by default

Astro removes all JS from your final build by default. This provides you with a truly 100% static HTML site. Of course, most sites will need JS for specific components, and Astro allows you to enable JS on a per-component level on-demand. This concept is called [partial hydration](https://docs.astro.build/core-concepts/component-hydration) and means that you have to specifically tell Astro to allow JS on a per-component basis.

The beauty of this is that you have to opt-in to using JS deliberately. You have complete control of how much JS you want to be shipped to the end-user. This "partial hydration" is from a concept known as [island architecture](https://docs.astro.build/core-concepts/component-hydration#concept-island-architecture).

## Island Architecture

The phrase [Island Architecture](https://docs.astro.build/core-concepts/component-hydration#concept-island-architecture) was initially coined by [Jason Miller](https://jasonformat.com/islands-architecture/). I would highly recommend you read both the Astro docs and Jason's article on this subject. With that said, however, here is the TLDR of Island Architecture.

Instead of shipping a giant bundle of JS that is responsible for re-hydrating all of the components on each page, with this architecture, components load individually and in isolation. This means that each component will load separately and is not dependent upon another component loading.

You can specifically tell Astro to render a component:

- when the page is loaded
- when the component enters the viewport
- when the component matches a given media query
- and more...

This provides a ton of flexibility and allows you to optimize each page and component to be as fast as possible, which means delivering the best experience for your end-users.

## Additional Features

Astro also supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, RSS feeds, pagination, automatic sitemaps, and more. It basically comes with pretty much everything you need to get a site up and running without the need to install and configure a bunch of 3rd party plugins.

## Upcoming Features

The Astro team is currently working on some really new and exciting features like integration with Vite and WASM. You can read more about it [here](https://astro.build/blog/astro-021-preview). We can expect v. `0.21.0` to have use Vite instead of Snowpack, a brand new WASM compiler written in Go, and Components in Markdown.

## Wrap Up

The future looks very bright for Astro! It has been a long time since I was this excited and enthusiastic about a new technology or developer tool. I recently migrated this site from Hugo to Astro and have been very impressed so far.

Expect more articles and tutorials about Astro soon.
