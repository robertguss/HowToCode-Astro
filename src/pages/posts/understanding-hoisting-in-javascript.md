---
title: "Understanding Hoisting in Javascript"
date: "2020-01-31"
slug: "understanding-hoisting-in-javascript"
description: "In this article, I discuss the concept of hoisting in JavaScript."
hero: "/images/hero/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

Hoisting in one of the more 'advanced' topics in JavaScript, but every JS developer needs to understand it. It is one of the odd 'quirks' or 'weird parts' of the language. This concept can get quite technical because it has to do with how the JS engine compiles and executes JS code. Before digging into the details, let's look at some simple examples.

```js
function greeting(name) {
  console.log("Hello " + name);
}

greeting("John");

/*
  The result of the code above is: "Hello John"
*/
```

We would expect that after running this code, we would see the string 'Hello John' printed to the console. What would happen if we switch the function invocation and the function declaration order?

```js
greeting("John");

function greeting(name) {
  console.log("Hello " + name);
}

/*
  The result of the code above is: "Hello John"
*/
```

Surprisingly we get the same result! How does the greeting function still execute even though it is not declared until after we invoke it? The answer... hoisting!

---

> Aside: Defining terms

Before we get into the technical details of hoisting, I want to make sure I clarify some terminology I used above. A `function declaration` is when you write and create a function, like so:

```js
// Function declaration
function greeting(name) {
  console.log("Hello " + name);
}
```

A `function invocation` is when you 'invoke' or execute the function. Like so:

```js
// Function invocation or 'invoking the function'
greeting("John");
```

---

## How hoisting works (the technical parts)

Here is a definition from the [MDN docs on hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

**Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.**

First, did you notice that in their definition, they mention both `variables` and `function` declarations. Later on we will look at how variable hoisting works as well, but for now, let's simply focus on `function declarations`.

A common misconception about hoisting is that many people think that the JS engine, actually moves up or 'hoists' your `function declaration` to the top of the page. It is easy to understand why, as that is what it appears to be doing.

Let's look at that example again:

```js
greeting("John");

function greeting(name) {
  console.log("Hello " + name);
}

/*
  The result of the code above is: "Hello John"
*/
```

It is as if the JS engine, is doing this:

```js
function greeting(name) {
  console.log("Hello " + name);
}

greeting("John");

/*
  The result of the code above is: "Hello John"
*/
```

However, that is not what is happening. To understand what is going on, we need to understand `execution contexts`.

## Execution Context - Creation Phase (Phase 1)

The JS engine creates something that is called the `execution context`, and is created in two phases. The first phases is called the `creation` phase.

During this phase of the `execution context`, the JS engine setups up space in memory for `variables` and `functions`. What this means is that before your code begins to be executed line by line, the JS engine has already
created space in memory for your `variables` and `functions`. Therefore, since the JS engine has these `variables` and `functions` already in memory, your code has access to them! This is how 'hoisting' works under the hood.

This is also why it appears like the JS engine has moved your code to the top. It hasn't moved anything, the engine already knows about your `variables` and `functions`, and when your code is executed it finds them already existing in memory.

## Execution Context - Execution Phase (Phase 2)

During this phase, the JS engine executes your code from top to bottom, line by line. Let's take a look at a variable example to help solidify the difference between these two phases.

```js
console.log(foo);

var foo = "Hello World!";

/*
  The result of the code above is: undefined
*/
```

This might not seem all that surprising, but take a look at this example:

```js
console.log(foo);

/*
  The result of the code above is: Uncaught ReferenceError: foo is not defined
*/
```

So what exactly is going on here? In the first example, when the JS engine is in the `creation phase` of the `execution context` it will automatically assign a value of `undefined` to our variable `foo`. This is why when we try to `console.log(foo)` even though `foo` has not been `assigned` it prints `undefined` to the console. You can think of `undefined` as being a placeholder, until later on when it expects to see `foo` actually assigned to some `value`.

In the second example, the reason why we are getting a reference error, is because at first, `foo` has a value of `undefined`, however, since `foo` is never `assigned` a value later on we get `Uncaught ReferenceError: foo is not defined`.

So as we can see by these two examples, the JS engine has already created space in memory for our `variable`. It does the same for our `function declarations`.

_**It is always best to not rely upon hoisting and to write your code in such a way as to not utilize it. It will make your code easier to read, reason about, and debug.**_

## Preventing function hoisting

There are a couple of ways to prevent hoisting of our functions. The first, the most obvious, is to declare our functions before executing them.

Like so:

```js
function greeting(name) {
  console.log("Hello " + name);
}

greeting("John");

/*
  The result of the code above is: "Hello John"
*/
```

## Function Expression

The other method is to use what is known as a `function expression`. A `function expression` is when you both `declare` & `assign` a function at the same time. Like so:

```js
var greeting = function (name) {
  console.log("Hello " + name);
};
```

_**An easy way to remember the difference between a `function declaration` & a `function expression` is that `function expressions` have an `=` to the left of them. `Function declarations` do not have an `=` sign, only `function expressions` do.**_

Let's see if this will prevent hoisting:

```js
greeting("John");

var greeting = function (name) {
  console.log("Hello " + name);
};

/*
  The result of the code above is: Uncaught TypeError: greeting is not a function
*/
```

It does! Since we are both `declaring` & `assigning` this function at the same time, the JS engine does not 'hoist' it.

## Variable Hoisting

Let's now look at another example using both a `function` and `variables`.

```js
function hoisting() {
  a = "foo";
  var b = "bar";
}

hoisting();
console.log(a);
console.log(b);

/*
  The result of the code above is:
  foo
  Uncaught ReferenceError: b is not defined
*/
```

This is because the variable `a` is undeclared, and therefor the JS engine creates it as a `global variable`. All undeclared variables are `global variables`.

Variable `b` however is `not defined` because `b` is declared, and also, it's scope is limited to within the body of the `hoisting()` function.

`b` is therefore not accessible outside of the function.

## The `Let` Keyword

In an earlier example, we saw the following:

```js
console.log(foo);

var foo = "Hello World!";

/*
  The result of the code above is: undefined
*/
```

If we instead use the `let` keyword, look at what happens:

```js
console.log(foo);

let foo = "Hello World!";

/*
  The result of the code above is: 
  Uncaught ReferenceError: Cannot access 'foo' before initialization
*/
```

This newer keyword in JS will prevent us from getting back `undefined` and will throw a reference error. This is why you should probably be using the `let` keyword or the `const` keyword instead of `var` going forward.

## Wrap Up

I hope this helps clarify the issues & confusion around hoisting. Knowing this will help you to write better code that is easier to read, reason about & debug.
