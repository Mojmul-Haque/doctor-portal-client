import React from "react";
import BuisnessInfo from "../BuisnessInfo/BuisnessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="position-relative header-container">
      <Navbar />
      <HeaderMain />
      <BuisnessInfo />
    </div>
  );
};

export default Header;
