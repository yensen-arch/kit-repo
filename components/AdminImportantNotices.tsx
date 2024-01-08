"use client";
import { FaChevronLeft } from "react-icons/fa";

export default function AdminImportantNotices() {
  return (
    <main className="m-4 space-y-8">
      <div className="rounded-lg border text-card-foreground shadow-sm w-full md:w-[350px] bg-blue-400">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-semibold">Important Notices</h3>
            <FaChevronLeft className="text-blue-900" size={40} />
          </div>
          <div className="max-h-[480.35px] overflow-y-auto">
            <ul className="text-white-300 leading-8 pl-6 list-inside">
              <li>
                <span className="chevron text-red-500">&gt;</span> Our office
                will be closed on December 25th in observance of Christmas Day.
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
              <li>
                <span className="chevron text-red-500">&gt;</span> Another
                important notice goes here...
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" bg-green-500 rounded-xl p-2 hover:bg-green-600 text-white text-xl border-black border-2">
            EDIT
          </button>
        </div>
      </div>
    </main>
  );
}
