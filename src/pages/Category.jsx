// import React from "react";
import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
// import CatCard from "../components/CatCard";
import CenterModel from "../components/CenterModel";
import Icons from "../components/Icons";
import MUIDataTable from "mui-datatables";

const Category = () => {
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "company",
      label: "Company",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const options = {
    elevation: "0",
    filter: false,
    viewColumns: false,
    selectableRows: false,
  };

  return (
    <>
      <div className="p-5 m-4" style={{ backgroundColor: "white" }}>
        <div className="row">
          <h3 className="tz-bold d-none d-lg-block d-xl-block">
            Add Categories
          </h3>
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
                  <Icons.Upload />
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
                  {/* <CenterModel
                    // show={modalShow}
                    // onHide={() => setModalShow(false)}
                    title="Add Category"
                  /> */}
                  <Button className="mt-3">
                    <Icons.Add /> Add Category
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div className="row">
          <MUIDataTable
            title={"Category List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
