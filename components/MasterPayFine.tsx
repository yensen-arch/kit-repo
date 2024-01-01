"use client";
import React, { useState } from "react";
import Link from "next/link";

const FineCardMasterAd = ({}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const finesDue = [
    {
      industry: "DEF",
      fineType: "Electricity",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    {
      industry: "DEF",
      fineType: "Electricity",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    {
      industry: "DEF",
      fineType: "maintenance",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    { industry: "DEF", fineType: "water", FineAmt: "100", Due: "09/30/2023" },
    {
      industry: "DEF",
      fineType: "maintenance",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    {
      industry: "DEF",
      fineType: "Electricity",
      FineAmt: "100",
      Due: "09/30/2023",
    },

    // Add more fines due data as needed
  ];

  const finesPaid = [
    { industry: "DEF", fineType: "water", FineAmt: "100", Due: "09/30/2023" },
    {
      industry: "DEF",
      fineType: "maintenance",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    {
      industry: "DEF",
      fineType: "Electricity",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    {
      industry: "DEF",
      fineType: "Electricity",
      FineAmt: "100",
      Due: "09/30/2023",
    },
    { industry: "DEF", fineType: "water", FineAmt: "100", Due: "09/30/2023" },
    { industry: "DEF", fineType: "water", FineAmt: "100", Due: "09/30/2023" },

    // Add more fines paid data as needed
  ];

  return (
    <div className="p-12">
      <div className=" bg-blue-100 p-2 rounded-2xl shadow-2xl">
        <div className=" text-center text-3xl font-semibold text-black py-4 border-black border-b-2">
          Welcome Admin{/*<-Admin is temp.Need user name from json */}
          {isDropdownOpen && (
            <div className=" absolute right-2 top-36 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5 z-10 ">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  border-solid "
                  role="menuitem"
                >
                  Zone 1
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-t  border-solid"
                  role="menuitem"
                >
                  Zone 2
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Zone 3
                </Link>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={toggleDropdown}
            className="  flex  px-3 py-1 border border-solid text-lg rounded-xl bg-white hover:bg-slate-300 border-black  ml-auto"
          ><p className="mx-2">Zone</p>
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
        </div>
        <div className="flex-row md:flex-row justify-center">
          <div className="border-black py-4 px-8 mb-8">
            {/* Fines Due Section */}
            <h2 className="text-xl font-semibold text-black my-4">Fines Due</h2>
            <table className="w-full bg-slate-100">
              <thead>
                <tr>
                  <th className="py-2 bg-blue-200   border border-black">
                    Industry
                  </th>
                  <th className="py-2 bg-blue-200   border border-black">
                    Fine Type
                  </th>
                  <th className="py-2 bg-blue-200   border border-black">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {finesDue.map((fine, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4  border  border-black">
                      {fine.industry}
                    </td>
                    <td className="py-2 px-4  border  border-black">
                      {fine.fineType}
                    </td>
                    <td className="py-2 px-4  border  border-black">
                      {fine.Due}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className=" border-black py-4 px-8 mb-8">
            {/* Fines Paid Section */}
            <h2 className="text-xl font-semibold text-black m-4">Fines Paid</h2>
            <table className="w-full bg-slate-100">
              <thead>
                <tr>
                  <th className="py-2  bg-blue-200  border border-black">
                    Industry
                  </th>
                  <th className="py-2 bg-blue-200  border border-black">
                    Fine Type
                  </th>
                  <th className="py-2 bg-blue-200  border border-black">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {finesPaid.map((fine, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border border-black">
                      {fine.industry}
                    </td>
                    <td className="py-2 px-4 border border-black">
                      {fine.fineType}
                    </td>
                    <td className="py-2 px-4 border border-black">
                      {fine.Due}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Payment Button */}
        <div className="flex justify-end">
          <button className=" bg-blue-500 w-26 text-white mx-6 my-5 px-5 py-3 rounded-md hover:bg-blue-600">
            Print
          </button>
          <button className=" bg-green-500 w-26 text-white mx-6 my-5 px-7 py-3 rounded-md hover:bg-green-600">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default FineCardMasterAd;
