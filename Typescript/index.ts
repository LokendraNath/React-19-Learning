//! Annotation Example

//? String
let myName: string = "Lokendra Nath";

//? Number
let myFavNum: number = 72;

//? Boolean
let HaveGf: boolean = false;

/* 
console.log("Name:", myName);
console.log("Favorite Number:", myFavNum);
console.log("Have girlfriend:", have);
*/

//! Type Inference

let favTeacher = "Sharma Mam";
let favNumber = 12;

// console.log(favTeacher);

//! Function Parameter Annotation

// Regular Function
function plusFive(val: number) {
  return val + 5;
}

// Arrow Function
const double = (a: number, b: number) => a * b;

// console.log(plusFive(4));
// console.log(double(4, 5));
