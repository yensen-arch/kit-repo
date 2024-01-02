import React from "react";

const LoginForm = () => {
  return (
    <section className="flex justify-center items-center md:w-[50rem]">
      <div className="flex flex-col justify-center items-center w-full md:w-[40rem] space-y-7 text-black rounded-xl border-2 shadow-xl bg-yellow-50">
        <label htmlFor="Username" className="hidden">
          Phone No./ Username/ Email
        </label>
        <hr className="border-t-2 border-gray-300 w-full" />
        <input
          id="Username"
          type="text"
          className="w-[26rem] bg-orange-200 hover:bg-orange-300 text-center py-4 text-md border-2 rounded-xl placeholder:text-zinc-800"
          placeholder="Phone No./ Username/ Email"
        />

        <label htmlFor="Password" className="hidden">
          Password
        </label>
        <input
          id="Password"
          type="password"
          className="w-[26rem] bg-orange-200 hover:bg-orange-300 text-center py-4 text-md border-2 rounded-xl placeholder:text-zinc-800"
          placeholder="Password"
        />
        <button className="border-2 px-8 py-4 rounded-xl bg-orange-400 hover:bg-orange-500 hover:shadow-xl hover:underline">
          LOG IN
        </button>
        <p className="underline hover:cursor-pointer text-blue-800">Forgot Password?</p>
        <div className="flex flex-row">
          <hr className="border-t-2 border-gray-300 w-[13.3rem] my-3" />
          <p className="mx-4">OR</p>
          <hr className="border-t-2 border-gray-300 w-[13.3rem] my-3" />
        </div>
        <div className="flex items-center space-x-4 pb-5">
          <p>
            Don't have an account?<span className="ml-2 text-blue-800 underline">Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
