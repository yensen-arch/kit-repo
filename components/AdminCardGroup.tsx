"use client";

import React from "react";
import Link from "next/link";

const AdminCardGroup = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-row justify-center p-2 ">
        <Link href="/">
          <div className="max-w-sm rounded-2xl hover:bg-slate-200  overflow-hidden shadow-lg mx-2 border-solid-black border-2">
            <div className="px-6 py-4">
              <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
                <h3 className="font-bold border-b-4 pb-3 ">Bill Due</h3>
              </div>
              <p className=" text-lg">Check the due bills</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="max-w-sm rounded-2xl hover:bg-slate-200  overflow-hidden shadow-lg mx-2 border-solid-black border-2">
            <div className="px-6 py-4">
              <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
                <h3 className="font-bold border-b-4 pb-3">Update Bill</h3>
              </div>
              <p className=" text-lg">Update the bills here</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="max-w-sm rounded-2xl hover:bg-slate-200  overflow-hidden shadow-lg mx-2 border-solid-black border-2">
            <div className="px-6 py-4">
              <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
                <h3 className="font-bold border-b-4 pb-3">Alerts</h3>
              </div>
              <p className=" text-lg">Edit and add alerts</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="max-w-sm rounded-2xl hover:bg-slate-200 overflow-hidden shadow-lg mx-2 border-solid-black border-2">
            <div className="px-6 py-4">
              <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
                <h3 className="font-bold border-b-4 pb-3">Check Documents</h3>
              </div>
              <p className=" text-lg">Review the documents</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="max-w-sm rounded-2xl hover:bg-slate-200 overflow-hidden shadow-lg mx-2 border-solid-black border-2">
            <div className="px-6 py-4">
              <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
                <h3 className="font-bold border-b-4 pb-3">Fine Details</h3>
              </div>
              <p className=" text-lg ">View fines here</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminCardGroup;