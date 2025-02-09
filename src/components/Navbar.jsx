import React from "react";

export default function Navbar() {
  return (
    <nav className="px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Logo</a>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
