import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="d-flex align-items-center bg-blue-950 p-2"
      style={{ height: "56px" }}
    >
      {/* Left Section (Large Screens - Logo & Title) */}
      <div className="d-none d-sm-flex align-items-center gap-3">
        <img
          className="img-fluid"
          style={{ height: "40px", width: "40px" }}
          src="https://img.icons8.com/?size=100&id=69906&format=png&color=FFFFFF"
          alt="grid"
        />
        <h1 className="text-white h4 mb-0">Expound Technivo</h1>
      </div>

      {/* Left Section (Small Screens - Toggle Dropdown) */}
      <div className="d-flex d-sm-none">
        <Dropdown
          show={showDropdown}
          onToggle={(isOpen) => setShowDropdown(isOpen)}
        >
          <Dropdown.Toggle
            bsPrefix="toggle"
            variant="transparent"
            className="border-0 p-0 bg-transparent"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="d-flex align-items-center gap-3">
              {" "}
              {/* Flexbox for inline arrangement */}
              <img
                className="img-fluid"
                style={{ height: "40px", width: "40px" }}
                src="https://img.icons8.com/?size=100&id=69906&format=png&color=FFFFFF"
                alt="grid"
              />
              <h1 className="text-white h4 mb-0">Expound Technivo</h1>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-end p-2">
            <Dropdown.Item as="div" className="d-flex flex-column gap-2">
              <img
                className="img-fluid"
                style={{ height: "44px", width: "44px" }}
                src="https://st4.depositphotos.com/1000507/23538/v/450/depositphotos_235385484-stock-illustration-layers-icon-simple-vector-illustration.jpg"
                alt=""
              />
              <img
                className="img-fluid"
                style={{ height: "36px", width: "36px" }}
                src="https://img.icons8.com/?size=100&id=tnbmhd32Yyid&format=png&color=1A1A1A"
                alt=""
              />
              <img
                className="img-fluid"
                style={{ height: "36px", width: "36px" }}
                src="https://img.icons8.com/?size=100&id=8386&format=png&color=1A1A1A"
                alt=""
              />
              <img
                className="img-fluid"
                style={{ height: "36px", width: "36px" }}
                src="https://img.icons8.com/?size=100&id=53373&format=png&color=1A1A1A"
                alt=""
              />
              <img
                className="img-fluid"
                style={{ height: "40px", width: "40px" }}
                src="https://img.icons8.com/?size=100&id=Cssf43cjx2fu&format=png&color=1A1A1A"
                alt=""
              />
              <img
                className="img-fluid"
                style={{ height: "36px", width: "36px" }}
                src="https://img.icons8.com/?size=100&id=2igUhUvwJPoK&format=png&color=1A1A1A"
                alt=""
              />
              <img
                className="img-fluid"
                style={{ height: "36px", width: "36px" }}
                src="https://img.icons8.com/?size=100&id=uKqTvWCjmzOf&format=png&color=1A1A1A"
                alt=""
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Right Section (Icons) */}
      <div className="d-none d-sm-flex align-items-center ms-auto gap-3 pe-3">
        <img
          className="rounded-circle"
          style={{ height: "36px", width: "36px" }}
          src="https://img.icons8.com/?size=100&id=12513&format=png&color=FFFFFF"
          alt=""
        />
        <div className="vr text-light"></div>
        <img
          className="img-fluid"
          style={{ height: "20px", width: "20px" }}
          src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=FFFFFF"
          alt=""
        />
        <img
          className="img-fluid"
          style={{ height: "20px", width: "20px" }}
          src="https://img.icons8.com/?size=100&id=842&format=png&color=FFFFFF"
          alt=""
        />
        <img
          className="img-fluid"
          style={{ height: "20px", width: "20px" }}
          src="https://img.icons8.com/?size=100&id=364&format=png&color=FFFFFF"
          alt=""
        />
        <div className="vr text-light"></div>
        <img
          className="rounded-circle"
          style={{ height: "32px", width: "32px" }}
          src="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
          alt=""
        />
      </div>

      {/* Right Section (Dropdown on Small Screens) */}
      <div className="d-flex d-sm-none ms-auto">
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="toggle"
            variant="transparent"
            className="border-0 fs-1 text-white"
          >
            <i className="bi bi-list"></i> {/* Hamburger menu icon */}
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item>
              <i className="bi bi-search"></i> Search
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <img
                className="img-fluid me-2"
                style={{ height: "20px", width: "20px" }}
                src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=FFFFFF"
                alt=""
              />
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              <img
                className="img-fluid me-2"
                style={{ height: "20px", width: "20px" }}
                src="https://img.icons8.com/?size=100&id=842&format=png&color=FFFFFF"
                alt=""
              />
              Notifications
            </Dropdown.Item>
            <Dropdown.Item>
              <img
                className="img-fluid me-2"
                style={{ height: "20px", width: "20px" }}
                src="https://img.icons8.com/?size=100&id=364&format=png&color=FFFFFF"
                alt=""
              />
              Messages
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <img
                className="rounded-circle me-2"
                style={{ height: "32px", width: "32px" }}
                src="https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg"
                alt=""
              />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
