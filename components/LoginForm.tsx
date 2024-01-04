import React from "react";

const LoginForm = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full max-w-[40rem] space-y-5 text-black rounded-xl border-2 shadow-xl bg-white-50 p-4">
        <label htmlFor="Username" className="hidden">
          Phone No./ Username/ Email
        </label>
        <input
          id="Username"
          type="text"
          className="w-full bg-gray-500 text-center py-2 text-md border-2 rounded-xl placeholder-text-zinc-800"
          placeholder="Phone No./ Username/ Email"
        />

        <label htmlFor="Password" className="hidden">
          Password
        </label>
        <input
          id="Password"
          type="password"
          className="w-full bg-gray-500 text-center py-2 text-md border-2 rounded-xl placeholder-text-zinc-800"
          placeholder="Password"
        />

        <button
          className="border-2 px-8 py-2 rounded-xl bg-zinc-300 hover:bg-gray-400 hover:shadow-xl hover:underline"
          aria-labelledby="loginBtnLabel"
        >
          LOG IN
        </button>

        <p className="underline hover:cursor-pointer">Forgot Password?</p>

        <div className="flex flex-row items-center space-x-4 my-2">
          <hr className="border-t-2 border-gray-300 w-full" />
          <p className="mx-4">OR</p>
          <hr className="border-t-2 border-gray-300 w-full" />
        </div>

        <div className="flex items-center space-x-4 pb-2">
          <p>
            Don&rsquo;t have an account?<span className="ml-2">Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
