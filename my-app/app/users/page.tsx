import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  if (!users || users.length === 0) {
    return <div className="text-red-400 text-xl">No users available</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Users List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="p-6 bg-[#161b22] border border-gray-800 rounded-xl 
                       hover:shadow-[0_0_15px_#1f6feb55] hover:border-blue-500 
                       transition-all duration-300 block"
          >
            <h2 className="text-xl font-semibold text-white">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
