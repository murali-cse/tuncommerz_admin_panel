import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import moment from "moment";

const TimerCard = () => {
  const [timer, setTimer] = useState("00:00");
  const [day, setDay] = useState("");

  useEffect(() => {
    let date = new Date();
    setTimer(moment(date).format("hh:mm A"));
    setDay(moment(date).format("dddd"));
  });

  setInterval(() => {
    let date = new Date();
    setTimer(moment(date).format("hh:mm A"));
  }, 1000);

  return (
    <>
      <div className="card tale-bg mb-4">
        <div className="card-people mt-auto">
          <img
            src="https://www.bootstrapdash.com/demo/skydash/template/images/dashboard/people.svg"
            alt="people"
          />
          <div className="weather-info" style={{ fontFamily: "sans-serif" }}>
            <div className="d-flex">
              <div>
                <h2 className="font-weight-normal">
                  <Icons.sun />
                </h2>
              </div>
              <br />
              <div className="ms-1 text-end">
                <h4 className="location font-weight-normal">{timer}</h4>
                <h6 className="font-weight-normal">{day}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerCard;
