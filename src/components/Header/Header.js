import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Manage Order</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
      </nav>
    </div>
  );
};

export default Header;
