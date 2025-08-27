import type { Info, AdminInfoList } from "./T-types";
import { AdminInfo } from "./components/T-AdminInfo";
import { UserInfo } from "./components/T-UserInfo";

const TypeApp = () => {
  const user: Info = {
    id: 1,
    name: "Lokendra Verma",
    age: 23,
  };
  const admin: AdminInfoList = {
    id: 34,
    name: "Ronalo Sahu",
    age: 24,
    role: "SoftWare Developer",
    salary: 234543,
  };
  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
};
export default TypeApp;
