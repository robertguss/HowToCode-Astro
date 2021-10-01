---
title: "Go Basics - 4. Constants in Go"
date: "2020-02-04"
slug: "go-basics-4-constants-in-go"
description: "In this article, we are going to explore how to work with constants in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how to work with constants in the Go programming language. We will discuss the
following topics:

- Naming convention
- Typed constants
- Untyped constants
- Enumerated constants

## Naming convention

In many languages, `constants` are typically named with Capital letters. However, remember that in Go, anything that begins with a Capital letter will be exported. So unless you want to export a constant, you should follow the same naming conventions with constants as you do with variables.

```go
package main

import (
	"fmt"
)

func main() {
  const helloConst string = "Hello!"
	fmt.Printf("%v, %T", helloConst, helloConst)
}

/*
  The result of the code above is:
  Hello!, string
*/
```

Constants cannot be altered or re-assigned, hence the name `constant`.

```go
package main

import (
	"fmt"
)

func main() {
  const helloConst string = "Hello!"
  helloConst = "Hi!"
	fmt.Printf("%v, %T", helloConst, helloConst)
}

/*
  The result of the code above is:
  cannot assign to helloConst
*/
```

Interestingly, `constants` in Go can be `shadowed` just like [variables](/go-basics-2-variables-in-go).

```go
package main

import (
	"fmt"
)

const helloConst string = "Hello!"

func main() {
  const helloConst = "Hi!"
	fmt.Printf("%v, %T", helloConst, helloConst)
}

/*
  The result of the code above is:
  Hi!, string
*/
```

```go
package main

import (
	"fmt"
)

const helloConst string = "Hello!"

func main() {
  // const helloConst = "Hi!"
	fmt.Printf("%v, %T", helloConst, helloConst)
}

/*
  The result of the code above is:
  Hello!, string
*/
```

## Untyped constants

In the previous examples, I have been using `typed` constants. Meaning that I am explicitly declaring the type of a constant.

```go
package main

import (
	"fmt"
)

func main() {
  const helloConst string = "Hi!"
	fmt.Printf("%v, %T", helloConst, helloConst)
}

/*
  The result of the code above is:
  Hi!, string
*/
```

However, we can let the Go compiler infer the constant type, similar to how we declare variables with the `:=` operator.

```go
package main

import (
	"fmt"
)

func main() {
  const helloConst = "Hi!"
	fmt.Printf("%v, %T", helloConst, helloConst)
}

/*
  The result of the code above is:
  Hi!, string
*/
```

## Enumerated constants

In this next example, we are going to use a special symbol called `iota` which is a counter which we can use when creating `enumerated constants`

```go
package main

import (
	"fmt"
)

const a = iota

func main() {
	fmt.Printf("%v, %T", a, a)
}

/*
  The result of the code above is:
  0, int
*/
```

We can also declare multiple `constants` just like `variables` like so:

```go
package main

import (
	"fmt"
)

const(
  a = iota
  b = iota
  c = iota
)

func main() {
	fmt.Printf("%v, %T\n", a, a)
	fmt.Printf("%v, %T\n", b, b)
	fmt.Printf("%v, %T\n", c, c)
}

/*
  The result of the code above is:
  0, int
  1, int
  2, int
*/
```

Another interesting thing we can do is allow the compiler to infer the other constants that follow the first constant declaration.

```go
package main

import (
	"fmt"
)

const(
  a = iota
  b
  c
)

func main() {
	fmt.Printf("%v, %T\n", a, a)
	fmt.Printf("%v, %T\n", b, b)
	fmt.Printf("%v, %T\n", c, c)
}

/*
  The result of the code above is:
  0, int
  1, int
  2, int
*/
```

`iota` is scoped to the constant block in which it is used.

```go
package main

import (
	"fmt"
)

const (
	a = iota
	b
	c
)

const (
	a2 = iota
	b2
	c2
)

func main() {
	fmt.Printf("%v, %T\n", a, a)
	fmt.Printf("%v, %T\n", b, b)
	fmt.Printf("%v, %T\n", c, c)

	fmt.Printf("%v, %T\n", a2, a2)
	fmt.Printf("%v, %T\n", b2, b2)
	fmt.Printf("%v, %T\n", c2, c2)
}

/*
  The result of the code above is:
  0, int
  1, int
  2, int
  0, int
  1, int
  2, int
*/
```

## Wrap Up

In this article, we learned about the following about constants in Go.

- Naming convention
- Typed constants
- Untyped constants
- Enumerated constants

## Additional Resources

- [Golang.org Packages](https://golang.org/pkg)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
