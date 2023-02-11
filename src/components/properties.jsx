import React from "react";
import Property from "./property";

function Properties() {
  return (
    <div className="row">
      <div className="col">
        <Property />
      </div>
      <div className="col">
        <Property />
      </div>
      <div className="col">
        <Property />
      </div>
    </div>
  );
}

export default Properties;
