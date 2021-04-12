import React from "react";
import BannerChair from "../../../images/banner-chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppoinmentBanner = ({handleChangeDate}) => {
  return (
    <main className="container">
      <div className="container">
        <div className="row align-items-center header-main">
          <div className="col-md-5 offset-lg-1">
            <h1 className="fw-bold">Appoinment</h1>
            <Calendar onChange={handleChangeDate} value={new Date()} />
          </div>
          <div className="col-md-6">
            <img className="img-fluid w-100" src={BannerChair} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppoinmentBanner;
