import React from "react";
import NoImage from "../assets/images/no_image.png";
import Icons from "./Icons";
import "../css/style.css";

const SmallImageCard = ({ img = NoImage }) => {
  return (
    <>
      <div className="tz-small-img">
        <div className="tz-cancel">{<Icons.Xcircle color={"red"} />}</div>
        <img
          src={img}
          style={{ width: "70px", aspectRatio: "1", objectFit: "cover" }}
          alt="small_img"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = NoImage;
            console.log(currentTarget.src);
          }}
        />
      </div>
    </>
  );
};

export default SmallImageCard;
