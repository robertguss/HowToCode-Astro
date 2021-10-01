---
title: "Looping through objects in Javascript"
date: "2020-02-01"
slug: "looping-through-objects-in-javascript"
description: "Learn how to loop through objects in JavaScript in three different ways."
hero: "/images/hero/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

Here is the object we will use for all of the examples:

```js
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
```

## 1. `for in loop`

```js
for (let key in user) {
  console.log(key, user[key]);
}

/*
  The result of the code above is:
  id 1
  name Leanne Graham
  username Bret
  email Sincere@april.biz
  address {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
  phone 1-770-736-8031 x56442
  website hildegard.org
  company {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
*/
```

## 2. `Object.keys()`

`Object.keys()` takes an object and returns an array of all of the `keys` of the object. This allows you to easily loop through the array and get all of the `keys` out.

```js
console.log(Object.keys(user));
/*
  The result of the code above is:
  0: "id"
  1: "name"
  2: "username"
  3: "email"
  4: "address"
  5: "phone"
  6: "website"
  7: "company"
*/

Object.keys(user).forEach((key) => {
  console.log(`${key}: ${user[key]}`);
});

/*
  The result of the code above is:
  id: 1
  name: Leanne Graham
  username: Bret
  email: Sincere@april.biz
  address: [object Object]
  phone: 1-770-736-8031 x56442
  website: hildegard.org
  company: [object Object]
*/
```

## `Object.values()`

Takes an object and returns an array of all of the `values` of the object. This allows you to easily loop through the array and get all of the `values` out.

```js
console.log(Object.values(user));
/*
  The result of the code above is:
  0: 1
  1: "Leanne Graham"
  2: "Bret"
  3: "Sincere@april.biz"
  4: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
  5: "1-770-736-8031 x56442"
  6: "hildegard.org"
  7: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
*/

Object.values(user).forEach((value) => {
  console.log(`${value}`);
});

/*
  The result of the code above is:
  1
  Leanne Graham
  Bret
  Sincere@april.biz
  [object Object]
  1-770-736-8031 x56442
  hildegard.org
  [object Object]
*/
```

## `Object.entries()`

Takes an object and returns an `array` of `arrays`. The inner `array` has two items in it, the first being the `key` the 2nd being the `value`

```js
console.log(Object.entries(user));
/*
  The result of the code above is:
  0: (2) ["id", 1]
  1: (2) ["name", "Leanne Graham"]
  2: (2) ["username", "Bret"]
  3: (2) ["email", "Sincere@april.biz"]
  4: (2) ["address", {…}]
  5: (2) ["phone", "1-770-736-8031 x56442"]
  6: (2) ["website", "hildegard.org"]
  7: (2) ["company", {…}]
*/

Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/*
  The result of the code above is:
  id: 1
  name: Leanne Graham
  username: Bret
  email: Sincere@april.biz
  address: [object Object]
  phone: 1-770-736-8031 x56442
  website: hildegard.org
  company: [object Object]
*/
```

## Wrap up

Next time you need to loop through an object in JavaScript give one of these methods a try.
