import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on recipe?</h1>
          <p>Sign up to join our Newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="Email"
              placeholder="email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-green-500 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-2 border-none">
              Click here
            </button>
          </div>
          <p>
            we are concerned about security of your data, read {""}
            <span className="text-green-500">Privacy policy</span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1 gark:bg-grsy-700" />
      </div>
    </div>
  );
};

export default NewsLetter;
