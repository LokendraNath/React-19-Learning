import type { AdminInfoList } from "../../T-types";

export function AdminInfo({ admin }: { admin: AdminInfoList }) {
  if (!admin) return <p>No Admin Data</p>;

  return (
    <div>
      <h1>Admin</h1>
      <p>Id: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Age: {admin.age}</p>
      <p>Role: {admin.role}</p>
      <p>Salary: {admin.salary}</p>
    </div>
  );
}
