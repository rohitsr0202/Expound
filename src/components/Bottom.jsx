import React from "react";
import { PhoneCall } from "lucide-react";

const BottomData = [
  {
    title: "Share Catalogue",
    dueDate: "2025-01-28",
    time: "16:20:00",
  },
  {
    title: "Introductory call",
    dueDate: "2025-01-28",
    time: "17:30:00",
  },
];

const Bottom = () => {
  return (
    <div className="max-w-2xl mx-auto p-2">
      <h2 className="fs-6 text-lg font-semibold mb-2">Overdue Activities</h2>
      <div className="flex gap-4">
        {BottomData.map((activity, index) => (
          <div key={index} className="border rounded-lg p-2 shadow-md w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <PhoneCall className="text-green-500" size={18} />
              <span className="font-semibold">{activity.title}</span>
            </div>
            <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
              <div>
                <p className="font-semibold">Due Date</p>
                <p>{activity.dueDate}</p>
              </div>
              <div>
                <p className="font-semibold">Time</p>
                <p>{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
