// src/components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">TheTop36 Admin Panel</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-sm hover:underline">Prizes</Link>
          <Link to="/ecosync" className="text-sm hover:underline">Ecosystem Sync</Link>
          <Link to="/faq" className="text-sm hover:underline">FAQ</Link>
          <Link to="/terms" className="text-sm hover:underline">Terms</Link>
          <Link to="/optout" className="text-sm hover:underline">Opt-Out</Link>
        </nav>
      </header>

      <main className="p-6 max-w-5xl mx-auto">{children}</main>

      <footer className="bg-white mt-10 text-center text-sm py-4 text-gray-400 border-t">
        © 2025 TheTop36.com | Admin Panel
      </footer>
    </div>
  );
}
