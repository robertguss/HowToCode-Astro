---
title: "Go Basics - 10. Pointers in Go"
date: "2020-02-10"
slug: "go-basics-10-pointers-in-go"
description: "In this article, we are going to explore how pointers work in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how pointers work in the Go programming language.

```go
package main

import (
	"fmt"
)

func main() {

	a := 14
	b := a

	fmt.Println(a, b)
}

/*
  The result of the code above is:
  14 14
*/
```

In this first example, we declare the variable `a` to be an `int` of 14. Then we assign the variable `b` to be the value of `a`. Since Go is passing by `value` and not by `reference` in this example, the variable `b` is a copy of `a`.

We can prove this with the following example.

```go
package main

import (
	"fmt"
)

func main() {

	a := 14
	b := a

	fmt.Println(a, b)

	a = 55

	fmt.Println(a, b)
}

/*
  The result of the code above is:
  14 14
  55 14
*/
```

## Pointers

We can use `pointers` to make the `b` variable 'point' to the value of `a`.

```go
package main

import (
	"fmt"
)

func main() {

	var a int = 14
	var b *int = &a

	fmt.Println(a, b)
}

/*
  The result of the code above is:
  14 0x40e020
*/
```

The variable `b` now holds the location in memory where the value of the variable `a` is stored. So, the variable `b` now 'points' to the same location in memory as the variable `a`.

Let's break down this new syntax:

```go
var b *int = &a
```

The `*` symbol is a pointer, and the `&` gives the memory address of the variable that comes after it. So in this example we are saying that variable `b` is a `pointer` to an `int` and it is equal to the same location in memory as the variable `a`.

## Dereferencing pointers

```go
package main

import (
	"fmt"
)

func main() {

	var a int = 14
	var b *int = &a

	fmt.Println(a, *b)
}

/*
  The result of the code above is:
  14 14
*/
```

Notice in this example that the only change made from the previous example is this line:

```go
fmt.Println(a, *b)
```

Putting the `*` in front of the variable `b` is called `dereferencing`. This might seem a little confusing because in this line

```go
var b *int = &a
```

the `*` is a pointer. However, when you then use the same `*` in front
of a pointer, it is called `dereferencing`, which means **give me the value of this pointer**.

So to reiterate this example one more time:

```go
var b *int = &a
```

The `*` symbol is a pointer, and the `&` gives the memory address of the variable that comes after it. So in this example we are saying that variable `b` is a `pointer` to an `int` and it is equal to the same location in memory as the variable `a`.

```go
fmt.Println(a, *b)
```

The `*` symbol, in this case, says `dereference` the pointer `b` and give me the value that it is 'pointing' to.

So if we modify our earlier example using `pointers` and `dereference` we see that by re-declaring the variable `a` changes the value of the variable `b` since `b` is 'pointing' to the same value as `a`.

```go
package main

import (
	"fmt"
)

func main() {

	var a int = 14
	var b *int = &a

	fmt.Println(a, *b)

	a = 55

	fmt.Println(a, *b)
}

/*
  The result of the code above is:
  14 14
  55 55
*/
```

## Wrap Up

In this article, we learned how to create and work with pointers in Go.

## Additional Resources

- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
