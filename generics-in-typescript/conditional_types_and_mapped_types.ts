// Conditional types in TypeScript generics are a powerful feature that allow you to create type definitions that depend on the characteristics of other types. They provide a way to define complex relationships between types based on conditionals and logical operations.

// Conditional types are often used in scenarios where you want to infer or transform types based on some condition. They are commonly seen in utility libraries and frameworks to handle different cases for type inference, type mapping, and transformation.


type ConditionalType<T> = T extends number ? "Number" : "Not a Number";

type Result1 = ConditionalType<42>; // "Number"
type Result2 = ConditionalType<"hello">; // "Not a Number"




type TransformObject<T> = {
     [K in keyof T]: T[K] extends number ? string : T[K];
};

type Original = { a: number; b: string; c: boolean };
type Transformed = TransformObject<Original>;
// Transformed is { a: string; b: string; c: boolean }



type ValueOrArray<T> = T extends any[] ? T[number] : T;

type Item = ValueOrArray<number>; // number
type ArrayItem = ValueOrArray<number[]>; // number


// Mapped types in TypeScript generics are a feature that allows you to create new types by transforming the properties of an existing type.They are particularly useful for generating new types from an existing type with modifications applied to its properties.

interface User {
     id: number;
     name: string;
     age: number;
}

type NullableProps<T> = {
     [P in keyof T]: T[P] | null;
};

type NullableUser = NullableProps<User>;
// NullableUser: { id: number | null; name: string | null; age: number | null; }

type PrefixedProps<T, Prefix extends string> = {
     [P in keyof T as `${Prefix}${string & P}`]: T[P];
};

type PrefixedUser = PrefixedProps<User, 'prefixed_'>;
// PrefixedUser: { prefixed_id: number; prefixed_name: string; prefixed_age: number; }
