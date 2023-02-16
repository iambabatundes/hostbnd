import React from "react";

function AddGuests({
  type,
  description,
  onDecrement,
  onIncrement,
  className,
  children,
  disabled,
}) {
  return (
    <div className="my-">
      <h1 className="fw-bold fs-6 mb-0">{type}</h1>
      <span className="text-muted">{description}</span>
      <div className="d-flex mt-2 mb-5">
        <button
          className="border-0 rounded border-outline p-1"
          style={{ marginRight: 10 }}
          onClick={onDecrement}
          disabled={disabled}
        >
          &#xFF0D;
        </button>
        <span>{children}</span>
        <button
          className="border-0 rounded border-outline"
          style={{ marginLeft: 10 }}
          onClick={onIncrement}
        >
          &#xFF0B;
        </button>
      </div>
    </div>
  );
}

export default AddGuests;
