---
title: "How to console log better in JavaScript"
date: "2020-01-29"
slug: "how-to-console-log-better-in-javascript"
description: "In this article, I discuss various JavaScript debugging techniques using the console object."
hero: "/images/hero/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

You are probably already very familiar with using `console.log()` to print something to the console, especially the browser console. While this method is handy, there are lots of other methods on the `console` object that can make debugging, and our lives, for that matter, much easier.

## console.table()

Let's say we are retrieving a list of users from an api:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Our response looks like this:

![Users response](/images/how-to-console-log-better-in-js/fetching-users.jpg)

We can display this data in a more readable table format with the following:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.table(json));
```

Now our response looks like this:

![Users as table response](/images/how-to-console-log-better-in-js/users-as-table.jpg)

What if we are only interested in seeing specific pieces of data? We can pass an array to the `console.table()` method with the keys we are interested in, like so:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.table(json, ["username", "email", "phone"]));
```

Now our response looks like this:

![Users as table response with specific data](/images/how-to-console-log-better-in-js/users-table-specific-data.jpg)

## console.log() - with custom styles

When logging something to the console, it can sometimes be hard to differentiate between what you are logging, and everything else. We can solve this by passing custom CSS to our `console.log()` to make it stand out.

```js
console.log("%cTest", "background-color: green; padding: 10px");
```

Now our `console.log()` looks like this:

![Console.log statement green](/images/how-to-console-log-better-in-js/console-log-green.jpg)

or:

```js
console.log(
  "%cError",
  "background-color: red; padding: 10px; border: 5px solid white; color: black;"
);
```

Looks like:

![Console.log statement error red](/images/how-to-console-log-better-in-js/console-log-error-red.jpg)

## console.dir()

This is another helpful method that allows you to navigate large JS objects better.

From the MDN docs:

**The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.**

**In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.**

```js
console.dir(document.location);
```

Looks like this:

![console.dir](/images/how-to-console-log-better-in-js/console-dir.jpg)

## console.error()

Another simple method on the `console` object is `console.error()` this outputs a message formatted as an error.

```js
console.error("there has been an error...");
```

Looks like this:

![console.error](/images/how-to-console-log-better-in-js/console-error.jpg)

## console.debug()

Another simple method on the `console` object is `console.debug()` this outputs a message formatted as a debug message.

```js
console.debug("this is a debug message...");
```

Looks like this:

![console.debug](/images/how-to-console-log-better-in-js/console-debug.jpg)

## console.warn()

Another simple method on the `console` object is `console.warn()`; this will output a message formatted as a warning.

```js
console.warn("this is a warning message...");
```

Looks like this:

![console.warn](/images/how-to-console-log-better-in-js/console-warn.jpg)

## Wrap up

You can find all the `console` methods over at the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/console)
