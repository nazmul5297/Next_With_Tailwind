import React from "react";
import { useState } from "react";

export function Registration() {
  return (
    <div className="w-full h-full flex flex-col bg-slate-600">
      <div className="w-full h-auto  bg-gray-300 flex">
        <div className=" h-96 w-11/12 bg-gray-50 mx-auto mt-12 mb-12 rounded shadow flex flex-col">
          <div className="w-full h-10 overflow-hidden border border-b-2 flex justify-center">
            <h1 className="mt-1 font-semibold font-sans text-lg hover:text-red-400">
              Registration Page
            </h1>
          </div>
          <div className=" w-3/4 h-64 ml-5 mt-3  bg-gray-400 rounded shadow flex flex-row">
            <div className=" h-10 mt-1 ml-2 flex flex-row justify-around col-4 ">
              <label>name</label>
              <input type="text" placeholder="write the name" />
            </div>
            <div className=" h-10 mt-1 ml-2 flex flex-row col-4">
              <label>name</label>
              <input type="text" placeholder="write the name" />
            </div>
            <div className=" h-10 mt-1 ml-2 flex flex-row col-4">
              <label>name</label>
              <input type="text" placeholder="write the name" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
