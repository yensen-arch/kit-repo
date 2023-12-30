import React from "react";

const LoginForm = () => {
  return (
    <section className="flex justify-center items-center sm:w-[50rem]">
      <div className="flex flex-col justify-center items-center w-[30rem]  space-y-5 text-black rounded-xl border-2 shadow-xl">
        <label htmlFor="Username" className="hidden">
          Phone No./ Username/ Email
        </label>
        <hr className="border-t-2 border-gray-300 w-full" />
        <input
          id="Username"
          type="text"
          className="w-[26rem] bg-[#D8D9DA] text-center py-4 text-md border-2 rounded-xl placeholder:text-black"
          placeholder="Phone No./ Username/ Email"
        />

        <label htmlFor="Password" className="hidden">
          Password
        </label>
        <input
          id="Password"
          type="password"
          className="w-[26rem] bg-[#D8D9DA] text-center py-4 text-md border-2 rounded-xl placeholder:text-black"
          placeholder="Password"
        />
        <button className="border-2 px-8 py-4 rounded-xl bg-[#D8D9DA]">
          LOG IN
        </button>
        <p className="underline">Forget Password?</p>
        <div className="flex flex-row">
          <hr className="border-t-2 border-gray-300 w-[13.3rem] my-3" />
          <p className="mx-4">OR</p>
          <hr className="border-t-2 border-gray-300 w-[13.3rem] my-3" />
        </div>
        <div className="flex items-center space-x-4 pb-5">
          <p>
            Don't have an account?<span className="ml-2">Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
