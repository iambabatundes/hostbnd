// import React from "react";

// const Rating = ({ rating, onClick }) => {
//   let stars = "";
//   for (let i = 0; i < rating; i++) {
//     stars += "⭐";
//   }
//   return (
//     <span onClick={onClick}>
//       {rating >= 1 && rating <= 5 ? (
//         <span>
//           <span>{stars}</span>
//           <span> {rating}</span>
//         </span>
//       ) : (
//         ""
//       )}
//     </span>
//   );
// };

// export default Rating;

import React, { useState } from "react";
import "../../../src/App.css";

const Rating = () => {
  const [rating, setRating] = useState(3.5);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <>
          <span
            key={value}
            className={`star ${rating >= value ? "selected" : ""}`}
            onClick={() => handleClick(value)}
          >
            &#9733;
          </span>
        </>
      ))}
      <span> {rating}</span>
    </div>
  );
};

export default Rating;
