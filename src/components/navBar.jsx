import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container mt-3 navbar mb-5 text-color: white">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
