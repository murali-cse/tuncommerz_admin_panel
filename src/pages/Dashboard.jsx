import React from "react";
import { Table } from "react-feather";
import Card1 from "../components/Card1";
import Navbar from "../components/Navbar";
import TimerCard from "../components/TimerCard";

const Dashboard = () => {
  const color = ["tale", "darkBlue", "lightBlue", "lightDanger"];

  return (
    <>
      <div className="m-4">
        <div className="row">
          <div className="col-12 col-xl-8 mb-xl-0 mt-4">
            <h3
              className="font-weight-bold"
              style={{ fontFamily: "sans-serif" }}
            >
              Welcome Amar
            </h3>
            <h6
              className="font-weight-light mb-4"
              style={{ fontFamily: "sans-serif" }}
            >
              Every day is a good day. There is something to learn, care and
              celebrate.
            </h6>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
            <TimerCard />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <Card1 title="Total Orders" value="100" color={color[0]} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <Card1 title="Total Customers" value="10" color={color[1]} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <Card1 title="Total Products" value="10" color={color[2]} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <Card1 title="Total Catogeries" value="10" color={color[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
