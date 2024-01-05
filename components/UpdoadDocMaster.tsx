"use client";
import React, { useState } from "react";
import ZoneDropdownButton from "./ZoneDropdownButton";
import StatusDropdownButton from "./StatusDropdownButton";

const UploadDocMaster = ({}) => {

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
          

          <div className=" text-center text-3xl font-semibold text-black py-4 border-black border-b-2"></div>
          <div className="flex w-full justify-between">
            <p className="text-2xl mx-6">Required documents</p>
            <div className=" mx-6 relative flex">
              
              <ZoneDropdownButton/>
              <StatusDropdownButton/>
            </div>
          </div>
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

export default UploadDocMaster;

