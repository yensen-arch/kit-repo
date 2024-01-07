"use client"
import React, { useState } from "react";
import Link from "next/link";

const StatusDropdownButton = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="flex mx-3 px-3 py-1 border border-solid text-lg rounded-xl bg-white hover:bg-slate-300 border-black  ml-auto"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        Status
        {isDropdownOpen ? (
                  <img
                    src="upArrow.svg"
                    alt="Close Icon"
                    className="h-7 mr-0"
                  />
                ) : (
                  <img
                    src="downArrow.svg"
                    alt="Open Icon"
                    className="h-7 mr-0"
                  />
                )}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute rounded-md bg-white ring-1 ring-black ring-opacity-5 ">
          <ul>
            <Link
              href="#"
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  border-solid "
              role="menuitem"
            >
              complete
            </Link>
            <Link
              href="#"
              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  border-solid "
              role="menuitem"
            >
              Incomplete
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusDropdownButton;
