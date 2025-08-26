// type UserShape = {
//   name1: string;
//   age: number;
//   isVergin: boolean;
// };

interface UserShape {
  name: string;
  age: number;
  isVergin: boolean;
}

const User = ({ name, age, isVergin }: UserShape) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>is Vergin: {isVergin ? "Yes" : "No"}</h1>
    </div>
  );
};
export default User;
