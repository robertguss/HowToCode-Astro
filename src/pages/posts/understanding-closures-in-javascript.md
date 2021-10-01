---
title: "Understanding Scope and Closures in Javascript"
date: "2020-02-03"
slug: "understanding-closures-in-javascript"
description: "Learn and understand how scope and closures work in JavaScript."
hero: "/images/hero/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

Closures are one of the more 'advanced' topics in JavaScript, and there is much confusion around them. I think a large part of the confusion comes from trying to explain what they are with too many technical details.

In this article, I am going to do my best to explain what closures are and how they work. Understanding them is essential for all JS developers. Not only do you need to understand them for your daily work, but you will almost certainly be asked to define them at virtually every job interview you have.

From the MDN docs:

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

See what I mean about definitions being a bit too technical. Let's break this down a bit and see what this means with some examples, but before we do, let's first talk about `scope`.

## Scope

The way I like to think about `scope` is to ask myself a simple question, "Who has access to this?" Whenever I come across a variable, and I need to understand the scope in which is exits, I simply ask myself the question, "Who has access to this?" This simple question is how I best understand scope.

> You can think of scope like a gate. Scope restricts the access to something. A gate intendeds to keep whatever is inside of it, from getting out, and whatever is outside of it, from getting in.

Let see an example:

```js
var foo = "Hello World!";

/*
  ... More code below ...
*/
```

In this trivial example, the variable `foo` is declared in what is known as the `global scope`. This means that any of the code below the variable `foo` would have access to it.

For example:

```js
var foo = "Hello World!";

function greeting() {
  console.log(foo);
}

greeting();

/*
  The result of the code above is: Hello World!
*/
```

Since foo is declared inside of the `global scope` everything has access to it.

How about this:

```js
function greeting() {
  var foo = "Hello World!";
}

greeting();

console.log(foo);

/*
  The result of the code above is: Uncaught ReferenceError: foo is not defined
*/
```

The variable `foo` is scoped, or technically `lexically scoped` within the `greeting()` function. Only code inside of the `greeting()` function has access to the variable `foo`.

---

> Aside: Hoisting

If we take that same example and now do this:

```js
function greeting() {
  foo = "Hello World!";
}

greeting();

console.log(foo);

/*
  The result of the code above is: Hello World!
*/
```

This is because of hoisting. To better understand hoisting, check out my article on [Understanding Hoisting in JavaScript](/understanding-hoisting-in-javascript/)

---

## Closure

Now that we have a better understanding of `scope` let's look at an example of a closure.

```js
function speak() {
  var message = "Hello World!";

  function say() {
    console.log(message);
  }

  say();
}

speak();

/*
  The result of the code above is: Hello World!
*/
```

Let's break this down a bit to understand better what is going on here.

We first declare a function called `speak()`. Inside of the `speak()` function, also known as the 'body' of the function, we create a `local variable` called `message`. We also create an inner function called `say()`. Since the `say()` function is within the body of the `speak()` function, it has access to the variables declared within it. The `say()` function is a closure, as it has access to the `message` variable since this variable is inside of the `speak()` function.

Another way to look at this, is to think of the brackets, `{}`, of the `speak()` function as acting like a gate. Those brackets **WILL** allow whatever is **inside of them** access to its contents, but it will **NOT** allow access to anything **outside** of them.

Here is a more technical definition from the MDN docs:

> This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. **Nested functions have access to variables declared in their outer scope**.

So if we were to come across a piece of code like this, we would simply need to ask ourselvs the question, "Who has access to the `message` variable?" Understanding `scope` and `closures` is how we answer that question.

Let's take a look at another example:

```js
function speak() {
  var message = "Hello World!";

  function say() {
    console.log(message);
  }

  return say;
}

var greeting = speak();
greeting();

/*
  The result of the code above is: Hello World!
*/
```

Notice how in this example we are not executing or `invoking` the `say()` function within the body of the `speak()` function, like the previous example. Instead, we are returning the function `say()`. The reason this works is because of `closure`.

From the MDN Docs:

> The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

## Wrap Up

I hope this helps clarify some of the confusion around closures. There is plenty more than can be said on the topic, but I wanted to try and explain this concept as simply and clearly as I could. If you are hungry for more, I have some recommended resources below for further learning.

## Additional Resources

- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Fun Fun Function - Closures](https://youtu.be/CQqwU2Ixu-U)
- [Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
- [What you need to know as a JavaScript Developer](https://www.toptal.com/javascript#hiring-guide)
