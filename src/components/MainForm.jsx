import React from "react";
import { PhoneCall } from "lucide-react";
import Bottom from "../components/Bottom";

const MainForm = () => {
  return (
    <div>
      {/* Tabs Section */}
      <div className="d-flex flex-wrap gap-3 ps-3 pt-1 border-bottom border-end border-secondary fw-bold text-secondary">
        <h2 className="fs-6 fw-semibold border-bottom border-primary">Activity</h2>
        <h2 className="fs-6">Actionables</h2>
        <h2 className="fs-6">Tasks</h2>
        <h2 className="fs-6">Note & File</h2>
      </div>

      {/* Form Container with Smaller Font */}
      <div className="container-fluid border-end border-secondary shadow-sm pt-2 small">
        {/* Buttons Section */}
        <div className="d-flex flex-wrap gap-2 justify-center mb-2">
          <button className="btn btn-outline-success d-flex align-items-center gap-2 px-4 py-1">
            <PhoneCall size={16} className="text-success" />
            Log a Call
          </button>

          <button className="btn btn-secondary d-flex align-items-center gap-2 px-4 py-1">
            <span className="fs-6">💬</span>
            <span>Email</span>
          </button>

          <button className="btn btn-light border d-flex align-items-center gap-2 px-4 py-1">
            <span className="text-warning fs-6">💡</span>
            <span>Event</span>
          </button>
        </div>

        {/* Subject Field */}
        <input type="text" placeholder="Subject *" className="form-control mb-2" />

        {/* Select Team Member & Add Contact */}
        <div className="row mb-1">
          <div className="col-sm-12 col-md-6 position-relative mb-2 mb-md-0">
            <input type="text" placeholder="Select Team Members" className="form-control" />
            <span className="position-absolute end-0 top-50 translate-middle-y pe-3 text-muted">
              🔍
            </span>
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            <input type="text" placeholder="Select Contacts" className="form-control" />
            <span className="position-absolute end-0 top-50 translate-middle-y pe-3 text-muted">
              🔍
            </span>
          </div>
        </div>

        {/* Due Date & Time */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 position-relative mb-2 mb-md-0">
            <input type="date" className="form-control" defaultValue="2025-03-02" />
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            <input type="time" className="form-control" defaultValue="12:30" />
          </div>
        </div>

        {/* Description Field */}
        <textarea rows="1" placeholder="Describe your feedback here..." className="form-control mb-2"></textarea>

        {/* Submit Button */}
        <div className="text-end">
          <button className="btn btn-primary px-4">Submit</button>
        </div>
      </div>
      
      {/* Bottom Component */}
      <div>
        <Bottom />
      </div>
    </div>
  );
};

export default MainForm;
