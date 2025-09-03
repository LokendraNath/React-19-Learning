// ! Classes & Objects
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//? Classes
/*
public = Sab ke liye (external bhi)
private = us class ke liye bas (no for extends)
protected = us class + subclass (extends) ke liye (self class + extends class)

Parametr Properties = constructor me hi veriable assign kar diya
*/
//* Basics
var CarMaker = /** @class */ (function () {
    function CarMaker(brand, modle) {
        this.brand = brand;
        this.modle = modle;
    }
    CarMaker.prototype.getDetails = function () {
        console.log("Brand: ".concat(this.brand, " , Modle: ").concat(this.modle));
    };
    return CarMaker;
}());
var teslaBC = new CarMaker("tesla", "bg3243");
// teslaBC.getDetails(); //Brand: tesla , Modle: bg3243?
var toyotaMC = new CarMaker("Toyota", "Forturer");
// toyotaMC.getDetails(); //Brand: Toyota , Modle: Forturer
//* Extends
var CarType = /** @class */ (function (_super) {
    __extends(CarType, _super);
    function CarType(brand, modle, isElectric) {
        var _this = _super.call(this, brand, modle) || this;
        _this.isElectric = isElectric;
        _this.isElectric = isElectric;
        return _this;
    }
    CarType.prototype.getDetails = function () {
        console.log("".concat(this.brand, " ").concat(this.modle, " is ").concat(this.isElectric ? "Electic" : "Fule", " Car"));
    };
    return CarType;
}(CarMaker));
var exmpaleCar = new CarType("Tata", "Curvee", true);
exmpaleCar.getDetails(); //Tata Curvee is Electic Car
var exmpaleCar2 = new CarType("BYD", "Extreem", false);
exmpaleCar2.getDetails(); //BYD Extreem is Fule Car
//* Optional Properties (readonly) + Optional
var UserVIP = /** @class */ (function () {
    function UserVIP(name, age) {
        this.name = name;
        this.age = age;
    }
    UserVIP.prototype.getInfoUser = function () {
        console.log("Name: ".concat(this.name, " ").concat(this.age ? ", Age: ".concat(this.age) : ""));
    };
    return UserVIP;
}());
var vipName = new UserVIP("Lokendra", 23);
console.log(vipName.name); //Lokenra ✅
// vipName.name = "Lokendradfd" // ❌
vipName.getInfoUser(); //Name: Lokendra , Age: 23
//* Getters & Setters (Class ke under se value nikal ke de)
var User3 = /** @class */ (function () {
    function User3() {
        this._age = 0;
    }
    Object.defineProperty(User3.prototype, "age", {
        // getter
        get: function () {
            return this._age;
        },
        // setter
        set: function (value) {
            if (value < 0) {
                throw new Error("Age cannot be negative!");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User3;
}());
var u = new User3();
// setter call
u.age = 19;
// getter call
console.log(u.age); // 19
//* Static Members (wo property ya method class ke saath belong karta hai, object ke saath nahi.)
var Exmaple23 = /** @class */ (function () {
    function Exmaple23() {
    }
    Exmaple23.sum = function (a, b) {
        return a + b;
    };
    Exmaple23.brandName = "Nath Dev";
    return Exmaple23;
}());
console.log(Exmaple23.brandName); //Nath Dev
console.log(Exmaple23.sum(2, 3)); // 5
// const bName = new Exmaple23();❌
// console.log(bName.brandName); ❌
//* Abstract Classes                             <-----------------------
// Ek class jo direct instantiate nahi ki ja sakti (object nahi banega).
// Isme abstract methods ho sakte hain (jinke andar body nahi hoti).
// Child classes ko force karta hai ki wo un methods ko implement karein.
//Base
var Laptop = /** @class */ (function () {
    function Laptop(brandName, modleName, price) {
        this.brandName = brandName;
        this.modleName = modleName;
        this.price = price;
    }
    Laptop.prototype.electorinType = function () {
        console.log("Laptop");
    };
    Laptop.prototype.getInfo = function () {
        console.log("Brand : ".concat(this.brandName, ", Modle : ").concat(this.modleName, " , Price : ").concat(this.price));
    };
    return Laptop;
}());
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dell.prototype.slogan = function () {
        console.log("Dell se baat");
    };
    return Dell;
}(Laptop));
var Dell23 = new Dell("Dell", "23", 23535);
Dell23.slogan();
Dell23.getInfo();
Dell23.electorinType();
