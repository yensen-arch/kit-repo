import React, { useState } from "react";
import ZoneDropdownButton from "./ZoneDropdownButton";
import BillStatusDropdown from "./BillStatusDropdown";
import Checklist from "./Checklist";

const MasterBillDue = ({}) => {
  return (
    <div className=" bg-blue-100 p-2 rounded-2xl shadow-2xl h-screen">
      <div className="text-3xl text-left font-semibold text-black py-4 border-black border-b-2">
        <div className="flex mx-auto justify-between w-screen">
          <span className="pl-10">Welcome Admin{}</span>
        </div>
        <div className=" text-center text-3xl font-semibold text-black py-4 border-black border-b-2"></div>
        <div className="flex mt-6">
          <div className=" text-center text-3xl font-semibold text-black py-4 border-black border-b-2"></div>
          <div className="flex w-full justify-between">
            <p className="text-2xl mx-2 pl-10 text-left">BILL DETAILS</p>
            <div className="flex mx-0 relative pr-2">
              <ZoneDropdownButton/>
              <BillStatusDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0 h-60">
        <div className="bg-white shadow-lg w-50% border-black border-r-2">
          <Checklist />
        </div>
        <div className="bg-white shadow-lg w-50% border-black border-l-2"></div>
      </div>
    </div>
  );
};

export default MasterBillDue;
