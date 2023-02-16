import React from "react";
import Button from "./button";

function SearchInput({
  onGuests,
  onLocation,
  onSearch,
  guests,
  location,
  className,
}) {
  return (
    <div
      className={` ${className} d-flex justify-content-between bg-white rounded mb-3 m-3 shadow-lg border rounded-4 bg-body-tertiary rounded ml-2`}
    >
      <button
        onClick={onLocation}
        className="d-flex flex-column btn border-end-2 rounded-0 border-secondary-subtle flex-fill btn btn-outline border-end"
        style={{ fontSize: "1rem", border: "none", marginLeft: 15 }}
      >
        <div>Location</div>
        <span className="text-muted">{location}</span>
      </button>

      <button
        onClick={onGuests}
        className="d-flex flex-column btn border-end-0 border-secondary-subtle flex-fill px-3"
        style={{ fontSize: "1rem", border: "none", marginLeft: 30 }}
      >
        <div>Guest</div>
        <span className="text-muted">{guests}</span>
      </button>

      <Button
        onClick={onSearch}
        className={`d-flex justify-content-evenly text-white btn fs-5 rounded-start align-items-center rounded-4 bg-danger border`}
      >
        <i className="fa fa-search"></i>

        <span className="m-2">Search</span>
      </Button>
    </div>
  );
}

export default SearchInput;
