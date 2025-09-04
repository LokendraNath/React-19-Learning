// ! Classes & Objects

/*
public = Sab ke liye (external bhi)
private = us class ke liye bas (no for extends)
protected = us class + subclass (extends) ke liye (self class + extends class)

Parametr Properties = constructor me hi veriable assign kar diya
*/

//* Basics

class CarMaker {
  constructor(protected brand: string, protected modle: string) {}

  getDetails(): void {
    console.log(`Brand: ${this.brand} , Modle: ${this.modle}`);
  }
}
const teslaBC = new CarMaker("tesla", "bg3243");
// teslaBC.getDetails(); //Brand: tesla , Modle: bg3243?
const toyotaMC = new CarMaker("Toyota", "Forturer");
// toyotaMC.getDetails(); //Brand: Toyota , Modle: Forturer

//* Extends

class CarType extends CarMaker {
  constructor(brand: string, modle: string, private isElectric: boolean) {
    super(brand, modle);
    this.isElectric = isElectric;
  }

  getDetails(): void {
    console.log(
      `${this.brand} ${this.modle} is ${
        this.isElectric ? "Electic" : "Fule"
      } Car`
    );
  }
}

const exmpaleCar = new CarType("Tata", "Curvee", true);
exmpaleCar.getDetails(); //Tata Curvee is Electic Car
const exmpaleCar2 = new CarType("BYD", "Extreem", false);
exmpaleCar2.getDetails(); //BYD Extreem is Fule Car

//* Optional Properties (readonly) + Optional

class UserVIP {
  constructor(public readonly name: string, public age?: number) {}

  getInfoUser() {
    console.log(`Name: ${this.name} ${this.age ? `, Age: ${this.age}` : ""}`);
  }
  // changeName() {
  //   this.name = "kuch Bhi"; // ❌
  // }
}
let vipName = new UserVIP("Lokendra", 23);
console.log(vipName.name); //Lokenra ✅
// vipName.name = "Lokendradfd" // ❌
vipName.getInfoUser(); //Name: Lokendra , Age: 23

//* Getters & Setters (Class ke under se value nikal ke de)

class User3 {
  private _age: number = 0;

  // getter
  get age(): number {
    return this._age;
  }

  // setter
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative!");
    }
    this._age = value;
  }
}

const u = new User3();

// setter call
u.age = 19;

// getter call
console.log(u.age); // 19

//* Static Members (wo property ya method class ke saath belong karta hai, object ke saath nahi.)

class Exmaple23 {
  static brandName = "Nath Dev";

  static sum(a: number, b: number) {
    return a + b;
  }
}

console.log(Exmaple23.brandName); //Nath Dev
console.log(Exmaple23.sum(2, 3)); // 5

// const bName = new Exmaple23();❌
// console.log(bName.brandName); ❌

//* Abstract Classes
// Ek class jo direct instantiate nahi ki ja sakti (object nahi banega).
// Isme abstract methods ho sakte hain (jinke andar body nahi hoti).
// Child classes ko force karta hai ki wo un methods ko implement karein.

//Base
class Laptop {
  constructor(
    protected brandName: string,
    protected modleName: string,
    protected price: number
  ) {}

  electorinType(): void {
    console.log("Laptop");
  }
  getInfo(): void {
    console.log(
      `Brand : ${this.brandName}, Modle : ${this.modleName} , Price : ${this.price}`
    );
  }
}

class Dell extends Laptop {
  slogan(): void {
    console.log("Dell se baat");
  }
}

const Dell23 = new Dell("Dell", "23", 23535);
Dell23.slogan();
Dell23.getInfo();
Dell23.electorinType();
