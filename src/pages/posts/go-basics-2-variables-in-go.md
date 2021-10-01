---
title: "Go Basics - 2. Variables in Go"
date: "2020-02-02"
slug: "go-basics-2-variables-in-go"
description: "In this article, I am going to be covering how variables work in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, I am going to be covering how variables work in Golang. Here are some of the topics that are discussed.

- Variable declaration
- Variable shadowing
- Variable Scope
- Variable Type conversion

## Variable declaration

There are 3 different ways you can declare variables in Go.

### Variable declaration - Method 1

```go
package main

import (
	"fmt"
)

func main() {
	var foo string
	foo = "Hello, World!"

	fmt.Println(foo)
}

/*
  The result of the code above is: Hello, World!
*/
```

### Variable declaration - Method 2

```go
package main

import (
	"fmt"
)

func main() {
	var foo string = "Hello, World!"

	fmt.Println(foo)
}

/*
  The result of the code above is: Hello, World!
*/
```

### Variable declaration - Method 3 (The most common and widely used)

```go
package main

import (
	"fmt"
)

func main() {
	foo := "Hello, World!"

	fmt.Println(foo)
}

/*
  The result of the code above is: Hello, World!
*/
```

Let's look at some common reasons why you might use one method vs another.

```go
// Method #1
var foo string
```

This method is useful when you want to initialize a variable and then set it sometime later on in your code. Say for instance after looping through something.

```go
// Method #2
var foo float32 = 14
```

This method is useful when you want to be very specific about the type that the variable is. Sometimes the Go compiler will not correctly infer the type you want. Using this method ensures the Go compiler knows the exact type you want.

```go
// Method #3
foo := 14
```

This is the most common method of declaring variables. If you are comfortable with the types that the Go compiler infers, use this method.

## Package Level Variables

In the previous examples, all of our variables are declared inside of the main function, like so:

```go
package main

func main() {
	foo := "Hello, World!"

}
```

However, we can also declare variables at the `package` level, a.k.a. outside of the `func main()` or any function for that matter, like so:

```go
package main

import (
	"fmt"
)

var foo string = "Hello, World!"

func main() {
	fmt.Println(foo)

}

/*
  The result of the code above is: Hello, World!
*/
```

_**Note: We cannot use the `:=` syntax to declare variables outside of functions!**_

```go
package main

import (
	"fmt"
)

foo := "Hello, World!"

func main() {
	fmt.Println(foo)

}

/*
  The result of the code above is:
  syntax error: non-declaration statement outside function body
*/
```

## Declaring multiple variables at the same time

You can also declare multiple variables, at the package level, at the same time, like so:

```go
package main

import (
	"fmt"
)

var (
  name string = "Robert"
  age int = 34
  favoriteFood string = "Sushi"
)

func main() {
	fmt.Printf("My name is %v, I am %v, and my favorite food is %v", name, age, favoriteFood)
}

/*
  The result of the code above is:
  My name is Robert, I am 34, and my favorite food is Sushi
*/
```

## Variable shadowing

Variable shadowing has to do with `scope`. Let's take a look at an example:

```go
package main

import (
	"fmt"
)

var name string = "Robert"

func main() {
  var name string = "John"

	fmt.Printf(name)
}

/*
  The result of the code above is: John
*/
```

Go uses the variable that is closest in `scope`, which in this case is the string `John`. This works, because one variable is declared at the `package` level, while the other is declared inside of a `function`, a.k.a. `shadowing`.

You **cannot** however, do this:

```go
package main

import (
	"fmt"
)

func main() {
  var name string = "John"
  name := "Robert"

	fmt.Printf(name)
}

/*
  The result of the code above is:
  no new variables on left side of :=
*/
```

This does not work because both of these variables are within the same `scope`.

## Unused variables

Go has some great features that help to keep your code clean. If you declare a variable, you must use it. Otherwise, the compiler will throw an error, like so:

```go
package main

import (
	"fmt"
)

func main() {
  age := 50
  name := "Robert"

	fmt.Printf(name)
}

/*
  The result of the code above is:
  age declared and not used
*/
```

## Variable Scope

```go
package main

var name string = "Robert"

func main() {

}
```

Variables that being with a lowercase letter, like the `name` variable above, are scoped to the `package`, ie: it can only be used inside of this `package`.

However, if I use an upper case letter, like so:

```go
package main

var Name string = "Robert"

func main() {

}
```

The Go compiler will `export` or `expose` this function outside of this package for use inside of other packages.

If a variable is declared inside of a function, like so:

```go
package main

func main() {
  var name string = "Robert"
}
```

Then the variable is `block` scoped and can only be accessed inside of the `main()` function.

## Variable Type conversion

Take a look at this exmaple:

```go
package main

import("fmt")

func main() {
  age := 14
  fmt.Printf("%v, %T\n", age, age)

  var ageFloat float32 = float32(age)
  fmt.Printf("%v, %T", ageFloat, ageFloat)
}

/*
  The result of the code above is:
  14, int
  14, float32
*/
```

_**`%v` stands for value and `%T` stands for type**_

Using the `float32()` function, I can easily change the type of `int` to a `float32`.

## Converting numbers to strings

A `string` in Go is a `string` of `bytes`. So if we wanted to convert an `int` to a `string`, we would need to use an additional package, like so:

```go
package main

import(
  "fmt"
  "strconv"
)

func main() {
  age := 14
  fmt.Printf("%v, %T\n", age, age)

  var ageString string = strconv.Itoa(age)
  fmt.Printf("%v, %T", ageString, ageString)
}

/*
  The result of the code above is:
  14, int
  14, string
*/
```

Otherwise, you get an unexpected result, like this:

```go
package main

import (
	"fmt"
)

func main() {
	age := 47
	fmt.Printf("%v, %T\n", age, age)

	var ageString string = string(age)
	fmt.Printf("%v, %T", ageString, ageString)
}


/*
  The result of the code above is:
  14, int
, string
*/
```

The reason is that since a `string` in Go is a `string` of `bytes` it is looking for the ascii character represented by the number 14, which in this case is the character `/`.

## Wrap Up

In this article, we discussed the following topics when it comes to variables:

- Variable declaration
- Variable shadowing
- Variable Scope
- Variable Type conversion

## Additional Resources

- [Golang.org](https://golang.org/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
