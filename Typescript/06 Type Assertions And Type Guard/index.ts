//! Type Accertion / Type Casting

import { error } from "console";

// Type accertion ka matlab hai ki typescript ko batana ki perticular item ka type kya hai

//? exercise 1
let val: unknown = "Lokendra";

// As string (recommended)
let str3 = val as string;

// Angle bracket style (JSX me problem karta hai)
let str2 = <string>val;

//? exercise 2
let exm4: any = "lokendra";

// console.log((exm4 as string).toLocaleUpperCase()); // 👉 LOKENDRA

//! Type Guard

function exp24(val: string | number | any) {
  // Yaha par likhne se val me method dono ka common wala aayega only 3

  if (typeof val === "string") {
    return val.toUpperCase(); // -> yaha par sare string method aayega
  } else if (typeof val === "number") {
    return val + 69; //-> Yaha par number ke method
  } else {
    throw error("Matab Kuch Bhi 🤬");
  }
}

console.log(exp24("lokendra")); //👉 LOKENDRA
console.log(exp24(23)); // 👉 92 (69 + 23)
// console.log(exp24(true)); // Matab Kuch Bhi 🤬

//! Type Instanceof

class dellLaptop {
  sell() {
    console.log("Sell Dell Laptop");
  }
}
class hpLaptop {
  sell() {
    console.log("Sell HP Laptop");
  }
}

const dell = new dellLaptop();
const hp = new hpLaptop();

function checkProduct(device: dellLaptop | hpLaptop) {
  if (device instanceof dellLaptop) {
    // Type narrowing
    device.sell();
  } else if (device instanceof hpLaptop) {
    device.sell();
  }
}

checkProduct(dell); //Sell Dell Laptop
checkProduct(hp); //Sell HP Laptop
