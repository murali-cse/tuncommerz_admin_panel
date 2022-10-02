import React from "react";
import NoDataFound from "../components/NoDataFound";
import { Profile } from "../helpers/data";

const Accounts = () => {
  return (
    <>
      <div className="m-5">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={Profile.picture}
              alt="profile picture"
              style={{
                aspectRatio: "3/4",
                height: "25rem",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-lg-9">
            <div className="m-5">
              <h5 style={{ color: "grey" }}>Name</h5>
              <h4>Murali S</h4>
              <br />
              <div className="row ">
                <div className="col">
                  <h5 style={{ color: "grey" }}>Email</h5>
                  <h4>murali@gmail.com</h4>
                </div>
                <div className="col">
                  <h5 style={{ color: "grey" }}>Phone</h5>
                  <h4>9876543210</h4>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6">
                  <h5 style={{ color: "grey" }}>Store Address</h5>
                  <h4>
                    2nd Floor, KPP Complex Palayapalayam, Erode - Perundurai Rd,
                    Erode, Tamil Nadu 638011
                  </h4>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
