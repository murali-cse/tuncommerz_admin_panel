import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HorizontalScroll from "react-horizontal-scrolling";
// import MainBanner from "../assets/images/main-banner.png";
import Icons from "../components/Icons";

const Banners = () => {
  var images = [
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  ];

  return (
    <>
      <div className="m-4 p-3" style={{ backgroundColor: "white" }}>
        <h3 className="tz-bold">Banners</h3>
        <div>
          <Container>
            <Row>
              <Col>
                <h4 className="mt-3">Main Banner</h4>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Button>Add</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <HorizontalScroll>
                  {images.map((v) => {
                    return (
                      <div
                        className="mb-4 mt-4"
                        style={{
                          backgroundColor: "#DDDDDD",
                          width: "200px",
                          height: "200px",
                          aspectRatio: "1",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      >
                        <img
                          src={v}
                          alt="main banner"
                          style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                      </div>
                    );
                  })}
                </HorizontalScroll>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Banners;
