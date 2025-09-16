// Presentation ( Dumb )

type User = {
  id: number;
  first_name: string;
  email: string;
  avatar: string;
};
interface UserListProps {
  users: User[];
  isLoading: boolean;
  error: boolean;
}
const UserList = ({ users, isLoading, error }: UserListProps) => {
  if (isLoading) <p>Loading....</p>;
  if (error) <p>Something Went Wrong</p>;

  return (
    <div>
      <ul className="flex gap-5">
        {users.map((user) => {
          return (
            <li key={user.id} className="w-50 h-auto">
              <img src={user.avatar} className="w-full rounded-2xl" alt="" />
              <p>{user.first_name}</p>
              <p>{user.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserList;
