import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SmallImageCard from "../components/SmallImageCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SmallColorCard = (color) => {
  return (
    <div
      style={{
        backgroundColor: color,
        paddingRight: "7%",
        paddingTop: "3%",
        maxWidth: "10px",
        maxHeight: "5px",
        marginTop: "1%",
        marginRight: "1%",
      }}
    ></div>
  );
};

const ProductDetails = () => {
  // used to id from url
  // const { id } = useParams();

  const img =
    "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg";

  const smallImage = [
    "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg",
    "https://cdn.pocket-lint.com/r/s/485x/assets/images/154305-phones-review-apple-iphone-12-review-product-shots-image3-vozu39v2jx.jpg",
    "https://bgr.com/wp-content/uploads/2021/07/apple-iphone-12-6.jpg?quality=82&strip=all&w=1440&h=810&crop=1",
  ];

  const colors = ["#F96666", "#400D51", "#FF577F"];

  const sizes = ["128", "256", "512"];

  return (
    <>
      <div className="m-4">
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <h3
            className="tz-bold p-0 mb-4 mt-2"
            style={{ fontFamily: "sans-serif" }}
          >
            Product Details
          </h3>
          <div>
            <Button
              style={{
                borderRadius: "0",
                fontWeight: "bold",
                width: "10rem",
                marginRight: "10px",
                backgroundColor: "#d8392b",
                borderColor: "transparent",
                opacity: "0.9",
              }}
            >
              Delete
            </Button>
            <Button
              style={{ borderRadius: "0", fontWeight: "bold", width: "10rem" }}
            >
              Edit
            </Button>
          </div>
        </div>
        <div className="row ps-4 mt-3">
          <div className="col-lg-4 col-md-4 col-xl-4">
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
            >
              {smallImage.map((v) => {
                return (
                  <div>
                    <img
                      src={v}
                      style={{ aspectRatio: "1", objectFit: "cover" }}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="col-lg-8 col-md-8 col-xl-8">
            <div style={{ paddingRight: "5%" }}>
              <h3 className="tz-bold" style={{ lineHeight: "2rem" }}>
                Apple iPhone SE (128 GB) - (Product) RED (3rd Generation)
              </h3>
              <br />
              <h3 className="tz-bold" style={{ color: "#038141" }}>
                ₹ 50000
              </h3>
              <br />
              <h5 className="tz-bold">Description :</h5>
              <h6 style={{ textAlign: "justify", paddingLeft: "10px" }}>
                Proin eget tortor risus. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem. Pellentesque in ipsum id orci
                porta dapibus. Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Proin eget tortor risus.
              </h6>
              <br />
              <h5 className="tz-bold">Category :</h5>
              <h6 style={{ textAlign: "justify", paddingLeft: "10px" }}>
                Electronics
              </h6>
              <br />
              <h5 className="tz-bold">Colors :</h5>
              <div style={{ display: "flex", paddingLeft: "10px" }}>
                {colors.map((v) => SmallColorCard(v))}
              </div>
              <br />
              <h5 className="tz-bold">Sizes :</h5>
              <h6 style={{ textAlign: "justify", paddingLeft: "10px" }}>
                128 GB, 256 GB, 512 GB
              </h6>
              <br />
              <h5 className="tz-bold">Total no of stocks :</h5>
              <h6 style={{ textAlign: "justify", paddingLeft: "10px" }}>10</h6>
              <br />
              <h5 className="tz-bold">Status :</h5>
              <h6 style={{ textAlign: "justify", paddingLeft: "10px" }}>
                Active
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
