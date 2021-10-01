---
title: "Go Basics - 7. Structs in Go"
date: "2020-02-07"
slug: "go-basics-7-structs-in-go"
description: "In this article, we are going to explore how to work with structs in the Go (Golang) programming language."
hero: "/images/hero/Golang-Basics.png"
tags: ["go-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, we are going to explore how to work with structs in the Go programming language.

## Structs

`Structs` are a data type in Go that allow you to create custom 'objects' to represent your data however you like. Since they are a [typed collection of fields](https://gobyexample.com/structs), they are incredibly flexible, because a `struct` can contain multiple different `types`. Whereas, a `slice` `array` or `map` must contain the same `type`.

You can think of `structs` as 'structured data.'

```go
package main

import (
	"fmt"
)

type Person struct {
	name          string
	age           int
	occupation    string
	favoriteFoods []string
}

func main() {
	robert := Person{
		name:       "Robert Guss",
		age:        34,
		occupation: "Developer",
		favoriteFoods: []string{
			"Sushi",
			"Steak",
			"Pasta",
		},
	}

	fmt.Println(robert)
}

/*
  The result of the code above is:
  {Robert Guss 34 Developer [Sushi Steak Pasta]}
*/
```

To access or get data out of our `struct` we use the `.` syntax.

```go
package main

import (
	"fmt"
)

type Person struct {
	name          string
	age           int
	occupation    string
	favoriteFoods []string
}

func main() {
	robert := Person{
		name:       "Robert Guss",
		age:        34,
		occupation: "Developer",
		favoriteFoods: []string{
			"Sushi",
			"Steak",
			"Pasta",
		},
	}

	fmt.Println(robert.occupation)
}

/*
  The result of the code above is:
  Developer
*/
```

When creating or instantiating our `structs` we can also use what is known as the 'positional syntax,' which saves us some keystrokes.

```go
package main

import (
	"fmt"
)

type Person struct {
	name          string
	age           int
	occupation    string
	favoriteFoods []string
}

func main() {
	robert := Person{
		"Robert Guss",
		34,
		"Developer",
		[]string{
			"Sushi",
			"Steak",
			"Pasta",
		},
	}

	fmt.Println(robert)
}

/*
  The result of the code above is:
  {Robert Guss 34 Developer [Sushi Steak Pasta]}
*/
```

Even though this syntax is possible, it is recommended **not** to use it, as it is not clear what those values are. In this trivial example, it is not a big deal, but within the context of a larger Go program, it can be a maintenance nightmare. If, at some point, our original `struct` changes or a new `type` is added, the positional syntax causes the compile to throw errors and break our program.

## Naming Conventions

Structs follow the same naming convention as variables in Go. Uppercase names are exported and lower case names will only be available within the package.

```go
package main

type Person struct {
	name          string
	age           int
	occupation    string
	favoriteFoods []string
}

func main() {
}
```

So in this example, the Person `struct` is exported, however, the fields are. So another package would see that there is a `struct` called Person, however, another package would not be able to access the fields of it. If you wanted to export the person `struct` and its fields, you would need to capitalize each field. Like so:

```go
package main

type Person struct {
	Name          string
	Age           int
	Occupation    string
	FavoriteFoods []string
}

func main() {

}
```

## Anonymous structs

Structs can also be declared as anonymous structs, but they are not common. You most often see `structs` with names like in the examples above, i.e, Person. Typically, anonymous `structs` are used when a `struct` is short
lived; meaning it is used very quickly and then thrown away.

Here is what an anonymous `struct` looks like.

```go
package main

import (
	"fmt"
)

func main() {
	robert := struct {
		name       string
		age        int
		occupation string
	}{name: "Robert", age: 34, occupation: "Developer"}

	fmt.Println(robert)
}

/*
  The result of the code above is:
  {Robert 34 Developer}
*/
```

_**Notice how the types are separated with a semi-colon `;` instead of a comma `,` when declaring an anonymous struct.**_

## Structs are passed by value

Structs are passed by `value`. Therefore, if you create a copy of one, and modify that copy, you won't alter the original; unlike [maps](/go-basics-6-maps-in-go) or [slices](go-basics-5-arrays-and-slices-in-go) which are passed by `reference`.

```go
package main

import (
	"fmt"
)

func main() {
	robert := struct {
		name       string
		age        int
		occupation string
	}{name: "Robert", age: 34, occupation: "Developer"}

	john := robert

	john.name = "John"
	john.age = 50
	john.occupation = "Lawyer"

	fmt.Println(robert)
	fmt.Println(john)
}


/*
  The result of the code above is:
  {Robert 34 Developer}
  {John 50 Lawyer}
*/
```

We can alter the original by using a `pointer` like so:

```go
package main

import (
	"fmt"
)

func main() {
	robert := struct {
		name       string
		age        int
		occupation string
	}{name: "Robert", age: 34, occupation: "Developer"}

	john := &robert

	john.name = "John"
	john.age = 50
	john.occupation = "Lawyer"

	fmt.Println(robert)
	fmt.Println(john)
}


/*
  The result of the code above is:
  {John 50 Lawyer}
  &{John 50 Lawyer}
*/
```

## Struct composition

Go does not have 'objects' like you would typically find in an OOP or Object Oriented Programming language. So there is no concept of `inheritance`. Instead, Go uses a method known as `composition`. Composition is where you `compose` structs together to create new `structs`. Combining `structs` in Go is also known as `embedding`.

```go
package main

import (
	"fmt"
)

type Fruit struct {
	Name           string
	Classification string
}

type Apple struct {
	Fruit  // 'embedding' the Fruit struct inside of the Apple struct
	color  string
	flavor string
	weight int
}

func main() {
	a := Apple{}
	a.Name = "Granny Smith"
	a.color = "Green"
	a.flavor = "Sour"
	a.weight = 1
	a.Classification = "Malus domestica"

	fmt.Println(a)
}

/*
  The result of the code above is:
  { {Granny Smith Malus domestica} Green Sour 1}
*/
```

It may look like the Apple `struct` is inheriting properties from the Fruit `struct`, however, that is not the case in Go. In a typical OOP language, we would say that an Apple **is a** Fruit. In Go, we say that the Apple **has a** Fruit. The Apple, in this case, is not a type of Fruit, it is still a type of Apple. The apple does not have any relationship to the Fruit other than the fact that it `embeds` it.

If we want to use the `literal` syntax when declaring our `embedded structs` the syntax is slightly different.

```go
package main

import (
	"fmt"
)

type Fruit struct {
	Name           string
	Classification string
}

type Apple struct {
	Fruit  // 'embedding' the Fruit struct inside of the Apple struct
	color  string
	flavor string
	weight int
}

func main() {
	a := Apple{
		Fruit:  Fruit{Name: "Granny Smith", Classification: "Malus domestica"},
		color:  "green",
		flavor: "sour",
		weight: 1,
	}

	fmt.Println(a)
}

/*
  The result of the code above is:
  { {Granny Smith Malus domestica} green sour 1}
*/
```

## Tags

Tags are a way to add additional data to your fields on a `struct`. Let's look at an example.

```go
package main

type Fruit struct {
	Name           string `required:"true" max:"100"` // tag
	Classification string
}

func main() {
}
```

Let's say that for this example, I want to make sure that the name of a Fruit is required, and it cannot exceed a maximum length of 100 characters. This is handy if a user is filling out a form in a web application to provide this information. The `tag` contains the validation info for the field.

`Tags` are basically meta data fields.

To get access to the `tag` information, we need to use the `reflect` package in Go.

```go
package main

import (
  "fmt"
  "reflect"
)

type Fruit struct {
	Name           string `required:"true" max:"100"` // tag
	Classification string
}

func main() {
  t := reflect.TypeOf(Fruit{})
  field, _ := t.FieldByName("Name")

	fmt.Println(field.Tag)
}

/*
  The result of the code above is:
  required:"true" max:"100"
*/
```

_\*\*In case you are wondering what the `_` underscore symbol means a.k.a the Blank Identifier, it essentially tells the Go compiler that we are expecting a value here, but we don't care about it, so throw it away.\*\*\_

You can read more about it here: [What is Blank Identifier(underscore) in Golang?](https://www.geeksforgeeks.org/what-is-blank-identifierunderscore-in-golang/)

## Wrap Up

In this article, we learned how to create and work with structs in go.

## Additional Resources

- [Golang.org Packages](https://golang.org/pkg)
- [Go by Example](https://gobyexample.com/)
- [Free Code Camp - Learn Go Programming for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU)
