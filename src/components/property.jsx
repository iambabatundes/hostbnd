import React, { useState } from "react";
import { getProperties } from "../services/properties";
import Properties from "./properties";
import PropertyList from "./propertyList";
import "../App.css";

function Property() {
  const [properties, setProperties] = useState(getProperties());
  const [searchQuery, setSearchQuery] = useState(properties.location);

  // function handleLiked(property) {
  //   const propertyId = [...properties];
  //   const index = properties.indexOf(property);
  //   propertyId[index] = { ...propertyId[index] };
  //   propertyId[index].liked = !propertyId[index].liked;
  //   setProperties(propertyId);
  // }

  function handleClick() {}

  return (
    <>
      <nav className="navbar bg-body-tertiary mt-4">
        <div className="container-fluid">
          <a href="" className="logo navbar-brand" style={{ padding: 20 }}>
            Windbnb
          </a>

          <div
            className="input-group input-group-lg border rounded-pill 
            p-2 border-secondary-subtle shadow mb-3 bg-body-tertiary align-items-center flex-row"
            style={{
              width: "fit-content",
              padding: 20,
            }}
          >
            <button
              className="btn btn-outline border-end link-secondary"
              style={{ fontSize: "1rem", border: "none" }}
            >
              Ikaje, Lagos
            </button>
            <button
              className="btn btn-outline border-end text-sm text-muted link-secondary"
              style={{ fontSize: "1rem", border: "none" }}
            >
              Add Guest
            </button>
            <button
              className="btn btn-outline"
              style={{ color: "red", border: "none" }}
            >
              <i className="fa fa-search link-danger"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="container-fluid d-flex align-items-center flex-row justify-content-between">
        <h3 className="font-poppins m-3 fw-bold">Stay in Nigeria</h3>
        <span className="m-4">20+ Stay</span>
      </div>

      <PropertyList properties={properties} onClick={handleClick} />
    </>
  );
}

export default Property;
