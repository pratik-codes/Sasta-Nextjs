## Talk script

#### Intro: Hey everyone, Intro....

#### Start Talking about generics

     1. Many dont understand it
     2. More generic and powerfull abstraction.
     3. Used alot in open source projects

#### Explain about the structure of the talk

     1. Why generics
     2. What is generics
     3. How to use generics
     4. Advance topics
     5. Use cases
     6. Conclusion

#### Why generics

     1. Discuss the challenges of writing type-safe code with varying data types
          - Challenge: Writing functions or components that can operate on different types often involves duplicating code or using the any type, which sacrifices type safety and reusability.
          - Challenge: When dealing with heterogeneous collections or data, such as arrays or lists that can contain different types, it becomes difficult to maintain type information and ensure type safety.
     2. Helps in writing reusable code
          - Reduced Code Duplication: Without generics, you might need to create separate functions or classes for different types, leading to code duplication. Generics enable you to define a single function or class that can handle a wide range of types, reducing the need for redundant code.
          - Single Implementation for Multiple Types: Instead of writing similar functions for each type, you can use generics to create a single implementation that adapts to different types. This simplifies maintenance and ensures consistency across your codebase.
     3. How alot of open source projects use it.

#### What is generics

     - Exaplin generics
          - Generics in programming languages like TypeScript allow you to define placeholders for types that will be specified later when the code is used. These type placeholders, known as type parameters, act as variables for types and can be used throughout the code to ensure consistency and type safety.
     - Show syntax
     - take the simple examples

#### Constraints and extends in generics and more examples

     - Explain Constraints and Bounds
          - Constraints on type parameters in TypeScript allow you to specify limitations or requirements for the types that can be used with a generic function or class
          - When you introduce constraints, you define a relationship between the type parameter and other types. This relationship can be based on inheritance, implementation of specific interfaces, or any other condition you need to enforce
     - Show example and real life example for the same

#### Advance generics

     -
