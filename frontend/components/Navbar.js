"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">
        🎓 CollegeFinder
      </h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-indigo-600">
          Home
        </Link>
        <Link href="/compare" className="hover:text-indigo-600">
          Compare
        </Link>
      </div>
    </nav>
  );
}