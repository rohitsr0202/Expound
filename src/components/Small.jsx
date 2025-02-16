import React from "react";

const Small = () => {
  return (
    <div>
      {/* Bottom Section */}
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-2 border-bottom border-secondary"
        style={{ fontSize: "13px", height: "auto" }}
      >
        {/* Left Section */}
        <div className="d-flex gap-3 ps-2">
          <img
            style={{ height: "32px", width: "32px" }}
            src="https://img.icons8.com/?size=100&id=2DKIvbRrRla6&format=png&color=40C057"
            alt=""
          />
          <img
            style={{ height: "32px", width: "32px" }}
            src="https://img.icons8.com/?size=100&id=2DKIvbRrRla6&format=png&color=40C057"
            alt=""
          />
          <button className="d-flex align-items-center gap-2 px-4 bg-orange-300 text-orange-500 font-semibold rounded-4 hover:bg-blue-600 transition duration-300">
            Nurturing
          </button>
          <button className="d-flex align-items-center gap-2 px-4 bg-gray-400 text-gray-600 font-semibold rounded-4 hover:bg-blue-600 transition duration-300">
            Convert
          </button>
        </div>

        {/* Button moves below on sm screens but stays inline on md+ */}
        <div className="mt-3 mt-md-0 text-center text-md-start">
          <button className="d-flex align-items-center gap-2 px-3 py-2 btn btn-primary text-white fw-semibold rounded-4">
            <img
              style={{ height: "20px", width: "20px" }}
              src="https://img.icons8.com/?size=100&id=82769&format=png&color=FFFFFF"
              alt="tick"
            />
            Mark as Converted
          </button>
        </div>
      </div>
    </div>
  );
};

export default Small;
