"use client";

import React from "react";
import Link from "next/link";

const CardGroup = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-row justify-center p-2 ">
        <div className="max-w-sm rounded-2xl hover:bg-slate-100  overflow-hidden shadow-lg mx-2 border-solid-black border-2">
          <div className="px-6 py-4">
            <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
              <Link href="/">
                <h3 className="font-bold border-b-4 pb-3 ">Bill Payment</h3>
                <p className=" text-lg pt-3">Pay all your bills here</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl hover:bg-slate-100  overflow-hidden shadow-lg mx-2 border-solid-black border-2">
          <div className="px-6 py-4">
            <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
              <Link href="/">
                {" "}
                <h3 className="font-bold border-b-4 pb-3">Fine Due</h3>
              </Link>
            </div>
            <p className=" text-lg">Check all due fines</p>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl hover:bg-slate-100  overflow-hidden shadow-lg mx-2 border-solid-black border-2">
          <div className="px-6 py-4">
            <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
              <Link href="/">
                <h3 className="font-bold border-b-4 pb-3">Complaints</h3>
              </Link>
            </div>
            <p className=" text-lg">File a complaint</p>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl hover:bg-slate-100 overflow-hidden shadow-lg mx-2 border-solid-black border-2">
          <div className="px-6 py-4">
            <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
              <Link href="/">
                <h3 className="font-bold border-b-4 pb-3">Change Password</h3>
              </Link>
            </div>
            <p className=" text-lg">Reset your Password</p>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl hover:bg-slate-100 overflow-hidden shadow-lg mx-2 border-solid-black border-2">
          <div className="px-6 py-4">
            <div className=" text-xl mb-2 h-20 w-auto text-center pt-6">
              <Link href="/">
                <h3 className="font-bold border-b-4 pb-3">Upload Documents</h3>
              </Link>
            </div>
            <p className=" text-lg ">Upload required documents here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;