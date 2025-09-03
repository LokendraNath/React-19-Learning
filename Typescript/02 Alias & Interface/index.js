//! Interfaces & Type Alias <==================
//? Iterfaces (Object Ki Shakal) <---------------
var exampleObj = {
    id: 13,
    name: "Lokendra",
    email: "lokendraverma225@gmail.com",
    isVergin: true,
};
var getData = function (obj) {
    console.log(obj.isVergin); //Lokendra
};
getData(exampleObj);
var example1 = function (obj) {
    console.log(obj.AdminKey);
};
function exm2(obj) {
    console.log(obj.id); // ✅
    console.log(obj.name); // ✅
}
var name = "Lokendra Nath";
var value1;
function exmpFunc(strValue) {
    console.log(strValue);
}
exmpFunc(34); //✅
exmpFunc("lokendra"); //✅
