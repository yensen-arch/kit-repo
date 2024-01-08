// AboutCard.jsx
import React from "react";

const AdminAboutCard = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="rounded-lg border shadow-md bg-[#61677A] text-white w-full md:w-[800px] mx-auto">
        <div className="p-4 sm:p-6 lg:p-8 border-b">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-none tracking-tight text-center">
            About Us
          </h3>
        </div>
        <div className="p-4 sm:p-6 lg:p-8">
          <p className="text-base sm:text-lg lg:text-xl text-center">
            We are a team of passionate individuals dedicated to providing the
            best experience for our customers. Our mission is to deliver
            innovative solutions that make a difference.
          </p>
        </div>
        <div className="flex justify-center">
          <button className=" bg-green-500 rounded-xl p-2 hover:bg-green-600 text-white text-xl border-black border-2">
            EDIT
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminAboutCard;
