import React from "react";

function SearchBox() {
  return (
    <div className="container-fluid p-4">
      <div className="d-flex align-items-center flex-row justify-content-between mt-0 ">
        <span className="card-subtitle">Edit your Search</span>
        <span className="">
          <i
            className="fa fa-times"
            aria-hidden="true"
            style={{ fontSize: 30 }}
          ></i>
        </span>
      </div>

      <div className="d-flex justify-content-between bg-white rounded mb-3 m-3 shadow-lg border rounded-4 bg-body-tertiary rounded">
        <button
          className="d-flex flex-column btn border-end-0 border-secondary-subtle"
          style={{ width: "28rem", marginLeft: 25 }}
        >
          <div>Location</div>
          <span className="text-muted">Lagos, Nigeria</span>
        </button>
        <button
          className="d-flex flex-column btn btn-outline border-start"
          style={{ width: "28rem", marginLeft: 25 }}
        >
          <div>Guest</div>
          <span className="text-muted">Add Guest</span>
        </button>
        <button
          className="d-flex justify-content-evenly  fs-5 rounded-start align-items-center rounded-4 bg-danger border"
          style={{ width: "10rem", color: "#fff", border: "none" }}
        >
          <div>
            <i className="fa fa-search"></i>
          </div>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
