import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Screen1 from "../assets/images/screen_1.png";
import Screen2 from "../assets/images/screen_2.png";
import Screen3 from "../assets/images/screen_3.png";
import Screen4 from "../assets/images/screen_4.png";
import Mail1 from "../mail/mail1/Mail1";

const SendMail = () => {
  const arr = [
    {
      image: Screen1,
      link: "https://votto-electric-store.myshopify.com/",
    },
    {
      image: Screen2,
      link: "https://wp.alithemes.com/html/nest/demo/index.html",
    },
    {
      image: Screen3,
      link: "https://themes.pixelstrap.com/fastkart/html/index-5.html",
    },
    {
      image: Screen4,
      link: "https://flone.jamstacktemplates.dev/home-fashion-three",
    },
  ];

  return (
    <>
      <div className="ms-5 me-5">
        <div className="row">
          {arr.map((v, i) => {
            return (
              <div className="col-lg-4 mt-5">
                <div style={{ textAlign: "center" }}>
                  <img
                    src={v.image}
                    alt={`screen image ${i}`}
                    style={{
                      aspectRatio: "16/9",
                      height: "100%",
                      width: "100%",
                      marginBottom: "1rem",
                    }}
                  />
                  <Button style={{ borderRadius: "0" }}>
                    <Link
                      to={"/mail1"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      View Template
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SendMail;
