//! Basic Types <========
//? primitive and reference <---------

//* Primitive <--
let x = 12; //Number
let y = true; //bolean
let w = "bc"; //string

//* Reference <----
let arr = [3, 43, "lokendra", true]; //array

//? Tuple (Jaisa Order Hoga waise hi dalna hai) <--------
let array2: [number, string] = [34, "dolly"]; //✅
// let array2: [number, string] = [34,33]; // ❌
// let array2: [number, string] = [34]; // ❌
// let array2: [number, string] = ["dolly",33]; ❌

//? Enums <--------
enum MySaaSversions {
  websiteBuilder = "2.43.4",
  videoGeneration = "1.0.2",
  thumbnailAi = "4.5.4",
  transScriptExtractor = "2.4.4",
}

console.log(MySaaSversions.videoGeneration); //1.0.2

//? Any , Unknown, Void & More <--------

//* Any === Typescript Off <---
let a; // ye "any" me by-Default set ho gya hai
let aSet = "stikr"; // ye "autometic string" type ho gya
let fnum: number; // ye "future me number" hoga
//todo -> Aapka kabhi type any nhi hona chahiye

//* Unknown <---
let data: unknown;

data = 10;
data = "Lokendra";
data = { name: "Verma" };

// ❌ Direct use not allowed
// let num: number = data; // Error

// ✅ Type checking required
if (typeof data === "number") {
  let num: number = data;
  console.log(num + 5);
}

//* Void (Agar Kuch return nhi kar rha hot o) <---
const nReturn = (): void => {
  //agar num return to "number" nhi to void
  console.log("Lokendra Nath is Doing Great");
  //return 23; //❌
};

//* Null <---
let kuchNahi: null;
