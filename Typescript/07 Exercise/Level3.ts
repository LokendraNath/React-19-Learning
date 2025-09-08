//! Generics

function getIdentity<T>(value: T): T {
  return value;
}
console.log(getIdentity<string>("Lokendra Nath"));

//! Type Guards:
const processInput = (input: string | number) => {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input * input;
  }
};

// console.log(processInput("Lokendra"));

//! Mapped Types:
//? Mapped types का point यह है कि तुम existing type based on another type create करो, ताकि अगर original type change हो, तो mapped type automatically update हो।
interface Product {
  id: number;
  name: string;
  price: number;
}

type ReadOnlyProduct = Readonly<Product>;
