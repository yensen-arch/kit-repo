"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="  flex flex-col shadow-2xl">
      <div className="w-full  justify-start  py-0 pr-0 bg-orange-100">
        <div className="flex ">
          <Link href="https://commerce.gov.in/" target="_blank">
            <img src="Min.webp" className="w-36 h-19 mx-8 pt-6" />
          </Link>
          <img src="MakeIndia.webp" className="w-36 h-24 ml-10 pt-4 pb-0" />
          <div className="w-full flex justify-end  py-3 pr-1">
            <img src="Azadi.webp" className="w-24 h-15 mx-4" />
            <Link href="https://www.india.gov.in/" target="_blank">
              <img src="nationalEmblem.png" className="w-16 h-15 ml-8" />
            </Link>
          </div>
        </div>

        {isDropdownOpen && (
          <div className=" absolute right-2 top-44 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5 z-10 ">
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

      <nav className="w-full px-4  bg-blue-500 p-2 ">
        <ul className="flex pt-1  justify-start  sm:flex-sm">
          <li className="md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="#"
              className="text-white hover:border-b-2  sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Home
            </Link>
          </li>
          <li className="md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="#"
              className="text-white hover:border-b-2 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Services
            </Link>
          </li>
          <li className="md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="#"
              className="text-white hover:border-b-2 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Media
            </Link>
          </li>
          <li className="md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="#"
              className="text-white hover:border-b-2 sm:text-sm md:text-base lg:text-lg xl:text-xl "
            >
              Contact us
            </Link>
          </li>
          <button
            type="button"
            onClick={toggleDropdown}
            className="  inline-flex items-center  px-5 py-1 border border-solid font-medium rounded-2xl bg-white hover:bg-slate-300 hover:border-1 border-black  ml-auto"
          >
            {isDropdownOpen ? (
              <img
                src="HamburgerOpen.svg"
                alt="Close Icon"
                className="h-7 mr-0"
              />
            ) : (
              <img
                src="HamburgerClosed.svg"
                alt="Open Icon"
                className="h-7 mr-0"
              />
            )}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
