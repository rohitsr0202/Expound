import React from "react";

const RoadMapData = [
  {
    date: "10/01",
    time: "03:12 PM",
    type: "Lead",
    title: "New Lead Created by Anamnaaj",
  },
  {
    date: "13/01",
    time: "06:20 PM",
    type: "Status",
    title: "Status Updated to Nurturing",
  },
  {
    date: "28/01",
    time: "04:30 PM",
    type: "Activity",
    title: "Share Catalogue",
  },
  {
    date: "28/01",
    time: "04:30 PM",
    type: "Activity",
    title: "Introductory call",
  },
];

const RoadMap = () => {
  return (

   <div>
    <h1 className=" border-b w-[20.7vw] border-gray-400 font-bold p-[7px]">Activity Logs</h1>
     <div className="max-w-md pl-20 border-b w-[20.7vw] border-gray-400 h-[21vw]  pt-5">
      <h2 className="text-lg font-semibold mb-4">January 2025</h2>
      <div className="relative border-l-2 border-dashed border-gray-400 ">
        {RoadMapData.map((item, index) => (
          <div key={index} className="relative pb-6 last:pb-0 flex items-start">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="absolute -left-16 text-gray-600 text-sm font-semibold">
              {item.date}
            </div>
            <div className="ml-6">
              <div className="text-gray-500 text-sm">
                {item.type} | {item.time}
              </div>
              <div className="font-semibold text-black">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className=" font-bold underline justify-end flex">View Upcoming</div>
   </div> 
   
  );
};

export default RoadMap;
