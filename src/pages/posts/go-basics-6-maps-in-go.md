---
title: "Go Basics - 6. Maps in Go"
date: "2020-02-06"
slug: "go-basics-6-maps-in-go"
description: "In this article, we are going to explore how to work with maps in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how to work with maps in the Go programming language.

## Maps

Maps in go are `key` `value` data types.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	fmt.Println(ages)
}

/*
  The result of the code above is:
  map[Bob:76 Emily:21 Joe:33 John:22 Mary:45]
*/
```

When declaring a map, the `key` and `value` data types must be consistent. So in the above example, all of the `keys` must be of type `string`, and all of the `values` must be of type `int`.

You can create maps with the `make()` function as well.

```go
package main

import (
	"fmt"
)

func main() {
	ages := make(map[string]int)

	ages = map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	fmt.Println(ages)
}

/*
  The result of the code above is:
  map[Bob:76 Emily:21 Joe:33 John:22 Mary:45]
*/
```

This syntax is helpful if you want to create a map but populate the data for it at a later time and not immediately upon creation like we did in the previous example.

We can get data out of a map, using the `[]` syntax, like so:

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	fmt.Println(ages["Joe"])
}

/*
  The result of the code above is:
  33
*/
```

We can also add data to our maps like so:

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	ages["Elliot"] = 55

	fmt.Println(ages["Elliot"])
}

/*
  The result of the code above is:
  55
*/
```

Something important to keep in mind is that when printing out a map, the order of the elements inside of the map is not guaranteed to be the same way in which they were added or declared, unlike `slices` or `arrays`.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	fmt.Println(ages)

	ages["Elliot"] = 55

	fmt.Println(ages)
}

/*
  The result of the code above is:
  map[Bob:76 Emily:21 Joe:33 John:22 Mary:45]
  map[Bob:76 Elliot:55 Emily:21 Joe:33 John:22 Mary:45]
*/
```

We can remove items from a `map` using the `delete()` function.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	delete(ages, "Mary")

	fmt.Println(ages)
}

/*
  The result of the code above is:
  map[Bob:76 Emily:21 Joe:33 John:22]
*/
```

Something to keep in mind when deleting items from a map is if you
try to access a deleted item again; the compiler gives you a value of `0`.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	delete(ages, "Mary")

	fmt.Println(ages["Mary"])
}

/*
  The result of the code above is:
  0
*/
```

Or let's say you make a typo when trying to access a key.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	delete(ages, "Mary")

	fmt.Println(ages["May"])
}

/*
  The result of the code above is:
  0
*/
```

This can potentially be very problematic and confusing, so we can also use the `ok` variable to make sure the item is not in the map.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	delete(ages, "Mary")

	mary, ok := ages["Mary"]

	fmt.Println(mary, ok)
}

/*
  The result of the code above is:
  0 false
*/
```

The `ok` variable is false if the item does not exist in the map. True, if found.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	john, ok := ages["John"]

	fmt.Println(john, ok)
}

/*
  The result of the code above is:
  22 true
*/
```

_**`ok` is not a special keyword or variable in Go, it is simply a convention that Go programmers follow.**_

If we need to get the length of our `map` we can use the `len()` function just like we do for `arrays` & `slices`.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	fmt.Println(len(ages))
}

/*
  The result of the code above is:
  5
*/
```

Maps are passed by reference, so if you make a copy of a map and change that copies data, you modify the original map.

```go
package main

import (
	"fmt"
)

func main() {
	ages := map[string]int{
		"John":  22,
		"Mary":  45,
		"Joe":   33,
		"Bob":   76,
		"Emily": 21,
	}

	ages2 := ages

	delete(ages2, "Bob")

	fmt.Println(ages2)
	fmt.Println(ages)
}

/*
  The result of the code above is:
  map[Emily:21 Joe:33 John:22 Mary:45]
  map[Emily:21 Joe:33 John:22 Mary:45]
*/
```

## Wrap Up

In this article, we learned about how to create and work with maps in go.

## Additional Resources

- [Golang.org Packages](https://golang.org/pkg)
- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
