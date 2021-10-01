---
title: "Elixir Basics - 1. Basic Data Types"
date: "2021-09-22"
slug: "elixir-basics-basic-data-types"
description: "In this article, we are going to learn the basic data types in Elixir."
hero: "/images/elixir-basics/cover-purple.png"
tags: ["elixir-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

## Integers

Elixir supports a variety of different Integers.

### Decimal

```elixir
iex(1)> 14
14
```

```elixir
iex(19)> i(14)
Term
  14
Data type
  Integer
Reference modules
  Integer
Implemented protocols
  IEx.Info, Inspect, List.Chars, String.Chars
```

Underscores can also be used with Decimal numbers when writing large numbers, making them easier to read.

For example, one million can be written like so

```elixir
iex(5)> 1_000_000
1000000
```

### Hexadecimal

```elixir
iex(2)> 0xcafe
51966
```

### Octal

```elixir
iex(3)> 0o765
501
```

### Binary

```elixir
iex(4)> 0b1010
10
```

## Floats

A Float or Floating-point number is denoted by using a decimal point.

```elixir
iex(6)> 5.0
5.0
```

```elixir
Term
  5.0
Data type
  Float
Reference modules
  Float
Implemented protocols
  IEx.Info, Inspect, List.Chars, String.Chars
```

Floats also support exponents by using the letter `e` after the last number.

```elixir
iex(16)> 3.14e-2
0.0314
```

## Booleans

Elixir supports both `true` and `false` as booleans

```elixir
iex(17)> true
true
iex(18)> false
false
iex(19)>
```

```elixir
Term
  true
Data type
  Atom
Reference modules
  Atom
Implemented protocols
  IEx.Info, Inspect, List.Chars, String.Chars
```

If you are paying attention, you will notice that when you inspect `i(true)` Elixir says that its data type is of type `Atom`. This is because booleans in Elixir are also `atoms`

```elixir
iex(25)> is_atom(true)
true
iex(26)> is_atom(false)
true
```

## Atoms

An Atom is a constant whose name is its value.

```elixir
iex(27)> :foo
:foo
```

```elixir
iex(37)> i(:foo)
Term
  :foo
Data type
  Atom
Reference modules
  Atom
Implemented protocols
  IEx.Info, Inspect, List.Chars, String.Chars
```

```elixir
iex(33)> is_boolean(:true)
true
iex(34)> is_boolean(:false)
true
```

```elixir
iex(35)> :true === true
true
iex(36)> :false === false
true
```

## Strings

Strings are denoted with double quotes.

```elixir
iex(38)> "Hello, World"
"Hello, World"
```

```elixir
iex(39)> i("Hello, World")
Term
  "Hello, World"
Data type
  BitString
Byte size
  12
Description
  This is a string: a UTF-8 encoded binary. It's printed surrounded by
  "double quotes" because all UTF-8 encoded code points in it are printable.
Raw representation
  <<72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100>>
Reference modules
  String, :binary
Implemented protocols
  Collectable, IEx.Info, Inspect, List.Chars, String.Chars
```

Elixir also supports string interpolation, like so:

```elixir
iex(41)> string = "World"
"World"
iex(42)> "Hello, #{string}"
"Hello, World"
```

Strings can be printed using `IO.puts()` from the `IO` module.

```elixir
iex(43)> IO.puts("Hello, World")
Hello, World
:ok
```

## Sources

- [Elixir Docs - Basic Types](https://elixir-lang.org/getting-started/basic-types.html)
- [Elixir School - Basic Data Types](https://elixirschool.com/en/lessons/basics/basics/#basic-data-types)
- [Programming Elixir](https://pragprog.com/titles/elixir16/programming-elixir-1-6/)
