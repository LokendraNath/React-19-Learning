import type { Info } from "../T-types";

export function UserInfo({ user }: { user: Info }) {
  return (
    <div>
      <h1>UserInfo</h1>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
