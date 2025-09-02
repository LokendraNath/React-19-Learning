//! Basic Types <========
//? primitive and reference <---------
//* Primitive <--
var x = 12; //Number
var y = true; //bolean
var w = "bc"; //string
//* Reference <----
var arr = [3, 43, "lokendra", true]; //array
//? Tuple (Jaisa Order Hoga waise hi dalna hai) <--------
var array2 = [34, "dolly"]; //✅
// let array2: [number, string] = [34,33]; // ❌
// let array2: [number, string] = [34]; // ❌
// let array2: [number, string] = ["dolly",33]; ❌
//? Enums <--------
var MySaaSversions;
(function (MySaaSversions) {
    MySaaSversions["websiteBuilder"] = "2.43.4";
    MySaaSversions["videoGeneration"] = "1.0.2";
    MySaaSversions["thumbnailAi"] = "4.5.4";
    MySaaSversions["transScriptExtractor"] = "2.4.4";
})(MySaaSversions || (MySaaSversions = {}));
console.log(MySaaSversions.videoGeneration); //1.0.2
//? Any , Unknown, Void & More <--------
//* Any === Typescript Off <---
var a; // ye "any" me by-Default set ho gya hai
var aSet = "stikr"; // ye "autometic string" type ho gya
var fnum; // ye "future me number" hoga
//todo -> Aapka kabhi type any nhi hona chahiye
//* Unknown <---
var data;
data = 10;
data = "Lokendra";
data = { name: "Verma" };
// ❌ Direct use not allowed
// let num: number = data; // Error
// ✅ Type checking required
if (typeof data === "number") {
    var num = data;
    console.log(num + 5);
}
//* Void (Agar Kuch return nhi kar rha hot o) <---
var nReturn = function () {
    //agar num return to "number" nhi to void
    console.log("Lokendra Nath is Doing Great");
    //return 23; //❌
};
//* Null <---
var kuchNahi;
