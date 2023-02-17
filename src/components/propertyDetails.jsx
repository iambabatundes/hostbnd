import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetails({ properties }) {
  const { id } = useParams();
  properties.find((property) => property._id === id);

  return (
    <header className="container mt-4 grid">
      <div className="row m-1 ">
        <div className="col-md-8 shadow-sm p-1 bg-body-tertiary rounded">
          <div className="row">
            <div className="col-md-4">column</div>
            <div className="col-md-8">column</div>
          </div>
        </div>
        <div className="col-md-4 shadow-sm p-1 bg-body-tertiary rounded">
          column
        </div>
      </div>
    </header>
  );
}

export default PropertyDetails;
