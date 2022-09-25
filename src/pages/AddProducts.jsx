import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

import Icons from "../components/Icons";
import SmallImageCard from "../components/SmallImageCard";

const AddProducts = () => {
  const [showDiscount, setShowDiscount] = useState(false);

  return (
    <>
      <div className="m-4 pb-3 pe-3" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <h3 className="p-4 tz-bold">Add Product</h3>
            <div className="col-lg-3">
              <div className="row">
                <div
                  className="mb-4 mt-4 mx-4"
                  style={{
                    backgroundColor: "#DDDDDD",
                    width: "200px",
                    aspectRatio: "1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="row text-center">
                    <Icons.Upload />
                    <h5 className="mt-3">Upload Image</h5>
                  </div>
                </div>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <SmallImageCard />
                <SmallImageCard />
                <SmallImageCard />
              </div>
              <div className="mt-5 mb-3">
                <h4 className="tz-bold">Visibility</h4>
              </div>
              <div className="row">
                <Form className="mx-2 my-2">
                  <div className="pt-1">
                    <Form.Check
                      type="radio"
                      name="visibility_group"
                      id={`default-radio`}
                      label="Publish"
                      className="mb-2"
                    />
                  </div>
                  <div className="pt-2">
                    <Form.Check
                      type="radio"
                      name="visibility_group"
                      id={`default-radio1`}
                      label="Hide"
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-lg-9">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Product Name<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Category<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select style={{ padding: "1rem" }}>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Description<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Product Description"
                  />
                </Form.Group>
                <Alert variant="warning">
                  If you want to add more color or size please add as new
                  variant.
                </Alert>
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "1rem",
                  }}
                >
                  <h4 className="tz-bold p-0">Variant</h4>
                  <Button className="btn-inverse-info"> Add Variant </Button>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        SKU<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="No of stocks"
                        onChange={(e) => {
                          if (e.target.value < 0) {
                            e.target.value = 0;
                          }
                        }}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>No of stocks (optional)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="No of stocks"
                        onChange={(e) => {
                          if (e.target.value < 0) {
                            e.target.value = 0;
                          }
                        }}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Color (optional)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Color of the product"
                      />
                      <Form.Text style={{ color: "red" }}>
                        Don't add more than one color !
                      </Form.Text>
                    </Form.Group>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Size (optional)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Size of the product"
                      />
                      <Form.Text style={{ color: "red" }}>
                        Don't add more than one Size !
                      </Form.Text>
                    </Form.Group>
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        Price<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Price"
                        onChange={(e) => {
                          if (e.target.value < 0) {
                            e.target.value = 0;
                          }
                        }}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Form.Check
                      type="checkbox"
                      label="Product have offer?"
                      id="discount_checkbox"
                      className="tz-form-input-center"
                      onChange={(e) => {
                        setShowDiscount(e.target.checked);
                      }}
                    />
                  </div>
                </div>
                <div className={showDiscount ? "row d-block" : "row d-none"}>
                  <div className="col-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        Discount Price<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Price"
                        onChange={(e) => {
                          if (e.target.value < 0) {
                            e.target.value = 0;
                          }
                        }}
                      />
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
