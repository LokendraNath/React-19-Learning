import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const featchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed To Fetch");
        const data = (await response.json()) as User[];
        setUsers(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "A error occured");
      } finally {
        setLoading(false);
      }
    };
    void featchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error - {error}</h1>;

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u: User) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
          </tr>
        ))}
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
