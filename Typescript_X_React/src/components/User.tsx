// type UserShape = {
//   name1: string;
//   age: number;
//   isVergin: boolean;
// };

interface UserShape {
  name: string;
  age: number;
  isVirgin: boolean;
}

const User = ({ name, age, isVirgin }: UserShape) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>is Virgin: {isVirgin ? "Yes" : "No"}</h1>
    </div>
  );
};
export default User;
