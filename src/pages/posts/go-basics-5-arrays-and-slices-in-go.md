---
title: "Go Basics - 5. Arrays & Slices in Go"
date: "2020-02-05"
slug: "go-basics-5-arrays-and-slices-in-go"
description: "In this article, we are going to explore how to work with arrays & slices in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how to work with arrays & slices in the Go programming language.

## Arrays

Arrays, unlike slices, are fixed in length. Meaning, that when you create them, you need to specify how many elements are within the array. Arrays can only contain one type, meaning you **cannot** have an array with both `string` and `int` types.

```go
package main

import (
	"fmt"
)

func main() {
	i := [3]int{1, 2, 3}
	fmt.Printf("%v, %T", i, i)
}

/*
  The result of the code above is:
  [1 2 3], [3]int
*/
```

The syntax for an array in Go works like this. We first use `[]` which represents the array. `[3]` says that there are 3 elements in this array. `[3]int` says that the 3 items in the array are of the type `int`. `{1, 2, 3}` are the values within the array.

So in the example above, we are telling the compiler that variable `i` is an array that contains 3 `int`'s whose values are 1, 2, 3.

You can also create arrays with an alternative syntax like so:

```go
package main

import (
	"fmt"
)

func main() {
	i := [...]int{1, 2, 3}
	fmt.Printf("%v, %T", i, i)
}

/*
  The result of the code above is:
  [1 2 3], [3]int
*/
```

The `[...]` tells the compiler to create an array to the exact length of the values I am creating it with. Since this array contains three values, the length is also 3.

Arrays can also be initialized without values as well.

```go
package main

import (
	"fmt"
)

func main() {
	var i [3]int
	fmt.Printf("%v, %T", i, i)
}

/*
  The result of the code above is:
  [0 0 0], [3]int
*/
```

Since we are creating an array with the type of `int` the compiler fills it with and `int`'s zero value, which in this case is zero. If we do the same thing with strings, we get the following:

```go
package main

import (
	"fmt"
)

func main() {
	var s [3]string
	fmt.Printf("%v, %T", s, s)
}

/*
  The result of the code above is:
  [  ], [3]string
*/
```

To populate our array, we need to specify the index in the array and then give it a value.

```go
package main

import (
	"fmt"
)

func main() {
  var s [3]string
  s[0] = "Hello" // place the string "Hello" as the 1st item
  s[1] = "World" // place the string "World" as the 2nd item
	fmt.Printf("%v, %T", s, s)
}

/*
  The result of the code above is:
  [Hello World ], [3]string
*/
```

To get an element out of the array, we use the same `[]` syntax to specify which element we want from the array.

```go
package main

import (
	"fmt"
)

func main() {
  var s [3]string
  s[0] = "Hello"
  s[1] = "World"
	fmt.Printf("%v", s[0]) // s[0] says give me the first item in the array
}

/*
  The result of the code above is:
  Hello
*/
```

If we need to get the length of an array, we can use the built-in `len()` function.

```go
package main

import (
	"fmt"
)

func main() {
  var s [3]string
  s[0] = "Hello"
  s[1] = "World"
	fmt.Printf("%v", len(s))
}

/*
  The result of the code above is:
  3
*/
```

_**Remember that even though there are only 2 elements in the example above, when we created the array we specified that it would contain 3 elements of type `string`.**_

Arrays can also contain other arrays.

```go
package main

import (
	"fmt"
)

func main() {
	var a [3][3]int
	a[0] = [3]int{1, 2, 3}
	a[1] = [3]int{4, 5, 6}
	a[2] = [3]int{7, 8, 9}
	fmt.Println(a)
}

/*
  The result of the code above is:
  [[1 2 3] [4 5 6] [7 8 9]]
*/
```

Arrays are also passed by value in Go. So when you make a copy of the array, you make a copy and do not reference the original.

```go
package main

import (
	"fmt"
)

func main() {
	a := [3]int{1, 2, 3}
	b := a
	b[1] = 14

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(a)
}



/*
  The result of the code above is:
  [1 2 3]
  [1 14 3]
  [1 2 3]
*/
```

If you need to modify the original array, you can use a `pointer`. You can learn more about pointers in [Go Basics - 10. Pointers in Go](/go-basics-10-pointers-in-go).

