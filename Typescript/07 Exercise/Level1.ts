//! 1. Type Annotations:
const greetExample = (name: string) => {
  return `Hello , ${name}`;
};
// console.log(greetExample("Lokendra"));

//! 2. Interfaces:
interface UserExample {
  id: number;
  email: string;
  isActive: boolean;
}

const myUser: UserExample = {
  id: 2,
  email: "example1@gmail.com",
  isActive: true,
};

//! 3. Arrays & Types:
const fruits: string[] = ["Banana", "Apple", "Mango"];
