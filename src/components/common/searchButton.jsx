import React from "react";
import Button from "./button";

function SearchButton({
  className,
  location,
  guests,
  onHandleLocation,
  onHandleGuest,
  children,
}) {
  return (
    <div
      className={` ${className} input-group input-group-lg border rounded-pill 
        p-2 border-secondary-subtle shadow mb-3 bg-body-tertiary align-items-center flex-row"
    `}
      style={{
        width: "fit-content",
        padding: 20,
      }}
    >
      {children}
      {/* <Button onClick={() => onHandleLocation()}>{location}</Button>
      <Button onClick={() => onHandleGuest()} className={"text-muted"}>
        {guests === 0 ? guests : "Add Guest"}
      </Button> */}

      {/* <button
        className="btn btn-outline"
        style={{ color: "red", border: "none" }}
      >
        <i className="fa fa-search link-danger"></i>
      </button> */}
    </div>
  );
}

export default SearchButton;
