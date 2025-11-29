type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  
  export default async function UserDetail({ params }: { params: { id: string } }) {
    // Safety check — (important for Next.js 16 Turbopack)
    if (!params || !params.id) {
      return (
        <div className="text-red-400 text-xl font-bold">
          Invalid user ID
        </div>
      );
    }
  
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
      { cache: "no-store" }   // <-- THIS FIXES DATA NOT FETCHING
    );
  
    const user: User = await res.json();
  
    return (
      <div className="p-8 bg-[#161b22] border border-gray-800 rounded-xl max-w-xl">
        <h1 className="text-3xl font-bold text-white mb-4">{user.name}</h1>
        <p className="text-gray-300">📧 {user.email}</p>
        <p className="text-gray-300 mt-2">📞 {user.phone}</p>
        <p className="text-gray-300 mt-2">🌐 {user.website}</p>
      </div>
    );
  }
  