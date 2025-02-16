import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center border-bottom border-secondary px-3 py-2" style={{ minHeight: "80px" }}>
      {/* Left Section (Breadcrumb + Title) */}
      <div className="text-center text-sm-start mb-2 mb-sm-0">
        <nav className="fs-6" aria-label="breadcrumb">
          <ol className="breadcrumb mb-1 justify-content-center justify-content-sm-start">
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            <li className="breadcrumb-item active" aria-current="page">Lead</li>
            <li className="breadcrumb-item">
              <a href="#">LE-1023</a>
            </li>
          </ol>
        </nav>
        <h1 className="fs-3 fw-bold">LE-1023</h1>
      </div>

      {/* Right Icons */}
      <div className="d-flex flex-wrap justify-content-center justify-content-sm-end gap-3">
        <img className="img-fluid" style={{ height: "24px", width: "24px" }} src="https://img.icons8.com/?size=100&id=119&format=png&color=1A1A1A" alt="" />
        <img className="img-fluid" style={{ height: "24px", width: "24px" }} src="https://img.icons8.com/?size=100&id=3669&format=png&color=1A1A1A" alt="" />
        <img className="img-fluid" style={{ height: "28px", width: "28px" }} src="https://img.icons8.com/?size=100&id=14599&format=png&color=1A1A1A" alt="" />
        <img className="img-fluid" style={{ height: "24px", width: "24px" }} src="https://img.icons8.com/?size=100&id=w3-HRY0z8wQY&format=png&color=1A1A1A" alt="" />
        <img className="img-fluid" style={{ height: "24px", width: "24px" }} src="https://img.icons8.com/?size=100&id=91644&format=png&color=1A1A1A" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
