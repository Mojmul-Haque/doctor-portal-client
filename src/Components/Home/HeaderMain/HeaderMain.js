import React from "react";
import BannerChair from "../../../images/banner-chair.png";
const HeaderMain = () => {
  return (
    <main className="container">
      <div className="container">
        <div className="row align-items-center header-main">
          <div className="col-md-5 offset-lg-1">
            <h1 className="fw-bold">
              Your New Smile <span className="d-block">Starts Here</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ut voluptate nulla obcaecati vel voluptatem autem nemo facilis
              debitis numquam.
            </p>
            <button className="btn-primary btn">GET APPOINTMENT</button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid w-100" src={BannerChair} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
