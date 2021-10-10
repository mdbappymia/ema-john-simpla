import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img src={logo} className="logo" alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Manage Order</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.displayName ? (
          <>
            <span>{user.displayName} </span>
            <button className="logout-btn" onClick={logOut}>
              Log out
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
