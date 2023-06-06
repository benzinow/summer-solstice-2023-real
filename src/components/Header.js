import Sun from "../images/sun.svg";
import Location from "../images/location.svg";
import Date from "../images/date.svg";
import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>Summer Solstice</h1>
      <h2>A Ritual of Abundance</h2>
      <div className="header-cards">
        <div className="header-card">
          <img className="header-card-icon" src={Date} alt="sun icon"></img>

          <div className="flex-colum-center">
            <h3>Saturday, June 24 2023</h3>
            <h4>2pm-8pm Family Friendly</h4>
            <h4>8pm-2am Clothing Optional</h4>
          </div>
        </div>
        <div className="header-card">
          <img className="header-card-icon" src={Location} alt="sun icon"></img>
          <div className="flex-colum-center">
            <h3>Holler Residence</h3>
            <h4>Near Glenn & 1st</h4>
            <h4>Tucson, AZ</h4>
          </div>
        </div>
        <div className="header-card">
          <img className="header-card-icon" src={Sun} alt="sun icon"></img>
          <div className="flex-colum-center">
            <h3>Expected Weather</h3>
            <h4>Plentiful Sunshine</h4>
            <h4>102 &deg;F | 73 &deg;F</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
