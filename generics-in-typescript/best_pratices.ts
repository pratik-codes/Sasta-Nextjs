// Indicate Generics with T, U, V,
// Good: Descriptive generic name
type Container<T> = {
     value: T;
};

// Good: Using T and U to indicate two different types
function pair<T, U>(first: T, second: U): [T, U] {
     return [first, second];
}

// Good: Using T and U to indicate two different types
function concatArray<TArray1, UArray2>(first: TArray1, second: UArray2): [TArray1, UArray2] {
     return [first, second];
}

// prioritize singluar naming
// Good: Singular and plural naming
type Customer = { id: number; name: string };
type Customers = Customer[];

// Good: Singular naming for single instances
function getUserById(id: number): Customer {
     return { id: 1, name: "John" }
}

// Good: Plural naming for collections
function getUsers(): Customers {
     return [{ id: 1, name: "John" }];
}
