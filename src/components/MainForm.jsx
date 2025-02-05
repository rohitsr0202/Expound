import React from "react";
import Bottom from "./Bottom";
import { PhoneCall } from "lucide-react";

const MainForm = () => {
  return (
    <div>
      <div className="flex gap-11 pl-4 pt-1 border-b border-r  text-gray-400 font-bold border-gray-400  w-2xl ">
        <h2 className="text-lg font-semibold text-blue-900 border-b-2 border-blue-900 inline-block pb-1">
          Activity
        </h2>
        <h2>Actionables</h2>
        <h2>Tasks</h2>
        <h2>Note & File</h2>
      </div>
      <div className="max-w-2xl mx-auto p-6 border-r-2   border-gray-900 shadow-md">
        {/* Tabs Section */}
        <div className="flex space-x-3  mb-4">
          <button className="flex items-center justify-center gap-2 py-2 px-11 border border-green-600 rounded-lg bg-green-100 text-green-700 font-medium transition-all duration-300 hover:bg-green-200 hover:shadow-md active:scale-95">
            <PhoneCall size={18} className="text-green-600" />
            Log a Call
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-15 rounded-lg border border-gray-400 bg-gray-200 text-black font-medium shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95">
            <span className="text-lg">💬</span>
            <span>Email</span>
          </button>
          <button className="flex items-center gap-2 px-17 py-2.5 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-200">
            <span className="text-yellow-500 text-lg">💡</span>
            <span>Event</span>
          </button>
        </div>

        {/* Subject Field */}
        <input
          type="text"
          placeholder="Subject *"
          className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />

        {/* Add Team Member & Add Contact */}
        <div className="grid grid-cols-2 gap-6 mb-4">
  {/* Select Team Members */}
  <div className="relative">
    <input
      type="text"
      placeholder="Select Team Members"
      className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
    />
    <span className="absolute right-4 top-3 text-gray-500">🔍</span>
  </div>
  
  {/* Select Contacts */}
  <div className="relative">
    <input
      type="text"
      placeholder="Select Contacts"
      className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
    />
    <span className="absolute right-4 top-3 text-gray-500">🔍</span>
  </div>
</div>

{/* Due Date & Time */}
<div className="grid grid-cols-2 gap-6 mb-4">
  {/* Due Date */}
  <div className="relative">
    <input
      type="date"
      className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      defaultValue="2025-03-02"
    />
    <span className="absolute right-4 top-3 text-gray-500">📅</span>
  </div>

  {/* Time */}
  <div className="relative">
    <input
      type="time"
      className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      defaultValue="12:30"
    />
    <span className="absolute right-4 top-3 text-gray-500">⏰</span>
  </div>
</div>


<div>
  {/* Description Field */}
  <textarea
    rows="1"
    placeholder="Describe your feedback here..."
    class="w-full border border-gray-300 p-3 rounded-md mb-4 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-800 leading-relaxed"
  ></textarea>

  {/* Submit Button */}
  <div class="text-right">
    <button class="bg-blue-600 text-white py-1 px-6 rounded-md shadow-lg transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 transition duration-200 ease-in-out">
      Submit
    </button>
  </div>
</div>


      </div>

      {/* Bottom */}
      <div className="  ">
        <Bottom />
      </div>
    </div>
  );
};

export default MainForm;
