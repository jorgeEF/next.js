import axios from "axios";
import { UserCard } from "@/components/UserCard";

async function loadUser() {
  const { data } = await axios.get("http://localhost:3000/api/users");
  console.log(data);
  return data;
}

async function UsersPage() {
  const users = await loadUser();

  if (users.length === 0) return <h1>No Products</h1>;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
      {users.map((user: { id: any; }) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersPage;