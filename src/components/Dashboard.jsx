import React from "react";

const Dashboard = () => {
  return (
    <div className="flex relative justify-between items-center h-20 w-full border-b border-gray-400">
      {/* Left Text */}
      <div className="p-3.5">
        <h2 className="text-gray-400">
          Dashboard / Lead /{" "}
          <span className="text-blue-500 underline font-bold"> LE-1023</span>
        </h2>
        <h1 className="text-3xl font-bold">LE-1023</h1>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-7 pr-4 pt-9">
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/?size=100&id=119&format=png&color=1A1A1A"
          alt=""
        />
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/?size=100&id=3669&format=png&color=1A1A1A"
          alt=""
        />
        <img
          className="h-7 w-7"
          src="https://img.icons8.com/?size=100&id=14599&format=png&color=1A1A1A"
          alt=""
        />
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/?size=100&id=w3-HRY0z8wQY&format=png&color=1A1A1A"
          alt=""
        />
        <img
          className="h-6 w-6"
          src="https://img.icons8.com/?size=100&id=91644&format=png&color=1A1A1A"
          alt=""
        />
      </div>
    
    </div>
  );
};

export default Dashboard;
