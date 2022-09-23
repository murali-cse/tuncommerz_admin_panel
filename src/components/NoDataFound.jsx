import React from "react";
import nouser from "../assets/vectors/NoUsers.svg";

const NoDataFound = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="mb-3"
        >
          <img
            src={nouser}
            style={{
              height: "15rem",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>No Data Found</h4>
        </div>
      </div>
    </>
  );
};

export default NoDataFound;
