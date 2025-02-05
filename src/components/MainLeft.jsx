import React from "react";
import MainForm from "./MainForm";
import RoadMap from "./RoadMap";

const MainLeft = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {/* 1st Section */}
        <div className="border-b border-r border-gray-400 w-3xl p-6 flex relative justify-between items-center">
          <div>
            <h2 className="pb-2 font-bold">test</h2>
            <h1 className="text-3xl font-bold">Ramesh Sharma</h1>

            <h2 className="pt-7 gap-2 flex">
              <img
                className="h-5 w-5 top-0.5 flex relative rounded-full"
                src="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
                alt=""
              />
              Anamnaaj Mansuri <span className="pl-20 font-bold">Event</span>
            </h2>
          </div>

          <div className="flex flex-col gap-1 ">
            <h2 className=" pb-2 text-gray-400 flex gap-1" > <img className="top-1.5 gap-1 flex relative h-3 w-3" src="https://img.icons8.com/?size=100&id=43519&format=png&color=1A1A1A" alt="" /> Pending Action</h2>
            <div className="w-96 gap-6 flex">
              <button className="items-center px-4 py-2 bg-blue-950 text-white  font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Create Account
              </button>
              <button className="items-center px-4 py-2 bg-blue-950 text-white  font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Create Contact
              </button>
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex pl-6 gap-9 w-3xl border-b border-r  text-gray-400 font-bold  border-gray-400">
          <div className="relative w-fit">
            <h2 className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block pb-1">
              Basic Details
            </h2>
            <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
              10
            </div>
          </div>

          <h2>Account Details</h2>
          <div className="relative w-fit">
            <h2 className="text-lg  inline-block pb-1">Lead Details</h2>
            <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
              8
            </div>
          </div>
          <h2>Team</h2>
          <h2>Other Contacts</h2>
        </div>

        {/* 3rd Section */}
        <div className=" flex px-6 py-2 justify-between w-3xl border-b border-r border-gray-400">
          <div className="">
            <h2 className="font-bold">Title</h2>
            <h2 className="text-gray-400">John Doe</h2>
          </div>
          <div className="">
            <h2 className="font-bold">First Name</h2>
            <h2 className="text-gray-400">Jane</h2>
          </div>
          <div className="">
            <h2 className="font-bold">Last Name</h2>
            <h2 className="text-gray-400">Smith</h2>
          </div>
        </div>

        {/* 4th Section */}
        <div className="w-3xl pl-6 h-96 border-b border-r border-gray-400 flex flex-col">
          <h1 className="font-bold ">Address Details</h1>

          {/* Region, Country, Zone */}
          <div className="flex py-2 justify-between w-xl">
            <div>
              <h2 className="font-bold">Region</h2>
              <h2 className="text-gray-400">APAC</h2>
            </div>
            <div>
              <h2 className="font-bold">Country</h2>
              <h2 className="text-gray-400">India</h2>
            </div>
            <div>
              <h2 className="font-bold">Zone</h2>
              <h2 className="text-gray-400">North</h2>
            </div>
          </div>

          {/* "hii" at the bottom */}
          <div className="mt-auto flex  justify-between p-4">
            <h2 className="text-gray-400 flex gap-1"><img className="top-1.5 gap-1 flex relative h-3 w-3" src="https://img.icons8.com/?size=100&id=43519&format=png&color=1A1A1A" alt="" />
              10 empty field, fill the pending information
            </h2>
            <img
              className="h-11 w-11"
              src="https://img.icons8.com/?size=100&id=rr4zV-Rh8sip&format=png&color=1A1A1A"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* MainForm */}
      <div className="  ">
        <MainForm />
      </div>
      {/* Roadmap */}
      <div className="  ">
        <RoadMap />
      </div>
    </div>
  );
};

export default MainLeft;
