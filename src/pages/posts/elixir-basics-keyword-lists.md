---
title: "Elixir Basics - 4. Keyword Lists"
date: "2021-10-07"
slug: "elixir-basics-keyword-lists"
description: "In this article, we are going to learn how keyword lists work in Elixir."
hero: "/images/elixir-basics/cover-purple.png"
tags: ["elixir-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

Keyword lists are associative data structures. This means that they are able to associate a certain value with a key. In other languages these are called things like:

- associative arrays in PHP
- hashes in Ruby
- dictionaries in Python
- objects in JavaScript

Elixir has two main types of these associative data structures, keyword lists and maps. In this article we will discuss keyword lists.

Keyword lists are a special kind of list that contain tuples with two elements in them.

```elixir
iex(1)> keyword_list = [{:ok, 3.14}, {:true, "Hello"}]
[ok: 3.14, true: "Hello"]
```

```elixir
iex(3)> i(keyword_list)
Term
  [ok: 3.14, true: "Hello"]
Data type
  List
Description
  This is what is referred to as a "keyword list". A keyword list is a list
  of two-element tuples where the first element of each tuple is an atom.
Reference modules
  Keyword, List
Implemented protocols
  Collectable, Enumerable, IEx.Info, Inspect, List.Chars, String.Chars
```

## Shorthand Syntax

If you take a look at the output above you will see that Elixir has a special way of defining these lists by using the `[key: value]` syntax. In fact, we can use this short hand to create a keyword list and eliminate the `{}` brackets altogether.

```elixir
iex(4)> keyword_list = [ok: 3.14, true: "Hello"]
[ok: 3.14, true: "Hello"]
```

```elixir
iex(5)> i(keyword_list)
Term
  [ok: 3.14, true: "Hello"]
Data type
  List
Description
  This is what is referred to as a "keyword list". A keyword list is a list
  of two-element tuples where the first element of each tuple is an atom.
Reference modules
  Keyword, List
Implemented protocols
  Collectable, Enumerable, IEx.Info, Inspect, List.Chars, String.Chars
```

## Keyword List Characteristics

Keyword lists are unique in that they have three defining characteristics:

1. Keys must be atoms.
2. Keys are ordered, as specified by the developer.
3. Keys do not have to be unique.

```elixir
iex(6)> keyword_list = [{"ok", 3.14}, {"true", "Hello"}]
[{"ok", 3.14}, {"true", "Hello"}]
```

```elixir
iex(7)> i keyword_list
Term
  [{"ok", 3.14}, {"true", "Hello"}]
Data type
  List
Reference modules
  List
Implemented protocols
  Collectable, Enumerable, IEx.Info, Inspect, List.Chars, String.Chars
```

Since the first element of each tuple is a string and not an atom, Elixir sees this as a list and not a keyword list.

## Getting Values from Keyword Lists

In order to get the values from a keyword list, we can use the following functions.

### Keyword.get()

```elixir
iex(9)> keyword_list = [ok: 3.14, true: "Hello"]
[ok: 3.14, true: "Hello"]
iex(10)> Keyword.get(keyword_list, :ok)
3.14
```

### Keyword.fetch()

```elixir
iex(11)> keyword_list = [ok: 3.14, true: "Hello"]
[ok: 3.14, true: "Hello"]
iex(12)> Keyword.fetch(keyword_list, :ok)
{:ok, 3.14}
```

## Use Cases

Keyword lists are typically used to pass options into functions. You will typically see them passed as the last argument to a function to modify or change the behavior of that function.

```elixir
iex(15)> list = [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
iex(16)> IO.inspect(list, [{:label, "My Label"}])
My Label: [1, 2, 3, 4, 5]
```

```elixir
iex(15)> list = [1, 2, 3, 4, 5]
iex(17)> IO.inspect(list, [{:label, "My Label"}, {:width, 0}])
My Label: [1,
 2,
 3,
 4,
 5]
[1, 2, 3, 4, 5]
```

Remember, we can also use the shorthand syntax like so:

```elixir
iex(18)> list = [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
iex(19)> IO.inspect(list, [label: "My Label", width: 0])
My Label: [1,
 2,
 3,
 4,
 5]
[1, 2, 3, 4, 5]
```

## Sources

- [Elixir Docs - Tuples](https://elixir-lang.org/getting-started/basic-types.html#tuples)
- [Elixir School - Tuples](https://elixirschool.com/en/lessons/basics/collections/#tuples)
- [Elixir & Phoenix for Beginners](https://www.knowthen.com/elixir-and-phoenix-for-beginners)
- [Programming Elixir](https://pragprog.com/titles/elixir16/programming-elixir-1-6/)
