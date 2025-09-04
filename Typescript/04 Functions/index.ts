//! Functions <==============

//? Basics <------------

// What Return Value
function abc(): string {
  return "dkfd"; //-> Only return string
}

// Not return anything
function exm1(): void {
  console.log("Not REturn anything ");
}

//? Function types <------------

//* Basic <---
function exm2(name: string, city: string, cb: (val: string) => void) {
  cb("Lokendra"); //Hello Lokendra
}

// exm2("Lokendra", "Raipur", (val: string) => {
//   console.log("Hello", val);
// });

//* Optional (?) & Default Parameter (=) <---
function exm3(
  name: string,
  age: number,
  isMarried: boolean = false,
  gender?: string
): void {
  console.log(name, age, isMarried, gender);
}

// exm3("Lokendra", 20, true, "male"); //Lokendra 20 true male
// exm3("Deepak", 21); //Deepak 21 false undefined

//* Rest Parameter (...rest/spread) <---
//eg-1 --------- (Rest Operator)
function addNumber(...arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
// console.log(addNumber(1, 3, 5)); //9
// console.log(addNumber(5, 79, 69)); //153

//eg-2 --------- (Rest Operator)
function listName(seperator: string, ...names: string[]): string {
  return names.join(seperator);
}
// console.log(listName(",", "lokendra", "Rohit", "Mamba")); //lokendra,Rohit,Mamba

//eg-1 --------- (Spread Operator) => This makes copy of value

let a2 = [2, 35, 4, 3];
let b2 = [...a2];

b2.push(23);

// console.log(a2); //[ 2, 35, 4, 3 ]
// console.log(b2); //[ 2, 35, 4, 3, 23 ]

//* Function Overloading
//Syntax ----------------------

// Overload signatures (sirf declarations)
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Implementation
function add(a: any, b: any): any {
  return a + b;
}
console.log(add(2, 4)); //6
console.log(add("Lokendra", "Verma")); //LokendraVerma

// Exmaple --------------------------
function getInfo(id: number): string;
function getInfo(name: string): string;

function getInfo(val: any): string {
  if (typeof val === "number") {
    return `Employee ID is ${val}`;
  } else {
    return `Employee Name is ${val}`;
  }
}

console.log(getInfo(344)); //Employee ID is 344
console.log(getInfo("Lokendra")); //Employee Name is Lokendra
