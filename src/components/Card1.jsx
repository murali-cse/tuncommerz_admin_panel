import React from "react";

const Card1 = ({ title, value, color }) => {
  let cardColor = "card card-tale";

  switch (color) {
    case "tale":
      cardColor = "card card-tale";
      break;
    case "darkBlue":
      cardColor = "card card-dark-blue";
      break;
    case "lightBlue":
      cardColor = "card card-light-blue";
      break;
    case "lightDanger":
      cardColor = "card card-light-danger";
      break;
    default:
      cardColor = "card card-tale";
      break;
  }

  return (
    <div className="mb-4 stretch-card transparent">
      <div className={cardColor}>
        <div className="card-body">
          <p className="mb-4">{title}</p>
          <p className="fs-30 mb-2">{value}</p>
          <p>10.00% (30 days)</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
