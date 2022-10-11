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
              src={
                "https://ik.imagekit.io/oe4zrcmwdi5/image_d6mVfRGk2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665477775964"
              }
              alt="profile"
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
              <br />
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <h5 style={{ color: "grey" }}>Store Logo</h5>
                  <img
                    src="https://i.pinimg.com/736x/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg"
                    alt="store_logo"
                    height="100px"
                    width="100px"
                    objectFit="cover"
                  />
                </div>
                <div className="col-xl-6 col-lg-6">
                  <h5 style={{ color: "grey" }}>
                    Short Description about Store
                  </h5>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur
                  </h4>
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
