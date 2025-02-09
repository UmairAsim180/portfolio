import React from "react";

export default function Navbar() {
  return (
    <nav className="px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a className="transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]" href="/">
            UmairAsim<span className="text-[#3498DB] text-3xl">.</span>
          </a>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a
              href="/"
              className="font-light text-white transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="font-light text-white transition duration-200 ] hover:drop-shadow-[0_0_10px_#3498DB]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="font-light text-white transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
