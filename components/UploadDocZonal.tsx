"use client";
import React, { useState } from "react";
import Link from "next/link";

const UploadDocZonal = ({}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const dummyData = [
    { documentName: "Document 1" },
    { documentName: "Document 2" },
    { documentName: "Document 1" },
    { documentName: "Document 2" },
    { documentName: "Document 1" },
    { documentName: "Document 2" },
    { documentName: "Document 1" },
    { documentName: "Document 2" },
    { documentName: "Document 1" },
    { documentName: "Document 2" },
    { documentName: "Document 1" },
    { documentName: "Document 2" },
    // Add more dummy data as needed
  ];

  return (
    <div className=" bg-blue-100 p-2 rounded-2xl shadow-2xl">
      <div className="text-center text-3xl font-semibold text-black py-4 border-black border-b-2">
        Welcome Admin{/*<-Admin is temp. Need user name from json */}
        <div className="flex mt-16">
          {isDropdownOpen && (
            <div className=" absolute right-2 top-40 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5 z-10 ">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-t  border-solid"
                  role="menuitem"
                >
                  Complete
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Incomplete
                </Link>
              </div>
            </div>
          )}
          <p className="text-2xl">Required documents</p>
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex px-3 py-1 border border-solid text-lg rounded-xl bg-white hover:bg-slate-300 border-black  ml-auto"
          >
            <p className="mx-2">Status</p>
            {isDropdownOpen ? (
              <img src="upArrow.svg" alt="Close Icon" className="h-7 mr-0" />
            ) : (
              <img src="downArrow.svg" alt="Open Icon" className="h-7 mr-0" />
            )}
          </button>
        </div>
      </div>

      <div className="container mx-6 my-16">
        <h1 className="text-2xl font-bold mb-4">Document List</h1>

        <ul className="list-disc pl-6">
          {dummyData.map((data, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">Document Name:</span>{" "}
              {data.documentName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UploadDocZonal;
