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

//! Default value

function defualtName(name: string = "Lokendra") {
  return `Hello ${name}`;
}
const res = defualtName();

// console.log(res);

//! Return Annotation (Regular) =============================================

// Regular Fuck
function double1(num: number): number {
  return num * 2;
}

// Arrow Func
const double2 = (num: number): number => num * 2;

// console.log(double1(2));

//! Void In Typescript (kuch return nahi karta)

function example(name: string): void {
  console.log(name);
  // Error => return 2
}
// example("Lokendra Nath");

//! Array Type ([] => Notation) (Single Dimensial)

let arr1: number[] = [2, 2, 3, 23];
const arr2: string[] = ["lokendra", "verma"];
// console.log(arr1);

arr1.push(65); // 'lokendra'  <- Error
// console.log(arr1);

//! Nested Array (Multi Dimensial)

const multiDim: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(multiDim);

//! Object

const employee: {
  name: string;
  haveWife: boolean;
  age: number;
} = {
  name: "Vijay Madhvan",
  haveWife: false,
  age: 32,
};
// console.log(
//   `${employee.name} ${
//     employee.haveWife ? "Have" : "Not Have"
//   } Wife at the age of ${employee.age}`
// );

//! Type Allias

type User = {
  name: string;
  age: number;
  readonly isSubscribed: boolean;
  readonly country?: string;
  haveIphone?: boolean;
};

const messageUser = (user: User) => {
  return `${user.name} Age is ${user.age} LogIn from ${
    user.country
  } and He is ${user.isSubscribed ? "Subscribed" : "Not Subscribe"} with ${
    user.haveIphone ? "iPhone" : "No Have iPhone"
  }`;
};

const res2 = messageUser({
  name: "Pushpendra",
  age: 22,
  isSubscribed: false,
  country: "India",
});
// console.log(res2);

//! Readonly

const person1: User = {
  name: "Lokendra Verm",
  age: 42,
  isSubscribed: false,
};
// person1.isSubscribed = true;  <== Error

//! Intersection Type (Like AND)
//? Ye 2 (ya zyada) types ko combine karke ek naya type banata hai.

type Director = {
  name: string;
  age: number;
};
type Movies = {
  total: number;
  anyBlockboster: boolean;
};
type DirectorPortfolio = Director & Movies;

const rajamauly: DirectorPortfolio = {
  name: "S. S. Rajamauli",
  age: 56,
  total: 14,
  anyBlockboster: true,
};
// console.log(
//   `${rajamauly.name} Age is ${rajamauly.age} and Total Movies ${
//     rajamauly.total
//   } ${rajamauly.anyBlockboster ? "With" : "No Have Any"} Blockbaster Movie`
// );

//! Union Type (Like OR)

let password: string | number = "@ldirke"; //=> true -> Error

const items: (number | string)[] = [3, 4, "lauki"];

//! Litral Type (fixed values hi assign)

type Person = {
  name: string;
  age: number;
  sex: "Male" | "Female";
};

const pushpendra: Person = {
  name: "Pushpendra Nath",
  age: 20,
  sex: "Male",
};

// console.log(pushpendra);

//! Tuple ( Fixed Nomber Of Element )

type myTuple = [string, number];
const lokendra: myTuple = ["Lokendra", 20]; //=> error -> [23,"disable"]
console.log(lokendra);
