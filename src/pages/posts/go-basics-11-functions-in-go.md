---
title: "Go Basics - 11. Functions in Go"
date: "2020-02-11"
slug: "go-basics-11-functions-in-go"
description: "In this article, we are going to explore how functions work in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how functions work in the Go programming language.

```go
package main

import (
	"fmt"
)

func greeting(msg string) {
	fmt.Println(msg)
}

func main() {
	greeting("Hello, World!")
}

/*
  The result of the code above is:
  Hello, World!
*/
```

In this example, we have a function called `greeting()` that takes a `msg` as a parameter, which is of type `string`. The function takes whatever `string` is passed into it and prints it out.

Let's break down the function syntax so we can see all the necessary parts when creating a function in Go.

1. All functions in Go begin with the `func` keyword.
2. After the `func` keyword comes the name of the function. Which is 'greeting' in the above example.
3. After the name of the function, a pair of `()` contains the parameters the functions accepts, if there are any.
4. After the `()` comes a pair of `{}` which contains the functions body, or the code the function executes.

> The `main()` function in Go is a special function as it is the entry point to every single Go application. It does not take any parameters and it cannot return anything.

---

## Parameters of the same type

In this example, I have modified the `greeting` function to accept two parameters that are both of type `string`.

```go
package main

import (
	"fmt"
)

func greeting(greeting string, name string) {
	fmt.Println(greeting, name)
}

func main() {
	greeting("Hello", "Bob")
}

/*
  The result of the code above is:
  Hello Bob
*/
```

However, Go provides some helpful 'syntactic sugar' when passing in multiple parameters of the same type, which allows us to do this instead:

```go
package main

import (
	"fmt"
)

func greeting(greeting, name string) {
	fmt.Println(greeting, name)
}

func main() {
	greeting("Hello", "Bob")
}

/*
  The result of the code above is:
  Hello Bob
*/
```

## Variadic functions

A variadic function is a function that can accept any arbitrary number of arguments.

```go
package main

import (
	"fmt"
)

func sum(nums ...int) {
	fmt.Print(nums, "\n")
	total := 0
	for _, num := range nums {
		total += num
	}
	fmt.Println("Total: ", total)
}

func main() {
	sum(1, 2)
	sum(1, 2, 3)
}

/*
  The result of the code above is:
  [1 2]
  Total:  3
  [1 2 3]
  Total:  6
*/
```

Under the hood, the Go compiler converts the 'variadic arguments' into a slice. If you are using 'variadic parameters' **you can only have one, and it has to be the last parameter**.

We can modify our example above to accept additional parameters as well as the 'variadic parameters.'

```go
package main

import (
	"fmt"
)

func sum(msg string, nums ...int) {
	fmt.Print(nums, "\n")
	total := 0
	for _, num := range nums {
		total += num
	}
	fmt.Println(msg, total)
}

func main() {
	sum("Total: ", 1, 2)
	sum("Total: ", 1, 2, 3)
}

/*
  The result of the code above is:
  [1 2]
  Total:  3
  [1 2 3]
  Total:  6
*/
```

## Return values

Functions in Go can also `return` data from a function. Since Go is a typed language, we also need to specify the type we expect the function to `return`. We specify the `return` type between the `()` and the `{}`. In this example we are expecting the `sum` function to `return` a type of `int`.

```go
package main

import (
	"fmt"
)

func sum(nums ...int) int {
	fmt.Print(nums, "\n")
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}

func main() {
	s := sum(1, 2, 4, 5)
	fmt.Println("Total: ", s)
}

/*
  The result of the code above is:
  [1 2 4 5]
  Total:  12
*/
```

## Returning pointers

Go is unique in that it allows you to return a pointer to a value, like so:

```go
package main

import (
	"fmt"
)

func sum(nums ...int) *int {
	fmt.Print(nums, "\n")
	total := 0
	for _, num := range nums {
		total += num
	}
	return &total
}

func main() {
	s := sum(1, 2, 4, 5)
	fmt.Println("Total: ", *s)
}

/*
  The result of the code above is:
  [1 2 4 5]
  Total:  12
*/
```

The result is the same as the previous example; however, in the previous example, we were returning a copy of `total`. In this example, we are returning a `pointer` to `total` and therefore are modifying the original value.

## Multiple return values

Functions in Go can also return more than one value at a time.

```go
package main

import (
	"fmt"
)

func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, fmt.Errorf("Cannot divide by zero")
	}

	return a / b, nil // return nil since there is no error at this point
}

func main() {
	d, err := divide(5, 0)

	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(d)
}

/*
  The result of the code above is:
  Cannot divide by zero
*/
```

Multiple return values are used often in Go, especially functions that return not only a value, but also an error if something went wrong.

## Methods

Functions that are attached to `types` are called `methods`. Typically, you will most often see `methods` that are attached to `structs`.

```go
package main

import (
	"fmt"
)

type greeter struct {
	greeting string
	name     string
}

func (g greeter) greet() {
	fmt.Println(g.greeting, g.name)
}

func main() {
	g := greeter{
		greeting: "Hello",
		name:     "John",
	}

	g.greet()
}

/*
  The result of the code above is:
  Hello John
*/
```

Let's break down the method syntax:

```go
func (g greeter) greet() {
	fmt.Println(g.greeting, g.name)
}
```

1. Like any other function, we begin with the `func` keyword
2. `(g greeter)` tells Go which type this method is attached to. This method will received the greeter `struct` and will
   set it to the variable `g`.
3. `greet()` - the name of the function.
4. `fmt.Println(g.greeting, g.name)` - since we are passing in the `greeter` struct, we have access to its properties,
   like `greeting` and `name`.

## Wrap Up

In this article, we learned how to create and work with functions in Go.

## Additional Resources

- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
