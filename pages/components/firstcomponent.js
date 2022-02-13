import React from "react";

export function FirstComponent() {
  return (
    <div className=" h-96 w-96 mx-auto my-32 rounded-md bg-slate-600 shadow-xl flex flex-col">
      <div className="mt-6">
        <h1 className="text-center text-white text-4xl font-bold">Welcome</h1>
      </div>
      <div className="flex flex-col mt-8 mt-20">
        <div className=" flex felx-row justify-evenly ">
          <label className=" h-1 w-12 mt-1 text-xl text-white hover:text-2xl hover:text-orange-600 ">
            email
          </label>
          <input
            type="text"
            className="h-2 w-auto mt-2 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </div>
        <div className="flex flex-row mt-2 justify-evenly">
          <label className=" h-1 w-12 mt-1 text-xl text-white hover:text-2xl hover:text-orange-600 ">
            password
          </label>
          <input
            type="text"
            className="h-2 w-auto mt-2 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
      </div>
      <div className="w-auto h-vh p-3 items-center ml-30 mt-20  flex flex-row justify-center justify-items-stretch ">
        <button className=" w-20 h-10 border-black rounded-lg bg-red-400 ring-fuchsia-500  hover:bg-green-700 text-lg text-yellow-100  ">
          Sign In
        </button>
        <button className=" w-20 h-10 ml-4 border-black rounded-lg bg-red-400 ring-fuchsia-500  hover:bg-green-700 text-lg text-yellow-100  ">
          Sign Up
        </button>
      </div>
    </div>
  );
}
