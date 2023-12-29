import React from "react";

const ChangePassword = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col flex-wrap justify-center items-center space-y-5 text-black rounded-xl border-2 shadow-xl">
        <p className="text-3xl font-semibold mt-6">Change Password</p>

        <hr className="border-t-2 border-gray-300 w-full" />

        <p className="text-center pb-6 text-red-700 text-md font-normal">
          Please enter text with atleast one UpperCase, one
          <br /> LowerCase, one Digit and one Special Character.
        </p>

        <table>
          <tbody>
            <tr>
              <td className="text-xl font-semibold px-6 py-6">
                Current Password:
              </td>
              <td>
                <input
                  type="password"
                  className="w-[26rem] bg-[#D8D9DA] text-center py-4 text-md border-2 rounded-xl placeholder:text-black  mx-6"
                />
              </td>
            </tr>

            <tr>
              <td className="text-xl font-semibold px-6 py-6">New Password:</td>
              <td>
                <input
                  type="password"
                  className="w-[26rem] bg-[#D8D9DA] text-center py-4 text-md border-2 rounded-xl placeholder:text-black mx-6"
                />
              </td>
            </tr>

            <tr>
              <td className="text-xl font-semibold px-6 py-6">
                Confirm Password:
              </td>
              <td>
                <input
                  type="password"
                  className="w-[26rem] bg-[#D8D9DA] text-center py-4 text-md border-2 rounded-xl placeholder:text-black mx-6"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row justify-around items-center w-full pb-6">
          <button className="px-8 py-4 border-2 bg-[#D8D9DA] rounded-xl text-2xl">
            Save
          </button>
          <button className="px-8 py-4 border-2 bg-[#D8D9DA] rounded-xl text-2xl">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
