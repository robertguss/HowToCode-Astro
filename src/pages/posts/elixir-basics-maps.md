---
title: "Elixir Basics - 5. Maps"
date: "2021-10-21"
slug: "elixir-basics-maps"
description: "In this article, we are going to learn how maps work in Elixir."
hero: "/images/elixir-basics/cover-purple.png"
tags: ["elixir-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

Maps in Elixir are the primary data structure for key/value pairs. Unlike a keyword list, they allow keys of any time and are un-ordered. Maps can be created like so:

```elixir
iex(3)> map = %{"Hello" => :world, :foo => 3.14}
%{:foo => 3.14, "Hello" => :world}
```

## Accessing Values

The values within a map can be accessed like so:

```elixir
iex(3)> map = %{"Hello" => :world, :foo => 3.14}
%{:foo => 3.14, "Hello" => :world}
iex(4)> map["Hello"]
:world
iex(5)> map[:foo]
3.14
```

## Variables as Keys

Since Elixir 1.2, variables can also be used as keys in maps.

```elixir
iex(7)> key = "Hello"
"Hello"
iex(8)> %{key => :world}
%{"Hello" => :world}
```

## Atoms as Keys

If the keys in a map are atoms, Elixir allows for a special syntax.

```elixir
iex(10)> %{hello: "World", foo: "bar"}
%{foo: "bar", hello: "World"}
```

You can also access their values using the dot `.` syntax.

```elixir
iex(11)> map = %{hello: "World", foo: "bar"}
%{foo: "bar", hello: "World"}
iex(12)> map.foo
"bar"
iex(13)> map.hello
"World"
```

## Updating Maps

If you want to update the value of a key, you can use the following syntax.

```elixir
iex(21)> map = %{hello: "World", foo: "bar"}
%{foo: "bar", hello: "World"}
iex(22)> %{map | hello: 3.14}
%{foo: "bar", hello: 3.14}
```

Remember, this will create a new map as data structures in Elixir are immutable.

```elixir
iex(21)> map = %{hello: "World", foo: "bar"}
%{foo: "bar", hello: "World"}
iex(22)> %{map | hello: 3.14}
%{foo: "bar", hello: 3.14}
iex(23)> map
%{foo: "bar", hello: "World"} # the original map has not changed
```

## Adding new keys

You can add a new key/value pair to an existing map by using the `Map.put/3` function.

```elixir
iex(25)> map = %{hello: "World", foo: "bar"}
%{foo: "bar", hello: "World"}
iex(26)> Map.put(map, :pi, 3.14)
%{foo: "bar", hello: "World", pi: 3.14}
```

## Sources

- [Elixir Docs - Maps](https://elixir-lang.org/getting-started/keywords-and-maps.html#maps)
- [Elixir School - Maps](https://elixirschool.com/en/lessons/basics/collections/#maps)
- [Programming Elixir](https://pragprog.com/titles/elixir16/programming-elixir-1-6/)
