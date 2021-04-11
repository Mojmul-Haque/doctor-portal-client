import React from "react";
import "./infocard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const InfoCard = ({info}) => {
  console.log(info);
  const {background, title, icon, description} = info;
  console.log(icon);
  return (
    <>
      <div className="col-lg-4">
        <div
          style={{background: `${background}`}}
          className="main-card d-flex align-items-center text-white rounded"
        >
          <div className="card-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="card-text">
            <h5 className="text-white fw-bold">{title}</h5>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
