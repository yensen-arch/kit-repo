"use client";
import React, { useState } from "react";
import ZoneDropdownButton from "./ZoneDropdownButton";
import Checklist from "./Checklist";
import BillStatusDropdown from "./BillStatusDropdown";

const ClientBillPayment = ({}) => {
  const clientInfo = {
    uniqueId: "123456",
    username: "Puran",
    industrialZone: "Zone A",
    industryName: "mud Industry",
  };

  const billInfo = {
    billAmount: "rs100",
    extraCharges: "rs10",
    totalAmount: "rs110",
  };

  return (
    <div className=" bg-blue-100 p-2 rounded-2xl shadow-2xl">
      <div className="text-center text-3xl font-semibold text-black py-4 border-black border-b-2">
        Welcome {}
        <div className="flex mt-16">
          <div className=" text-center text-3xl font-semibold text-black py-4 border-black border-b-2"></div>
          <div className="flex w-full justify-between">
            <p className="text-2xl mx-6">BILL DETAILS</p>
            <div className=" mx-6 relative flex"></div>
          </div>
        </div>
      </div>
      <div className="flex w-parent m-3">
        <Checklist />
        <div className="m-3 bg-blue-300 text-black p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-4">Client Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm">Unique ID:</p>
              <p className="font-medium">{clientInfo.uniqueId}</p>
            </div>
            <div>
              <p className="text-sm">Username:</p>
              <p className="font-medium">{clientInfo.username}</p>
            </div>
            <div>
              <p className="text-sm">Industrial Zone:</p>
              <p className="font-medium">{clientInfo.industrialZone}</p>
            </div>
            <div>
              <p className="text-sm">Industry Name:</p>
              <p className="font-medium">{clientInfo.industryName}</p>
            </div>
          </div>
        </div>

        <div className="m-3 bg-green-300 text-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Bill Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm">Bill Amount:</p>
              <p className="font-medium">{billInfo.billAmount}</p>
            </div>
            <div>
              <p className="text-sm">Extra Charges(if any):</p>
              <p className="font-medium">{billInfo.extraCharges}</p>
            </div>
            <div colSpan="2">
              <p className="text-sm">Total Amount:</p>
              <p className="font-medium">{billInfo.totalAmount}</p>
            </div>
          </div>
          {/* Pay Bill Button */}
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">
            Pay Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientBillPayment;
