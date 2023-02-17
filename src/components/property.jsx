import React, { useState, useEffect } from "react";
import "../App.css";

import { getProperties } from "../services/properties";
import PropertyList from "./propertyList";
import Header from "./common/header";
import HeaderBar from "./common/headerBar";
import SearchOpen from "./common/searchOpen";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Slider from "./common/slider";

function Property() {
  const [properties, setProperties] = useState([]);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);
  const [guestMenu, setGuestMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState("Ikeja, Lagos");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  let guests = adultGuests + childrenGuests;

  useEffect(() => {
    const allProperties = getProperties();
    setProperties(allProperties);
    setFilteredProperties(allProperties);
  }, []);

  function openMenu() {
    setDrawerOpen(!drawerOpen);
  }

  function handleLocation() {
    setGuestMenu(false);
  }

  function handleGuests() {
    setGuestMenu(true);
  }

  function filtered() {
    const newFilteredProperties = properties.filter((property) => {
      if (location && property.location !== location) {
        return false;
      }
      if (property.maxGuest < adultGuests + childrenGuests) {
        return true;
      }
      return true;
    });
    setFilteredProperties(newFilteredProperties);
  }

  // function filtered() {
  //   const filteredProperties = properties.filter((property) => {
  //     if (location && property.location === location) {
  //       return false;
  //     }
  //     if (property.maxGuest < adultGuests + childrenGuests) {
  //       return true;
  //     }
  //     return true;
  //   });
  //   setProperties(filteredProperties);
  // }

  const property = paginate(filteredProperties, currentPage, pageSize);

  function handleSearch(query) {
    filtered(query);
    setCurrentPage(1);
    openMenu();
  }

  function handleIncrement(type) {
    if (type === "Adult") {
      setAdultGuests(adultGuests + 1);
    } else if (type === "Children") {
      setChildrenGuests(childrenGuests + 1);
    }
  }

  function handleDecrement(type) {
    if (type === "Adult") {
      setAdultGuests(adultGuests - 1);
    } else if (type === "Children") {
      setChildrenGuests(childrenGuests - 1);
    }
  }

  function handleClick(property) {
    setSelectedProperty(property);
  }
  function handleClose() {
    setSelectedProperty(null);
  }

  return (
    <>
      <div className="position-relative">
        {drawerOpen ? (
          <SearchOpen
            properties={properties}
            location={location}
            adultGuests={adultGuests}
            childrenGuests={childrenGuests}
            onLocation={handleLocation}
            onGuests={handleGuests}
            onSearch={handleSearch}
            openMenu={openMenu}
            setLocation={setLocation}
            guestMenu={guestMenu}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ) : (
          ""
        )}
      </div>

      <div
        className="position-absolute top-0 start-0 end-0"
        style={{ zIndex: -1 }}
      >
        <Header
          location={location}
          onLocation={handleLocation}
          onGuests={handleGuests}
          openMenu={openMenu}
          guests={guests}
          guestMenu={guestMenu}
        />

        <HeaderBar properties={property} />

        <PropertyList
          selectedProperty={selectedProperty}
          properties={property}
          handleClick={() => handleClick()}
          onClose={handleClose}
        />

        <Pagination
          itemsCount={filteredProperties.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {filteredProperties.length === 0 ? (
        <div>
          <div>
            <h1>No Properties Found</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Property;
