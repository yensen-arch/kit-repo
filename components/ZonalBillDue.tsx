import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import BillStatusDropdown from "./BillStatusDropdown";
import Checklist from "./Checklist";

const ZonalBillDue = ({}) => {
  return (
    <div className=" bg-blue-100 p-2 rounded-2xl shadow-2xl">
      <div className="text-center text-3xl font-semibold text-black py-4 border-black border-b-2">
        Welcome {}
        <div className="flex mt-16">
          <div className=" text-center text-3xl font-semibold text-black py-4 border-black border-b-2"></div>
          <div className="flex w-full justify-between">
            <p className="text-2xl mx-6">BILL DETAILS</p>
            <div className=" mx-6 relative flex">
              <FilterDropdown />
              <BillStatusDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-parent m-8 p-8">
      <Checklist />
      </div>
    </div>
  );
};

export default ZonalBillDue;
