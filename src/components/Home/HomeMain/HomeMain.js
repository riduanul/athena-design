import React from "react";
import "./HomeMain.css";
import HeaderImg from "../../../images/16 [Converted]@2x.png";
const HomeMain = () => {
  return (
    <div className="HomeMain">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mainDescription">
            <h1 className="mainTitle mb-3 ">Florence agency</h1>
            <p className="mb-4 text-muted">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="pricingBtn contactBtn">See Pricing</button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img className="HeaderImg" src={HeaderImg} alt="HeaderImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
