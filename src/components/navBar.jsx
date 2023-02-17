import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar bg-primary mb-4 text-color: white">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <NavLink className="" to="/properties">
          Property
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
