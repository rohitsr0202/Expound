import React from "react";
import MainForm from "./MainForm";
import RoadMap from "./RoadMap";

const MainLeft = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-5">
          <div className="d-flex flex-column">
            {/* 1st Section */}
            <div className="border-end gap-3 border-bottom border-secondary p-3 p-md-4 d-flex flex-column flex-md-row flex-wrap justify-content-center justify-content-md-between align-items-center text-center text-md-start">
              {/* Left Section */}
              <div className="mb-3 mb-md-0">
                <h2 className="pb-1 fs-5 fw-bold">test</h2>
                <h1 className="fs-4 fw-bold">Ramesh Sharma</h1>

                <h2 className="pt-3 fs-6 d-flex align-items-center gap-2 justify-content-center justify-content-md-start flex-wrap">
                  <img
                    className="rounded-circle"
                    style={{ height: "20px", width: "20px" }}
                    src="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
                    alt=""
                  />
                  Anamnaaj Mansuri
                  <span className="ps-md-3 fs-6 fw-bold">Event</span>
                </h2>
              </div>

              {/* Right Section */}
              <div className="d-flex flex-column gap-2">
                <h2 className="pb-2 fs-6 text-secondary d-flex align-items-center gap-1 justify-content-center justify-content-md-start">
                  <img
                    style={{ height: "12px", width: "12px" }}
                    src="https://img.icons8.com/?size=100&id=43519&format=png&color=1A1A1A"
                    alt=""
                  />
                  Pending Action
                </h2>

                <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                  <button className="btn btn-primary w-md-auto">
                    Create Account
                  </button>
                  <button className="btn btn-primary w-md-auto">
                    Create Contact
                  </button>
                </div>
              </div>
            </div>

            {/* 2nd Section */}
            <div className="d-flex flex-wrap gap-3 gap-md-4 border-end border-bottom text-secondary fw-bold border-secondary p-2 justify-content-center justify-content-md-start">
              {/* Basic Details */}
              <div className="position-relative">
                <h2 className="fs-6 fw-semibold text-primary border-bottom border-primary d-inline-block pb-1">
                  Basic Details
                </h2>
                <div
                  className="position-absolute top-0 start-100 translate-middle bg-danger text-white fw-bold rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "24px", height: "24px", fontSize: "12px" }}
                >
                  10
                </div>
              </div>

              {/* Account Details */}
              <h2 className="fs-6">Account Details</h2>

              {/* Lead Details */}
              <div className="position-relative">
                <h2 className="fs-6 d-inline-block pb-1">Lead Details</h2>
                <div
                  className="position-absolute top-0 start-100 translate-middle bg-danger text-white fw-bold rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "24px", height: "24px", fontSize: "12px" }}
                >
                  8
                </div>
              </div>

              {/* Other Sections */}
              <h2 className="fs-6">Team</h2>
              <h2 className="fs-6">Other Contacts</h2>
            </div>

            {/* 3rd Section */}
            <div className="d-flex px-3 justify-content-between border-end border-bottom border-secondary">
              <div>
                <h2 className="fs-6 fw-bold">Title</h2>
                <h2 className="fs-6 text-secondary">John Doe</h2>
              </div>
              <div>
                <h2 className="fs-6 fw-bold">First Name</h2>
                <h2 className="fs-6 text-secondary">Jane</h2>
              </div>
              <div>
                <h2 className="fs-6 fw-bold">Last Name</h2>
                <h2 className="fs-6 text-secondary">Smith</h2>
              </div>
            </div>

            {/* 4th Section */}
            <div className="border-end border-bottom border-secondary d-flex flex-column px-4 py-1 h-[30vh]">
              <h1 className="fs-6 fw-bold">Address Details</h1>

              <div className="d-flex py-2 justify-content-between">
                <div>
                  <h2 className="fs-6 fw-bold">Region</h2>
                  <h2 className="fs-6 text-secondary">APAC</h2>
                </div>
                <div>
                  <h2 className="fs-6 fw-bold">Country</h2>
                  <h2 className="fs-6 text-secondary">India</h2>
                </div>
                <div>
                  <h2 className="fs-6 fw-bold">Zone</h2>
                  <h2 className="fs-6 text-secondary">North</h2>
                </div>
              </div>

              <div className="mt-auto d-flex justify-content-between p-3">
                <h2 className="fs-6 text-secondary d-flex align-items-center gap-1">
                  <img
                    style={{ height: "12px", width: "12px" }}
                    src="https://img.icons8.com/?size=100&id=43519&format=png&color=1A1A1A"
                    alt=""
                  />
                  10 empty fields, fill the pending information
                </h2>
                <img
                  className="fs-6 img-fluid"
                  style={{ height: "44px", width: "44px" }}
                  src="https://img.icons8.com/?size=100&id=rr4zV-Rh8sip&format=png&color=1A1A1A"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section (MainForm) */}
        <div className="col-lg-4 order-lg-2 order-sm-1">
          <MainForm />
        </div>

        {/* Right Section (RoadMap) */}
        <div className="col-lg-3 order-lg-3 order-sm-2">
          <RoadMap />
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
