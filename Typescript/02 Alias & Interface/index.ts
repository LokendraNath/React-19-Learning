//! Interfaces & Type Alias <==================

//? Iterfaces (Object Ki Shakal) <---------------

const exampleObj = {
  id: 13,
  name: "Lokendra",
  email: "lokendraverma225@gmail.com",
  isVergin: true,
};

interface UserInfo {
  id: number;
  name: string;
  email: string;
  isVergin?: boolean; //*  ? => Optional
}

const getData = (obj: UserInfo) => {
  console.log(obj.isVergin); //Lokendra
};

getData(exampleObj);

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
function exm2(obj: demo) {
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

function exmpFunc(strValue: exmpaleType) {
  console.log(strValue);
}
exmpFunc(34); //✅
exmpFunc("lokendra"); //✅
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
