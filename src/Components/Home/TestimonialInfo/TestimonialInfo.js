import React from "react";

const TestimonialInfo = ({info}) => {
  return (
    <div className="col-lg-4">
      <div className="patient-review shadow">
        <div className="tetsi-head">
          <p>{info.review}</p>
        </div>
        <figure className="tetsi-inner d-flex align-items-center">
          <div className="testi-img">
            <img className="img-fluid" src={info.image} alt="" />
          </div>
          <figcaption className="testi-content">
            <h6>{info.name}</h6>
            <p>{info.address}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default TestimonialInfo;
