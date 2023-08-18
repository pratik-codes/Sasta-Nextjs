# Intro: Generics in Typescript

So alot of people might have heard about generics, but very few understand them and knows how to use with typescript and there usecases.

In this blog we will learn about what are generics and different use cases where we can leavrage it to have better control over our code and avoid bugs.

### Why generics?

---

<br />

Features like generics helps us to write more generic code which can be used in different scenarios and can be reused. Hence making reusable and robuts code.

### What is generics?

---

<br />

Imagine you have function that takes something and returns a something. A standard type which we usually infer or annotate this parameter values could string, boolean or a interface which is a static type, correct?

But suppose you are building a function that does something but you dont know what type of data it will take and what type of data it will return. <b>In this we would use a function that tells us the type of the data and return it this function which help us understand type of the data is generics.</b>
