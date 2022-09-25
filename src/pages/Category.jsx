import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import CatCard from "../components/CatCard";
import CenterModel from "../components/CenterModel";
import Icons from "../components/Icons";
import NoDataFound from "../components/NoDataFound";

const Category = () => {
  const [modalShow, setModalShow] = useState(false);
  const cats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="p-5 m-4" style={{ backgroundColor: "white" }}>
        <div className="row">
          <h4 className="tz-bold">Add Categories</h4>
        </div>
        <div className="d-none d-lg-block d-xl-block">
          <div className="row"></div>
          <div className="row m-4">
            <Alert variant="warning">Image size should be below 2 MB!</Alert>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div
                className="p-4 mb-2"
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
                  <Icons.upload />
                  <h5 className="mt-3">Upload Image</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-6">
              <div className="row">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex. Fashion, Electronics, Home Appliances"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="row">
                <div>
                  <CenterModel
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title="Add Category"
                  />

                  <Button className="mt-3" onClick={() => setModalShow(true)}>
                    <Icons.add /> Add Category
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h4 className="tz-bold">Categories List</h4>
        </div>
        <div className="row">
          {cats.map((v) => {
            return (
              <div className="col">
                <CatCard />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
