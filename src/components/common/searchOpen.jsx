import React from "react";
import AddGuests from "./addGuests";
import SearchInput from "./searchInput";

function SearchOpen({
  adultGuests,
  childrenGuests,
  openMenu,
  location,
  properties,
  setLocation,
  guestMenu,
  onDecrement,
  onIncrement,
  onLocation,
  onGuests,
  onSearch,
}) {
  const guests = adultGuests + childrenGuests;

  const locationLists = [
    ...new Set(properties.map((locationList) => locationList.location)),
  ];

  return (
    <header
      className="container-fluid p-4"
      style={{ background: "white", height: 470 }}
    >
      <div className="position-relative d-flex align-items-center flex-row justify-content-between mt-2 mb-4">
        <span className="card-subtitle fs-4 fw-semibold">Edit your Search</span>
        <button className="border-0 bg-white" onClick={() => openMenu()}>
          <i
            className="fa fa-times"
            aria-hidden="true"
            style={{ fontSize: 30, border: "none" }}
          ></i>
        </button>
      </div>
      <SearchInput
        guests={guests}
        location={location}
        onLocation={onLocation}
        onGuests={onGuests}
        setLocation={setLocation}
        onSearch={onSearch}
      />

      <div className="">
        {guestMenu ? (
          <div className="position-absolute top-60 start-50 mt-3 px-0">
            <AddGuests
              type="Adult"
              description="Age 18 and above"
              onDecrement={() => onDecrement("Adult")}
              onIncrement={() => onIncrement("Adult")}
              disabled={adultGuests <= 0}
            >
              {adultGuests}
            </AddGuests>
            <AddGuests
              type="Children"
              description="Age 1 - 17"
              onDecrement={() => onDecrement("Children")}
              onIncrement={() => onIncrement("Children")}
              disabled={childrenGuests <= 0}
            >
              {childrenGuests}
            </AddGuests>
          </div>
        ) : (
          <div className="d-flex flex-column mb-4 m-3 mt-4">
            {locationLists.map((locationName) => (
              <button
                key={locationName.location}
                className="d-flex border border-0 bg-transparent m-2 px-2 btn link-dark fs-5 text-muted"
                onClick={() => setLocation(locationName)}
              >
                <div className="px-3 lg-2">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <span>{locationName}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default SearchOpen;
