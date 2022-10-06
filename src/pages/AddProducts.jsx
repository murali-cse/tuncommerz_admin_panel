import React, { useState } from "react";
import { Alert, Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { ChromePicker } from "react-color";
import Icons from "../components/Icons";
import SmallImageCard from "../components/SmallImageCard";
import "../css/style.css";

const AddProducts = () => {
  const [showDiscount, setShowDiscount] = useState(false);
  const [colorPicker, setColorPicker] = useState("#000000");
  const [showRefund, setShowRefund] = useState(false);

  const smallImage = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
    "https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?b=1&k=20&m=1361394182&s=170667a&w=0&h=cW_NDV-D-jrWBVcEPclIU9vRipFQZQC0armvGMN7w-c=",
    "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  ];

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Choose Color</Popover.Header>
      <Popover.Body>
        <ChromePicker
          color={colorPicker}
          disableAlpha={true}
          onChangeComplete={(color) => {
            setColorPicker(color.hex);
            console.log(colorPicker);
          }}
        />
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className="m-4 pb-3 pe-3" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <h3 className="p-4 tz-bold">Add Product</h3>
            <div className="col-lg-3">
              <div className="row">
                <div className="d-flex justify-content-center">
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
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <SmallImageCard img={smallImage[0]} />
                <SmallImageCard img={smallImage[1]} />
                <SmallImageCard img={smallImage[2]} />
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
                  <div className="pt-2 mb-4">
                    <Form.Check
                      type="radio"
                      name="visibility_group"
                      id={`default-radio1`}
                      label="Hide"
                    />
                  </div>
                </Form>
              </div>
              <div className="d-flex justify-content-center mt-4 mb-3 d-none d-lg-block d-xl-block d-md-block">
                <Button style={{ width: "95%" }}>SUBMIT</Button>
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
                <div className="row">
                  <div className="col-lg-6 col-xl-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        Shipping Fee<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control type="number" placeholder="Shipping Fee" />
                    </Form.Group>
                  </div>
                  <div className="col-lg-6 col-xl-6">
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Able to refund the amount?
                        <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Select
                        style={{ padding: "1rem" }}
                        onChange={(val) => {
                          setShowRefund(val.target.value === "yes");
                        }}
                      >
                        <option>Select yes or no</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                {showRefund === true ? (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Product refund period (in days)
                      <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control type="number" placeholder="5" />
                  </Form.Group>
                ) : (
                  false
                )}

                <br />
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
                        type="text"
                        placeholder="SKU"
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
                      <div className="row">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignSelf: "baseline",
                          }}
                        >
                          <div className="col-lg-2">
                            <div
                              style={{
                                backgroundColor: colorPicker,
                                height: "100%",
                                width: "auto",
                              }}
                            ></div>
                          </div>
                          <div className="col-lg-10">
                            <OverlayTrigger
                              trigger="click"
                              placement="right"
                              overlay={popover}
                              rootClose={true}
                            >
                              <Form.Control
                                type="text"
                                placeholder={colorPicker}
                                value={colorPicker}
                                readOnly={true}
                                style={{ backgroundColor: "white" }}
                              />
                            </OverlayTrigger>
                          </div>
                        </div>
                      </div>
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
                        Discount (%)<span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="10%"
                        onChange={(e) => {
                          if (e.target.value < 0) {
                            e.target.value = 0;
                          }

                          if (e.target.value > 100) {
                            e.target.value = 100;
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
