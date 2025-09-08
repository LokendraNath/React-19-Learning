//! 1. Union And Literals:

type statusType = "active" | "inactive" | "pending";

const printStatus = (status: statusType) => {
  return `Status is: ${status}`;
};

console.log(printStatus("pending"));

//! 2. Type Aliases:

type Coordinates = {
  x: number;
  y: number;
};
function calculateDistance(point1: Coordinates, point2: Coordinates) {
  return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
}

const p1: Coordinates = { x: 3, y: 4 };
const p2: Coordinates = { x: 7, y: 1 };

console.log(calculateDistance(p1, p2));

//! Optional Properties:

interface Profile {
  username: string;
  age: number;
  bio?: string;
}

const userProfile: Profile = {
  username: "Lokendra Nath",
  age: 20,
};

console.log(userProfile);
