import React, { useState } from "react";
import { getProperties } from "../services/properties";
import Properties from "./properties";
import PropertyList from "./propertyList";
import "../App.css";

function Property() {
  const [properties, setProperties] = useState(getProperties());

  // function handleLiked(property) {
  //   const propertyId = [...properties];
  //   const index = properties.indexOf(property);
  //   propertyId[index] = { ...propertyId[index] };
  //   propertyId[index].liked = !propertyId[index].liked;
  //   setProperties(propertyId);
  // }

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="" className="navbar-brand" style={{ padding: 20 }}>
            Windbnb
          </a>
          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search..."
            />
          </form>
        </div>
      </nav>

      <PropertyList properties={properties} />
    </>
  );
}

export default Property;
