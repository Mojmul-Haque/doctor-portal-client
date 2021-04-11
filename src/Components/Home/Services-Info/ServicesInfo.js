import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const ServicesInfo = ({info}) => {
  const {imgIcon, title, description} = info;
  return (
    <div className="col-lg-4">
      <div className="service-info">
        <img src={imgIcon} alt="imgIcon" />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesInfo;
