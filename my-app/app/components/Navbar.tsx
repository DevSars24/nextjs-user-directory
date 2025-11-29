import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#161b22] border-b border-gray-800 p-4 flex gap-8 text-lg font-semibold shadow-xl">
      <Link href="/" className="hover:text-blue-400 transition">Home</Link>
      <Link href="/users" className="hover:text-blue-400 transition">Users</Link>
    </nav>
  );
}
