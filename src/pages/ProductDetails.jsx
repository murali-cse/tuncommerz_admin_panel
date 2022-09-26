import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // used to id from url
  // const { id } = useParams();

  const img =
    "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg";

  return (
    <>
      <div className="m-4">
        <h3 className="tz-bold p-0">Product Details</h3>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xl-6">
            <img
              src={img}
              alt="product_details"
              style={{ aspectRatio: "1", height: "200px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
