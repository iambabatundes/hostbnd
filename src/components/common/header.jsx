import React from "react";
import SearchButton from "./searchButton";
import Button from "./button";
import { Link } from "react-router-dom";
import mylogo from "../../hostLogo.svg";

function Header({
  openMenu,
  adultGuests,
  childrenGuests,
  location,
  onGuests,
  onLocation,
  guests,
}) {
  return (
    <header className="navbar bg-body-tertiary mt-4 container px-2">
      <Link to="/" className="logo navbar-brand">
        <img src={mylogo} alt="Hostbnd logo" width="150" />
      </Link>

      <SearchButton className="">
        <Button
          onClick={() => {
            onLocation();
            openMenu();
          }}
        >
          {location}
        </Button>
        <Button
          onClick={() => {
            onGuests();
            openMenu();
          }}
        >
          {guests === 0 ? (
            <div className="text-muted">Add Guest</div>
          ) : (
            <div>{guests}</div>
          )}
        </Button>
        <Button
          onClick={() => openMenu()}
          className="border-end-0"
          style={{ color: "red", border: "none" }}
        >
          <i className="fa fa-search link-danger"></i>
        </Button>
      </SearchButton>

      {/* <SearchButton location={location} guests={guests} /> */}
    </header>
  );
}

export default Header;
