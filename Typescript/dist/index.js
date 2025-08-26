"use strict";
//! Annotation Example
//? String
let myName = "Lokendra Nath";
//? Number
let myFavNum = 72;
//? Boolean
let HaveGf = false;
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
function plusFive(val) {
    return val + 5;
}
// Arrow Function
const double = (a, b) => a * b;
// console.log(plusFive(4));
// console.log(double(4, 5));
//! Default value
function defualtName(name = "Lokendra") {
    return `Hello ${name}`;
}
const res = defualtName();
// console.log(res);
//! Return Annotation (Regular)
// Regular Fuck
function double1(num) {
    return num * 2;
}
// Arrow Func
const double2 = (num) => num * 2;
// console.log(double1(2));
//! Void In Typescript (kuch return nahi karta)
function example(name) {
    console.log(name);
    // Error => return 2
}
// example("Lokendra Nath");
//! Array Type ([] => Notation) (Single Dimensial)
let arr1 = [2, 2, 3, 23];
const arr2 = ["lokendra", "verma"];
// console.log(arr1);
arr1.push(65); // 'lokendra'  <- Error
// console.log(arr1);
//! Nested Array (Multi Dimensial)
const multiDim = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// console.log(multiDim);
//! Object
const employee = {
    name: "Vijay Madhvan",
    haveWife: false,
    age: 32,
};
const messageUser = (user) => {
    return `${user.name} Age is ${user.age} LogIn from ${user.country} and He is ${user.isSubscribed ? "Subscribed" : "Not Subscribe"} with ${user.haveIphone ? "iPhone" : "No Have iPhone"}`;
};
const res2 = messageUser({
    name: "Pushpendra",
    age: 22,
    isSubscribed: false,
    country: "India",
});
// console.log(res2);
//! Readonly
const person1 = {
    name: "Lokendra Verm",
    age: 42,
    isSubscribed: false,
};
const rajamauly = {
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
let password = "@ldirke"; //=> true -> Error
const items = [3, 4, "lauki"];
const pushpendra = {
    name: "Pushpendra Nath",
    age: 20,
    sex: "Male",
};
const lokendra = ["Lokendra", 20]; //=> error -> [23,"disable"]
// console.log(lokendra);
//! Enums -> enumeration ( set of named constants )
var Wether;
(function (Wether) {
    Wether["Clear"] = "Clear";
    Wether["Rainy"] = "Rainy";
    Wether["Cloudy"] = "Cloudy";
})(Wether || (Wether = {}));
const currentWhether = Wether.Cloudy;
const blackPanthar = {
    name: "Black Panther",
    rating: 4.5,
    genra: "Action",
};
// console.log(blackPanthar);
//! Generics ( type ko parameter ki tarah ) T = Type
function uniqueNumber(item, defaultvalue) {
    return [item, defaultvalue];
}
//* Basics ----------------
// console.log(uniqueNumber<number>(34, 53));
// console.log(uniqueNumber<string>("Lokendra", "Verma"));
function identity(value) {
    return value;
}
let num = identity(10); // T = number
let str = identity("Lokendra"); // T = string
const computer1 = uniqueNumber({
    name: "Hp",
    modle: 2023,
}, { name: "Apple", modle: 2022 });
// console.log(computer1);
//* RLE ----------------
function filterNumber(array, condition) {
    return array.filter((item) => condition(item));
}
//OBJ
const arrayNum = [24, 54, 5, 4, 5];
const evenNumber = filterNumber(arrayNum, (num) => num % 2 === 0);
// console.log(evenNumber);
//String
const string = ["Lokendra", "Ronaldo", "Messi", "Kohli", "Kilion"];
const shortName = filterNumber(string, (word) => word.length < 7);
// console.log(shortName);
//* Generic function with multiple Types ----------------
function reversePair(value1, value2) {
    return [value2, value1];
}
const res1 = reversePair("Lokendra", 25);
//example function the type guard
function exampleFucntion(value) {
    // Type Guard using typeof
    if (typeof value === "string") {
        // Within this block , Typescript knows that 'value' is a string
        console.log(value.toUpperCase());
    }
    else {
        // Within this block , TypeScript knows that 'value' is a number
        console.log(value.toFixed(2));
    }
}
//Example Usage
// exampleFucntion("Hello"); // HELLO
// exampleFucntion(35); // 35.00
//* 2. INSTANCEOF OPERATOR => Kya ek object kisi particular class ka instance hai ya uske prototype chain me hai?
class Dog {
    sound() {
        console.log("Booow");
    }
}
class Cat {
    sound() {
        console.log("Meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.sound();
    }
}
const myDog = new Dog();
const myCat = new Cat();
const manager = {
    id: 12,
    name: "Lokendra Nath",
    department: "Software",
    role: "Senior Developer",
};
// console.log(manager.id);
// console.log(manager.name);
// console.log(manager.department);
// console.log(manager.role);
const arrow3 = (num, num2) => {
    return num + num2;
};
