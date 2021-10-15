import { StarsRating } from "stars-rating-react-hooks";
import { useState } from "react";

export default function StarRating() {
  const config = {
    totalStars: 5,
    initialSelectedValue: 4.5,
    renderFull: (
      <img
        alt="star"
        src="https://img.icons8.com/ios-filled/50/000000/star--v1.png"
      />
    ),
    renderEmpty: (
      <img alt="star" src="https://img.icons8.com/ios/50/000000/star--v1.png" />
    ),
    renderHalf: (
      <img
        alt="star"
        src="https://img.icons8.com/ios-filled/50/000000/star-half-empty.png"
      />
    ),
  };

  const [selecting, setSelecting] = useState(null);
  return (
    <div className="App">
      <h1 className="font-bold text-sm sm:text-lg">
        Would you like to rate them..
      </h1>
      <h3>{selecting?.selectingValue}</h3>
      <div>
        <StarsRating
          onStarsRated={(value) => {
            alert(`${value} stars rated`);
          }}
          onSelecting={(isSelecting, selectingValue) => {
            setSelecting({ isSelecting, selectingValue });
          }}
          config={config}
        />
      </div>
    </div>
  );
}
