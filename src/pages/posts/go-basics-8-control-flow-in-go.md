---
title: "Go Basics - 8. Control flow in Go"
date: "2020-02-08"
slug: "go-basics-8-control-flow-in-go"
description: "In this article, we are going to explore how if and switch statements work in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how control flow, a.k.a. if and switch statements, work in the Go programming language.

## If statements

In Go, if statements behave just like they do in most programming languages.

```go
package main

import (
	"fmt"
)

func main() {

	if true {
		fmt.Println(robert)
	}
}

/*
  The result of the code above is: Hi
*/
```

or

```go
package main

import (
	"fmt"
)

func main() {

	if false {
		fmt.Println(robert)
	}
}

/*
  nothing happens when this is program runs since the fmt.Println() is never   executed
*/
```

## Comparison operators

Go has the following comparison operators.

| Operator | Definition            |
| -------- | --------------------- |
| ==       | equal                 |
| !=       | not equal             |
| <        | less than             |
| <=       | less than or equal    |
| >        | greater than          |
| >=       | greater than or equal |

More info: [Golang.org Comparison Operators](https://golang.org/ref/spec#Comparison_operators)

## Logical operators

Go has the following logical operators.

**&&** - is known as the **AND** operator:

```go
p && q

// "if p AND q are both True"
```

**||** - is known as the **OR** operator:

```go
p || q

// "if either p OR q is true"
```

**!** - is known as the **NOT** operator:

```go
!p

// "if NOT p"
```

More info: [Golang.org Logical Operators](https://golang.org/ref/spec#Logical_operators)

## Switch statements

Switch statements in Go behave like most other programming languages. If the `case` matches, then the code within it is executed. If nothing matches, then the `default` code is executed.

```go
package main

import (
	"fmt"
)

func main() {

	switch 4 {
	case 1:
		fmt.Println("one")
	case 4:
		fmt.Println("four")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is: four
*/
```

```go
package main

import (
	"fmt"
)

func main() {

	switch 7 {
	case 1:
		fmt.Println("one")
	case 4:
		fmt.Println("four")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is: default
*/
```

Go also allows you to check for multiple cases at the same time.

```go
package main

import (
	"fmt"
)

func main() {

	switch 2 {
	case 1, 2, 3:
		fmt.Println("one two or three")
	case 4, 5, 6:
		fmt.Println("four five or six")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is: one two or three
*/
```

Cases in Go must be unique, meaning you cannot test for the same value more than once.

```go
package main

import (
	"fmt"
)

func main() {

	switch 2 {
	case 1:
		fmt.Println("one")
	case 1:
		fmt.Println("one")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is: duplicate case 1 in switch
*/
```

You can also use what is known as `tagless` switch statements, meaning there is no value after the `switch` keyword.

```go
package main

import (
	"fmt"
)

func main() {

	i := 14

	switch {
	case i < 10:
		fmt.Println("less than 10")
	case i > 10:
		fmt.Println("greater than 10")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is: greater than 10
*/
```

Go allows you to 'fallthrough' the various cases by using the `fallthrough` keyword.

```go
package main

import (
	"fmt"
)

func main() {

	i := 4

	switch {
	case i < 10:
		fmt.Println("less than 10")
		fallthrough
	case i < 20:
		fmt.Println("less than 20")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is:
  less than 10
  less than 20
*/
```

It is important to remember that when using the `fallthrough` keyword, the following case after it is always executed, even if the case doesn't match, so be careful when using it.

```go
package main

import (
	"fmt"
)

func main() {

	i := 4

	switch {
	case i < 10:
		fmt.Println("less than 10")
		fallthrough
	case i > 20:
		fmt.Println("greater than 20")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is:
  less than 10
  greater than 20
*/
```

Switch statements can also check the `type` of an `interface`. This is known as a 'type switch.' **This only works when checking interfaces.**

```go
package main

import (
	"fmt"
)

func main() {

	var i interface{} = 4

	switch i.(type) {
	case int:
		fmt.Println("int")
	case float32:
		fmt.Println("float32")
	case string:
		fmt.Println("string")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is: int
*/
```

```go
package main

import (
	"fmt"
)

func main() {

	var i int = 4

	switch i.(type) {
	case int:
		fmt.Println("int")
	case float32:
		fmt.Println("float32")
	case string:
		fmt.Println("string")
	default:
		fmt.Println("default")
	}
}

/*
  The result of the code above is:
  cannot type switch on non-interface value i (type int)
*/
```

## Wrap Up

In this article, we learned how to create and work if statements, comparison operators, logical operators, and switch statements in Go.

## Additional Resources

- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
