import React from "react";
import NoImage from "../assets/images/no_image.png";

const SmallImageCard = () => {
  return (
    <>
      <div>
        <img src={NoImage} style={{ width: "70px", aspectRatio: "1" }} />
      </div>
    </>
  );
};

export default SmallImageCard;
