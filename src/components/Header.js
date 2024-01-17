import React from "react";
import logo from "../assets/main-logo-white-transparent.svg";
const Header = () => {
  return (
    <div className="absolute  px-4   bg-gradient-to-b from-black z-10">
      <img src={logo} className="h-40 " alt="logo" />
    </div>
  );
};

export default Header;
