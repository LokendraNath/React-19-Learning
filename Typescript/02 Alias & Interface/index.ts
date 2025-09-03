//! Interfaces & Type Alias <==================

//? Interfaces (Object Ki Shakal) <---------------

interface UserInfo {
  id: number;
  name: string;
  email: string;
  isVergin?: boolean; //*  ? => Optional
}

const getData = (obj: UserInfo) => {
  console.log(obj); //Lokendra
};

//* Extending Interface <-----------------------

interface UserExtend {
  id: number;
  name: string;
  email: string;
  haveGf: false;
}
interface AdminExtend extends UserExtend {
  AdminKey: number;
}

const example1 = (obj: AdminExtend) => {
  console.log(obj.AdminKey);
};

// MERGING
interface demo {
  id: number;
}
interface demo {
  name: string;
}
function exm23(obj: demo) {
  console.log(obj.id); // ✅
  console.log(obj.name); // ✅
}

//? Type Alias <--------------------------------

//* Baic Type Alias <-----------

//1
type shabd = string;
let name: shabd = "Lokendra Nath";

//2
type exmpaleType = number | string;
let value1: exmpaleType;

function exmpFunc2(strValue: exmpaleType) {
  console.log(strValue);
}
exmpFunc2(34); //✅
exmpFunc2("lokendra"); //✅
// exmpFunc(true); ❌

//* Intersection Types

type cricketerType = {
  name: string;
  age: number;
  century?: number;
};
type commentatorType = cricketerType & {
  language: string;
};
