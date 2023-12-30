"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="  flex flex-col ">
      <div className="w-full flex justify-between items-center py-3 pr-4  bg-slate-300">
        <button
          type="button"
          onClick={toggleDropdown}
          className="  inline-flex items-center  px-5 py-2 border border-transparent text-lg font-medium rounded-2xl text-white bg-indigo-400 hover:bg-indigo-500  ml-auto"
        >
          <img src="Icon.svg" className="h-6 mr-2"></img>
          Profile
        </button>

        {isDropdownOpen && (
          <div className="absolute right-2 top-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 ">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                href="#"
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  border-b border-solid "
                role="menuitem"
              >
                Change Industry
              </Link>
              <Link
                href="#"
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-solid"
                role="menuitem"
              >
                Personal Details
              </Link>
              <Link
                href="#"
                className="block px-2 py-2 text-sm text-gray-700 bg-slate-100 hover:bg-slate-200"
                role="menuitem"
              >
                Log Out
              </Link>
            </div>
          </div>
        )}
      </div>

      <nav className="w-full px-4 bg-slate-400 p-2 ">
        <ul className="flex px-4 justify-between mx-20 ">
          <li>
            <Link
              href="#"
              className="text-gray-900 hover:text-slate-200 text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:text-slate-200 text-lg">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:text-slate-200 text-lg">
              Media
            </Link>
          </li>
          <li>
            <Link href="#" className="text-black hover:text-slate-200 text-lg">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;