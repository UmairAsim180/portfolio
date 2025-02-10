import React from "react";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className="px-8 py-4 dark:text-white text-black">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a
            className="transition duration-200 text-black dark:text-white  hover:drop-shadow-[0_0_10px_#3498DB]"
            href="/"
          >
            UmairAsim<span className="text-[#3498DB] text-3xl">.</span>
          </a>
        </div>
        <div className="flex space-x-8 justify-center items-center">
          <ul className="space-x-8 hidden md:flex">
            <li>
              <a
                href="#"
                className="font-bold transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-bold transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bold transition duration-200 ] hover:drop-shadow-[0_0_10px_#3498DB]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="font-bold transition duration-200  hover:drop-shadow-[0_0_10px_#3498DB]"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="border-2 border-[#3498DB] dark:border-white p-2 rounded-full"
          >
            {theme === "dark" ? <FaSun /> : <MdNightlight />}
          </button>
        </div>
      </div>
    </nav>
  );
}
