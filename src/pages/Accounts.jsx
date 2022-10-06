import React from "react";
import { Button } from "react-bootstrap";
import NoDataFound from "../components/NoDataFound";
import { Profile } from "../helpers/data";
import Divider from "../components/Divider";

const Accounts = () => {
  return (
    <>
      <div className="m-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex" style={{ justifyContent: "right" }}>
              <Button style={{ borderRadius: "0", visibility: "hidden" }}>
                Edit Profile
              </Button>
            </div>
            <img
              src={Profile.picture}
              alt="profile picture"
              style={{
                aspectRatio: "1",
                objectFit: "cover",
                width: "100%",
                marginBottom: "10px",
              }}
            />
            <br />
            <Button
              className="btn btn-warning"
              style={{
                borderRadius: "0px",
                width: "100%",
                margin: "0",
                fontWeight: "bold",
              }}
            >
              Change Picture
            </Button>
          </div>
          <div className="col-lg-9">
            <div
              className="d-none d-lg-block d-xl-block"
              style={{ textAlign: "end" }}
            >
              <Button style={{ borderRadius: "0" }}>Edit Profile</Button>
            </div>
            <div className="d-lg-none d-xl-none d-md-none mt-2 mb-2">
              <Button style={{ borderRadius: "0", width: "100%" }}>
                Edit Profile
              </Button>
            </div>

            <Divider text={"Personal Details"} className="mt-2" />
            <div className="">
              <h5 style={{ color: "grey" }}>Name</h5>
              <h4>Murali S</h4>
              <br />
              <div className="row">
                <div className="col">
                  <h5 style={{ color: "grey" }}>Personal Email</h5>
                  <h4>murali@gmail.com</h4>
                </div>
                <div className="col">
                  <h5 style={{ color: "grey" }}>Phone</h5>
                  <h4>9876543210</h4>
                </div>
              </div>
              <Divider text={"Store Details"} />
              <div className="row">
                <div className="col-lg-6 col-xl-6">
                  <h5 style={{ color: "grey" }}>Store Name</h5>
                  <h4>Nutcommerz Store</h4>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <h5 style={{ color: "grey" }}>Store Address</h5>
                  <h4>
                    2nd Floor, KPP Complex Palayapalayam, Erode - Perundurai Rd,
                    Erode, Tamil Nadu 638011
                  </h4>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <h5 style={{ color: "grey" }}>Office Number</h5>
                  <h4>0424-2345678</h4>
                  <h4>0424-2345679</h4>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <h5 style={{ color: "grey" }}>Official Mail</h5>
                  <h4>contact@nutcommerz.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
