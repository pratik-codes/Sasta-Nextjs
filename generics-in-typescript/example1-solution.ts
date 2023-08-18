// typesafe this function 
const returnTheValueSafely = <T>(value: T) => {
     return value
}

const var1 = returnTheValueSafely("10");
const var2 = returnTheValueSafely({});

const value2 = returnTheValueSafely(10);

// this should give an error
// value2.subStr(1);