```go
package main

import (
	"fmt"
)

func main() {
	a := [3]int{1, 2, 3}
	b := &a // & is the reference operator
	b[1] = 14

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(a)
}

/*
  The result of the code above is:
  [1 14 3]
  &[1 14 3] // this means that the variable b is 'pointing' to a, not making a copy of it like earlier
  [1 14 3]
*/
```

## Slice

Slices are more common in Go, as they behave similarly to arrays. However, they **are not** initialized with a specific length.

```go
package main

import (
	"fmt"
)

func main() {
	s := []int{1, 2, 3}
	fmt.Printf("%v, %T", s, s)
}

/*
  The result of the code above is:
  [1 2 3], []int
*/
```

We use the same syntax as arrays **without** specifying the length.

If we need to get the length of a slice, we can use the built-in `len()` function.

```go
package main

import (
	"fmt"
)

func main() {
	s := []int{1, 2, 3}
	fmt.Printf("%v", len(s))
}

/*
  The result of the code above is:
  3
*/
```

Slices, unlike arrays, are passed by reference, **not by value**. This means that when you make a copy of a slice, you are pointing to the original.

```go
package main

import (
	"fmt"
)

func main() {
	a := []int{1, 2, 3}
	b := a
	b[1] = 14

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(a)
}

/*
  The result of the code above is:
  [1 14 3]
  [1 14 3]
  [1 14 3]
*/
```

Slices can also be created with a special syntax when you want to only get some of the elements out of the original array, like so:

```go
package main

import (
	"fmt"
)

func main() {
	a := []int{1, 2, 3, 4, 5}
	b := a[:]   // all of the elements in a
	c := a[1:]  // start from the 2nd element to the end
	d := a[:3]  // the first 3 elements
	e := a[2:4] // start from the 3rd element to the 4th

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
}

/*
  The result of the code above is:
  [1 2 3 4 5]
  [1 2 3 4 5]
  [2 3 4 5]
  [1 2 3]
  [3 4]
*/
```

The number on the left side, `3:` is **inclusive**, while the number on the right side `:3` is **exclusive**.

> These same slicing operations also work for arrays!

```go
package main

import (
	"fmt"
)

func main() {
	a := [...]int{1, 2, 3, 4, 5}
	b := a[:]   // all of the elements in a
	c := a[1:]  // start from the 2nd element to the end
	d := a[:3]  // the first 3 elements
	e := a[2:4] // start from the 3rd element to the 4th

	fmt.Printf("%v, %T\n", a, a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
}

/*
  The result of the code above is:
  [1 2 3 4 5], [5]int
  [1 2 3 4 5]
  [2 3 4 5]
  [1 2 3]
  [3 4]
*/
```

To add items to our slice, we can use the `append()` function.

```go
package main

import (
	"fmt"
)

func main() {
	a := []int{}

	fmt.Println(a)

	a = append(a, 1)
	a = append(a, 2)

	fmt.Println(a)
}

/*
  The result of the code above is:
  []
  [1 2]
*/
```

`append()` can also take multiple values at the same time, also known as `variadic arguments`.

```go
package main

import (
	"fmt"
)

func main() {
	a := []int{}

	fmt.Println(a)

	a = append(a, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

	fmt.Println(a)
}

/*
  The result of the code above is:
  []
  [1 2 3 4 5 6 7 8 9 10]
*/
```

you can also concatenate 2 slices together like so:

```go
package main

import (
	"fmt"
)

func main() {
  a := []int{4, 5, 6}
  b := []int{1, 2, 3}

	fmt.Println(a)

	a = append(a, b...) // the ... operator extracts all of the values from the slice b

	fmt.Println(a)
}

/*
  The result of the code above is:
  [4 5 6]
  [4 5 6 1 2 3]
*/
```

Since `a` is a `slice` of `int`, it can only accept the `int` type. If we try to append `b`, which is a `slice` of `int` the compiler fails. However, we can use `...` to extract or `destructure` the `slice` to get all of the
values from it and append those values to `a`.

## Wrap Up

In this article, we learned about how to create and work with arrays and slices in go.

## Additional Resources

- [Golang.org Packages](https://golang.org/pkg)
- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
