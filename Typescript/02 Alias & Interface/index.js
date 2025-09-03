//! Interfaces & Type Alias <==================
var getData = function (obj) {
    console.log(obj); //Lokendra
};
var example1 = function (obj) {
    console.log(obj.AdminKey);
};
function exm23(obj) {
    console.log(obj.id); // ✅
    console.log(obj.name); // ✅
}
var name = "Lokendra Nath";
var value1;
function exmpFunc2(strValue) {
    console.log(strValue);
}
exmpFunc2(34); //✅
exmpFunc2("lokendra"); //✅
