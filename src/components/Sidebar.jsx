import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div className="d-none d-sm-flex">
      {/* Sidebar */}
      <div className="d-flex flex-column align-items-center p-3 gap-8 border-end border-secondary" style={{ width: "80px" }}>
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
      </div>
    </div>
  );
};

export default Sidebar;
