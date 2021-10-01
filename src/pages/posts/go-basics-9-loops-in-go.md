---
title: "Go Basics - 9. Loops in Go"
date: "2020-02-09"
slug: "go-basics-9-loops-in-go"
description: "In this article, we are going to explore how loops work in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how loops work in the Go programming language.

## For loop

Looping in Go is rather straightforward as there is only one kind of loop in Go, the `for` loop.

```go
package main

import (
	"fmt"
)

func main() {

	for i := 0; i < 7; i++ {
		fmt.Println(i)
	}
}

/*
  The result of the code above is:
  0
  1
  2
  3
  4
  5
  6
*/
```

You can also initialize more than one variable within your `for` loop.

```go
package main

import (
	"fmt"
)

func main() {

	for i, j := 0, 0; i < 7; i, j = i+1, j+1 {
		fmt.Println(i, j)
	}
}

/*
  The result of the code above is:
  0 0
  1 1
  2 2
  3 3
  4 4
  5 5
  6 6
*/
```

Go also provides some nice 'syntactic sugar' to write our `for` loops to make them a little cleaner and easier to read.

```go
package main

import (
	"fmt"
)

func main() {
	i := 0
	for i < 7 {
		fmt.Println(i)
		i++
	}
}

/*
  The result of the code above is:
  0
  1
  2
  3
  4
  5
  6
*/
```

It is also important to note that in the above example we are initializing the variable `i` above the `for` loop so we can get access to it later on.

```go
package main

import (
	"fmt"
)

func main() {
	i := 0
	for i < 7 {
		i++
	}
	fmt.Println(i)
}

/*
  The result of the code above is: 7
*/
```

In we initialize our variable, in this case `i`, within the `for` loop, then `i` is `scoped` to the loop and is not accessible outside of it.

```go
package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 7; i++ {

	}

	fmt.Println(i)
}

/*
  The result of the code above is:
  undefined: i
*/
```

## Infinite Loops

Other programming languages have additional loops like `while` or `do` loops. These loops continue to loop for an indeterminate amount of time until some logic within the loop tells it to stop. We can achieve this same behavior using the `break` keyword.

```go
package main

import (
	"fmt"
)

func main() {
	i := 0
	for {
		i++

		if i == 7 {
			break
		}
	}
	fmt.Println(i)
}

/*
  The result of the code above is: 7
*/
```

_**If we forget to put in the `break` keyword this loop becomes an 'infinite loop' and causes our program to run out of memory and crash.**_

Go also has a `continue` keyword that allows us to have more control of when the code within our `for` loop executes.

```go
package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 7; i++ {

		// if the number is even, continue the loop
		if i%2 == 0 {
			continue
		}

		// if the number is odd, print the number
		fmt.Println(i)
	}
}

/*
  The result of the code above is:
  1
  3
  5
*/
```

## Looping through collections

When looping through collections, we use a 'modified' `for` loop and introduce a new keyword called `range`.

```go
package main

import (
	"fmt"
)

func main() {
	s := []int{1, 2, 3, 4, 5, 6, 7}

	for k, v := range s {
		fmt.Println(k, v)
	}
}

/*
  The result of the code above is:
  0 1
  1 2
  2 3
  3 4
  4 5
  5 6
  6 7
*/
```

If you are not concerned about the `key` of the item in the collection, you can use `_` to ignore it.

```go
package main

import (
	"fmt"
)

func main() {
	s := []int{1, 2, 3, 4, 5, 6, 7}

	for _, v := range s {
		fmt.Println(v)
	}
}

/*
  The result of the code above is:
  1
  2
  3
  4
  5
  6
  7
*/
```

This kind of loop can be used with `slices`, `arrays`, `maps`, and even `strings`.

```go
package main

import (
	"fmt"
)

func main() {
	s := "Hello, World!"

	for k, v := range s {
		fmt.Println(k, v)
	}
}

/*
  The result of the code above is:
  0 72
  1 101
  2 108
  3 108
  4 111
  5 44
  6 32
  7 87
  8 111
  9 114
  10 108
  11 100
  12 33
*/
```

> Characters within a string are Unicode numbers in Go

You can find a list of all of the Unicode numbers [here](https://www.ascii-code.com/)

## Wrap Up

In this article, we learned how to create and work with loops in Go.

## Additional Resources

- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
