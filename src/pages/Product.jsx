import React from "react";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const img =
    "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png";

  const list = new Array(7).fill(1);

  return (
    <>
      <div className="m-4">
        <h3 className="tz-bold mb-4">Products</h3>
        <div className="row">
          {list.map((v, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4">
                <ProductCard
                  title={"Product Title"}
                  desc="Some quick example text to build on the card title and make up the
                bulk of the card's content."
                  image={img}
                  price="₹ 50,000"
                  discountPrice={"₹ 50,000"}
                  discount="50%"
                  stock={i > 2 ? "In Stock" : "Out of Stock"}
                  status={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
