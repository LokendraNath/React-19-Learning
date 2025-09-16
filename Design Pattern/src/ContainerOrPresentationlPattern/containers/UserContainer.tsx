// Smart Container

import { useEffect, useState } from "react";
import UserList from "../components/UserList";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const json = await res.json();
      if (!json.data) return;
      setUsers(json.data);
    } catch (err) {
      setError(true);
      console.error("Some Issus to Fetch Data", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserList users={users} isLoading={isLoading} error={error} />
    </div>
  );
};
export default UserContainer;
