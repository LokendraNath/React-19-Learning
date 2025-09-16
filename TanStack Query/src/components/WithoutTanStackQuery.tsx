import { useState, useEffect } from "react";

/*

कमियाँ:
- हर fetch में loading, error, data state अलग से manage करना है।
- अगर कई components same data fetch कर रहे हों, वो सब fetch करेंगे (cache नहीं)।
- Refetch-on-focus, retries, stale data आदि किसी library की तरह built-in नहीं है।

*/

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.example.com/users");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
