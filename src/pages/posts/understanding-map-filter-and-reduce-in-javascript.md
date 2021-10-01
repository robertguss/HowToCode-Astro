---
title: "Understanding Map, Filter & Reduce in Javascript"
date: "2020-02-05"
slug: "understanding-map-filter-and-reduce-in-javascript"
description: "Map, Filter & Reduce are three of the most important array methods you need to learn and master as a JavaScript developer."
hero: "/images/hero/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) & [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) are three of the most important array methods you need to learn and master as a JavaScript developer. Knowing all three of them is like having a Swiss Army knife for dealing with data in arrays.

## Map

From the MDN Docs:

> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array = [1, 2, 3, 4, 5];

const map = array.map((x) => x * 2);

console.log(map);

/*
  The result of the code above is: [2, 4, 6, 8, 10]
*/
```

Typically, the `map()` method is used when you want to iterate over each element in the array and perform some type of transformation on it, like we did above where we multiplied each number in the array by 2.

You can also use `map()` to get data out of an array, similar to how you might use a `for` loop. In the below example, I have an `array` of user `objects`. If I want only to get the names of each user, I would do this:

```js
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Robert" },
  { id: 4, name: "Jill" },
];

const userNames = users.map((user) => user.name);

console.log(userNames);

/*
  The result of the code above is: ["John Doe", "Jane", "Robert", "Jill"]
*/
```

## Filter

From the MDN Docs:

> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

The filter method does what its name implies. It filters out items from an array, based upon some criteria you provide. Let's use an earlier example and see how this works by only returning numbers that are greater than 3. So we only want `4` & `5` in this case:

```js
const array = [1, 2, 3, 4, 5];

const filter = array.filter((number) => number > 3);

console.log(filter);

/*
  The result of the code above is: [4, 5]
*/
```

> The filter method will always return a new array with less items than the original array had, since you are `filtering` out certain elements from the original array.

## Reduce

From the MDN Docs:

> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

The `reduce()` method interates over each element in an array and 'reduces' all of the values to a single value. Let's take an earlier example and add up all of the numbers in a given array, like so:

```js
const array = [1, 2, 3, 4, 5];

const reduce = array.reduce((accumulator, number) => accumulator + number);

console.log(reduce);

/*
  The result of the code above is: 15
*/
```

## Wrap Up

I hope you now have a better understanding of these 3 array methods and can see just how useful they are. I know the examples are somewhat trivial, but if you start using these methods in your day to day work, your JS code will improve immensely. There is a lot more that can be said on each of these, which is why I have linked to the MDN docs and some helpful YouTube videos below if you want to learn more.

## Additional Resources

- [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Fun Fun Function - Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ)
- [Fun Fun Function - Reduce](https://www.youtube.com/watch?v=Wl98eZpkp-c)
