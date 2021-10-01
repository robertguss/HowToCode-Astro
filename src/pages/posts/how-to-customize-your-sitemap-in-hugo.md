---
title: "How to customize your sitemap in Hugo"
date: "2020-02-12"
slug: "how-to-customize-your-sitemap-in-hugo"
description: "In this article, I am going to show you how to customize your sitemap in Hugo (Golang)"
hero: "/images/hero/gohugoio.png"
tags: ["hugo"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, I am going to show you how to customize your sitemap in Hugo to do the following:

1. Keep certain items out of `sitemap.xml`
2. Make sure the URLs in the sitemap contain the full site address, not just relative paths

We first need to customize the sitemap template within Hugo to add these features. If you do not already have a `sitmap.xml` template in your theme, create a new file called `sitemap.xml` and place it inside of your themes
`/layouts/_defaults/sitemap.xml`.

Here is what this site's `sitemap.xml` looks like:

```go
{{ printf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>" | safeHTML }}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  {{ range .Data.Pages }}{{ if ne .Params.sitemap_exclude true }}
    <url>
      <loc>https://robertguss.com{{ .Permalink }}</loc>{{ if not .Lastmod.IsZero }}
      <lastmod>{{ safeHTML ( .Lastmod.Format "2006-01-02T15:04:05-07:00" ) }}</lastmod>{{ end }}{{ with .Sitemap.ChangeFreq }}
      <changefreq>{{ . }}</changefreq>{{ end }}{{ if ge .Sitemap.Priority 0.0 }}
      <priority>{{ .Sitemap.Priority }}</priority>{{ end }}{{ if .IsTranslated }}{{ range .Translations }}
      <xhtml:link
                  rel="alternate"
                  hreflang="{{ .Language.Lang }}"
                  href="{{ .Permalink }}"
                  />{{ end }}
      <xhtml:link
                  rel="alternate"
                  hreflang="{{ .Language.Lang }}"
                  href="{{ .Permalink }}"
                  />{{ end }}
    </url>
  {{ end }}{{ end }}
</urlset>
```

Feel free to copy this and modify as necessary 😎

## How to keep items out of your sitemap.xml

There may be pages, tags, or URL paths that you wish to keep out of your `sitemap.xml`. For instance, I do not want `/post/` or `/categories/` listed inside of my `sitemap.xml`, and so to disable them, I modified the `sitemap.xml` template above to check and see if a property called `sitemap_exclude: true` exists in any front matter. If so, then the `sitemap.xml` template does not list these items.

I have the majority of the content wrapped in a conditional that looks like this:

```go
{{ if ne .Params.sitemap_exclude true }}
    // ...
{{ end }}{{ end }}
```

Any content I wish to exclude from `sitemap.xml` contains the property

```bash
sitemap_exclude: true
```

in the front matter. This will prevent it from showing up in my `sitemap.xml`.

## Hiding the categories taxonomy from your sitemap

To hide the categories taxonomy from my `sitemap.xml` I add the following to my sites `config.toml`.

```bash
[Taxonomies]
    tag = "tags"
```

Explicitly listing the taxonomies **you want** inside of your `config.toml` file keeps **unlisted** ones from showing up in your `sitemap.xml`.

## Hiding content types from your sitemap

This site has a content type called `post` which is for all of the articles I write on this site. However, Hugo automatically adds a new listing in my `sitemap.xml` with a URL of `/post/`. I do not want this as all of my articles URLs come directly after my domain name like `https://robertguss.com/my-post`, not `https://robertguss.com/post/my-post`.

To fix this, I created a file called `_index.md` inside of `site/content/post/_index.md` and gave it a front matter like the following:

```bash
---
sitemap_exclude: true
---
```

Now, this path does not show up in my sitemap. 👍

## Fixing URLs in your sitemap

I am not 100% on this, but I believe this issue has to do with the fact that this site is hosted on Netlify, as other people also seem to have this issue. The production version of `sitemap.xml` when hosted on Netlify, contains only relative URLs, like: `/tags/golang` instead of `https://robertguss.com/tags/golang`.

Google needs the entire URL, not just relative paths to properly parse it. To fix this, I again modified my `sitemap.xml` template above with the following line:

```go
<loc>https://robertguss.com{{ .Permalink }}</loc>{{ if not .Lastmod.IsZero }}
```

It is a bit of a hack, but it works and gets the job done. I am sure I could create a more elegant way of doing this, but it's good enough for the time being.

Now my sitemap contains only the things I want it to and has proper URLs.

## Wrap Up

Working with `sitemap.xml` in Hugo is not so straightforward at first, but since you can customize it with your own template, you can make it look however you want. One of the things I love about Hugo is how flexible and customizable it is.

## Additional Resources

- [Hugo Sitemap Template Docs](https://gohugo.io/templates/sitemap-template/)
