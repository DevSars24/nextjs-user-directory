import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "User Directory",
  description: "A simple Next.js app to learn basics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0d1117] text-gray-200 min-h-screen">
        <Navbar />
        <main className="p-10 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
