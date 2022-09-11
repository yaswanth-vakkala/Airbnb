import React from "react";
import logo from "../../public/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar1">
      <img className="logo" src={logo} alt="Airbnb"></img>
    </nav>
  );
}
