---
title: "Elixir Basics - 3. Tuples"
date: "2021-10-06"
slug: "elixir-basics-tuples"
description: "In this article, we are going to learn how tuples work in Elixir."
hero: "/images/elixir-basics/cover-purple.png"
tags: ["elixir-basics"]
layout: "../../layouts/BlogPostLayout.astro"
---

Tuples in Elixir, like lists, can hold any value. They are created with curly brackets `{}`.

```elixir
iex(1)> {"Hello", :true, 5.43}
{"Hello", true, 5.43}
```

## Tuples vs Lists

However, unlike lists, the elements within a tuple are stored contiguously in memory. This means that you can access an element within a tuple via its index.

```elixir
iex(2)> tuple = {"Hello", :true, 5.43}
{"Hello", true, 5.43}
iex(3)> elem(tuple, 2)
5.43
```

This also means that getting the size of a tuple is an _**inexpensive**_ operation. Whereas with lists, it is an _**expensive**_ operation.

```elixir
iex(4)> tuple = {"Hello", :true, 5.43}
{"Hello", true, 5.43}
iex(5)> tuple_size(tuple)
3
```

Since lists are _**not**_ stored continugously in memory, getting the size of a list is an expensive operation as the entire list chain has to be traversed, one element at a time, until the last element is found.

## Adding Elements

Elements can be added to a tuple at a particular index by using the `put_elem/3` function.

```elixir
iex(6)> tuple = {"Hello", :true, 5.43}
{"Hello", true, 5.43}
iex(7)> put_elem(tuple, 2, 14)
{"Hello", true, 14}
```

Remember, that what is returned is a new tuple, the original tuple has not been modified because Elixir has immutable data structures.

```elixir
iex(6)> tuple = {"Hello", :true, 5.43}
{"Hello", true, 5.43}
iex(7)> put_elem(tuple, 2, 14)
{"Hello", true, 14}
iex(8)> tuple
{"Hello", true, 5.43}
```

## Common Use Cases

Tuples are often used in Elixir to return extra information from functions. For example, when using the `File.read/1` function a tuple is returned where the first element is an atom letting you know if the operation was successful or not.

- If it is, the first element will be the atom `:ok` and then the contents of the file.
- If not, the first element will be the atom `:error` and then the reason for the error.

```elixir
iex(10)> h File.read/1

Returns {:ok, binary}, where binary is a binary data object that contains the
contents of path, or {:error, reason} if an error occurs.

Typical error reasons:

  • :enoent  - the file does not exist
  • :eacces  - missing permission for reading the file, or for searching
    one of the parent directories
  • :eisdir  - the named file is a directory
  • :enotdir - a component of the file name is not a directory; on some
    platforms, :enoent is returned instead
  • :enomem  - there is not enough memory for the contents of the file
```

## Length vs Size

In Elixir when counting elements within a data structure, the language differentiates between `length` and `size`. A function is named:

- `size` when the value is pre-calculated, like with Tuples, or
- `length` when the operation is linear like with Lists.

This means that getting the `size` of a data structure is an _**inexpensive**_ operation while getting the `length` of a data structure is an _**expensive**_ operation.

### Size

For example, getting the `size` of a Tuple is an _**inexpensive**_ operation.

```elixir
iex(4)> tuple = {"Hello", :true, 5.43}
{"Hello", true, 5.43}
iex(5)> tuple_size(tuple)
3
```

Remember, the reason this is _**inexpensive**_ is because the size of the Tuple is already known since the elements are stored contiguiously in memory.

### Length

Getting the `length` of a List an _**expensive**_ operation.

```elixir
iex(12)> list = ["Hello", :true, 5.43]
["Hello", true, 5.43]
iex(13)> length(list)
3
```

Remember, the reason this is _**expensive**_ is because the elements are _**not**_ stored contiguiously in memory. The more elements there are in the list, the more _**expensive**_ this operation becomes.

## Sources

- [Elixir Docs - Tuples](https://elixir-lang.org/getting-started/basic-types.html#tuples)
- [Elixir School - Tuples](https://elixirschool.com/en/lessons/basics/collections/#tuples)
- [Elixir & Phoenix for Beginners](https://www.knowthen.com/elixir-and-phoenix-for-beginners)
- [Programming Elixir](https://pragprog.com/titles/elixir16/programming-elixir-1-6/)
