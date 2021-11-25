import React from "react";
import "./Services.css";
import servicephoto from "../../../images/Group 65@2x.png";
import servicephoto1 from "../../../images/Group 66@2x.png";
import servicephoto2 from "../../../images/Group 69@2x.png";
import servicephoto3 from "../../../images/Group 72@2x.png";

const Services = () => {
  return (
    <div className="container mt-5 services-bg">
      <h1 style={{ fontWeight: 900 }}>What we do</h1>
      <small className="text-muted">
        Our main focus is to make the user experience very <br /> simple and
        easy. Simplicity is our strength.
      </small>
      <div className="row text-center mt-5 ">
        <div className="col-sm-12 col-md-6 col-lg-3 service">
          <img src={servicephoto} alt="" />
          <h4 className="mt-2">Experience Design</h4>
          <small className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at
            similique sint ratione .
          </small>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service">
          <img src={servicephoto1} alt="" />
          <h4 className="mt-2">Interface Design</h4>
          <small className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at
            similique sint ratione{" "}
          </small>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service">
          <img src={servicephoto2} alt="" />
          <h4 className="mt-2">Prototyping</h4>
          <small className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at
            similique sint ratione{" "}
          </small>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service">
          <img src={servicephoto3} alt="" />
          <h4 className="mt-2">Illustration</h4>
          <small className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at
            similique sint ratione.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Services;
