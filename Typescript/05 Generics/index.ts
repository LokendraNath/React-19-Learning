//! Generics <---------------------

//Generics ka matlab hai reusable code likhna jo alag-alag data types ke saath kaam kare, aur phir bhi type safety maintain kare.

//? Functions Generics <-----------

function logger<T>(a: T) {
  return a;
}

console.log(logger<number>(2)); // ✅
console.log(logger<string>("verma"));
// console.log(logger<string>(3)); // ❌

//? Interface Generics <-----------

interface objProps<T> {
  name: string;
  age: number;
  key: T;
}

function exm2(obj: objProps<number>) {
  console.log(`Name: ${obj.name}, Age: ${obj.age}, Key: ${obj.key}`);
}

// exm2({ name: "Lokendra", age: 20, key: 34334 });
// 👉 Result => Name: Lokendra, Age: 20, Key: 34334

//? Classes Generics <-----------

class laptopMaker<T> {
  constructor(public key: T) {}
}
const dell = new laptopMaker<string>("sparkx");
const hp = new laptopMaker<number>(3434);
console.log(dell); // 👉 laptopMaker { key: 'sparkx' }
console.log(hp); //👉 laptopMaker { key: 'sparkx' }

//! Note:=> String Litral -------------------------

let x2: "hello"; // x sirf "hello" hi ho sakta hai
x2 = "hello"; // ✅
// x2 = "world"; // ❌ Error: Type '"world"' is not assignable to type '"hello"'

// Example 1=> (Real Life Use)
type ButtonVariant = "primary" | "secondary" | "danger";

function createButton(variant: ButtonVariant) {
  console.log(`Button created with ${variant} style`);
}

createButton("primary"); // ✅
createButton("secondary"); // ✅
// createButton("success");   // ❌ Error

// Example 2 => ( as )

function example2<T>(a: T, b: T): T {
  return "Lokendra Verma" as T;
}

example2<string>("Shri,", "Lokendra");

//! -----------------------------------------------
