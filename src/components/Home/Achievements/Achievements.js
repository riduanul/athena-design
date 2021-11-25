import React from "react";
import "./Achievements.css";
import logo1 from "../../../images/happy@2x.png";
import logo2 from "../../../images/marketing@2x.png";
import logo3 from "../../../images/surface1@2x.png";
import logo4 from "../../../images/transportation@2x.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
  AOS.init({ duration: 450 });
  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="row">
        <div className="col-md-4 text-margin ">
          <h2 style={{ textAlign: "center", fontWeight: 900 }}>
            Our Achievements
          </h2>
          <small className="text-muted" style={{ textAlign: "left" }}>
            sit amet consectetur adipisicing elit. Nam nulla voluptates dolorum
            mollitia dolores architecto necessitatibus, officia ipsam ipsa.
            Distinctio vitae tenetur fugit deserunt deleniti.{" "}
          </small>
        </div>
        <div className="col-md-8 pl-5">
          <div className="row">
            <div
              className="col-md-5 d-flex align-items-center active radius2 gap "
              data-aos="flip-up"
            >
              <div>
                <img src={logo1} alt="logo1" />
              </div>
              <div>
                <h1>700+</h1>
                <p>Happy Clients</p>
              </div>
            </div>
            <div
              className="col-md-5 d-flex align-items-between first radius1 gap  "
              data-aos="flip-up"
            >
              <div className="p-2">
                <img src={logo2} alt="logo2" />
              </div>
              <div>
                <h1>140+</h1>
                <p>Projects completed</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-5 d-flex align-items-center first  radius1 gap"
              data-aos="flip-down"
            >
              <div>
                <img src={logo3} alt="logo3" />
              </div>
              <div>
                <h1>25+</h1>
                <p>Crazy Minds</p>
              </div>
            </div>
            <div
              className="col-md-5 d-flex align-items-center  first radius2 gap"
              data-aos="flip-down"
            >
              <div>
                <img src={logo4} alt="logo4" />
              </div>
              <div>
                <h1>75+</h1>
                <p>Running Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
