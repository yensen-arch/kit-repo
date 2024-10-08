"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
            <Image
              src="/Images/Min.webp"
              alt="Commerce ministry"
              width={200}
              height={100}
              className="mx-8 mt-4  mb-2"
            />
          </Link>
          <Image
            src="/Images/MakeIndia.webp"
            alt="MakeInIndia"
            width={200}
            height={100}
            className="hidden lg:block lg:w-36  mx-16 my-3"
          />
          <div className=" w-screen flex justify-end ">
            <Image
              src="/Images/Azadi.webp"
              alt="Independence"
              width={200}
              height={100}
              className="hidden lg:block lg:w-28 lg:h-18 lg:mx-8 lg:my-3 md:h-18 md:mx-8 md:my-3"
            />
            <Link href="https://www.india.gov.in/" target="_blank">
              <Image
                src="/Images/nationalEmblem.png"
                alt="National Emblem"
                width={200}
                height={100}
                className="w-16 h-18 mx-8 my-3"
              />
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
                href="/"
                className="flex lg:hidden md:hidden px-2 py-2 text-sm border-b border-solid hover:bg-orange-200 "
                role="menuitem"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="flex lg:hidden md:hidden px-2 py-2 text-sm border-b border-solid hover:bg-orange-200"
                role="menuitem"
              >
                Services
              </Link>
              <Link
                href="/media"
                className="flex lg:hidden md:hidden px-2 py-2 text-sm border-b border-solid hover:bg-orange-200"
                role="menuitem"
              >
                Media
              </Link>
              <Link
                href="/contact"
                className="flex lg:hidden md:hidden px-2 py-2 text-sm border-b border-solid hover:bg-orange-200"
                role="menuitem"
              >
                Contact us
              </Link>
              <Link
                href="#"
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-orange-200  border-b border-solid "
                role="menuitem"
              >
                Sign in
              </Link>

              <Link
                href="#"
                className="block px-2 py-2 text-sm text-gray-700 bg-slate-100 hover:bg-orange-200"
                role="menuitem"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </div>

      <nav className="w-full px-4 bg-blue-700 p-2 ">
        <ul className="flex pt-1  justify-start  sm:flex-sm">
          <li className="hidden lg:flex md:flex md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="/"
              className="text-gray-200 relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer border-gray-200 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Home
            </Link>
          </li>
          <li className="hidden lg:flex md:flex md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="/services"
              className="text-gray-200 relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer border-gray-200 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Services
            </Link>
          </li>
          <li className="hidden lg:flex md:flex md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="/media"
              className="text-gray-200 relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer border-gray-200 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Media
            </Link>
          </li>
          <li className="hidden lg:flex md:flex md:px-6 sm:px-4 lg:px-8 mx-2">
            <Link
              href="/contact"
              className="text-gray-200 relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer border-gray-200 sm:text-sm md:text-base lg:text-lg xl:text-xl"
            >
              Contact us
            </Link>
          </li>
          <button
            type="button"
            onClick={toggleDropdown}
            className="  inline-flex items-center py-1 border border-solid font-medium rounded-2xl bg-white hover:bg-orange-200 hover:border-1 border-black ml-auto"
          >
            <Image
              src="/Images/Icon.svg"
              alt="Close Icon"
              width={50}
              height={50}
              className="h-7 hidden lg:block md:block"
            />
            <p className="mr-3 hidden lg:block md:block">Profile</p>
            {isDropdownOpen ? (
              <Image
                src="/Images/HamburgerOpen.svg"
                alt="Close Icon"
                width={50}
                height={50}
                className="h-7  lg:hidden md:hidden sm:block"
              />
            ) : (
              <Image
                src="/Images/HamburgerClosed.svg"
                alt="Open Icon"
                width={50}
                height={50}
                className="h-7  lg:hidden md:hidden sm:block "
              />
            )}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
