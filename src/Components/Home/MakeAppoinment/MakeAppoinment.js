import React from "react";
import appointmentImg from "../../../images/appointemntDoctor.png";
import "./MakeAppoinment.css";

const MakeAppoinment = () => {
  return (
    <section className="container appointment-part position-relative">
      <div className="row">
        <div className="col-lg-5">
          <div className="appointment-img">
            <img
              className="img-fluid"
              src={appointmentImg}
              alt="appointmentImg"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="appoinment-content">
            <h4 className=".section-sub-title">Appoinment</h4>
            <h3 className="section-title">Make An Appoinment Today</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              expedita eum, voluptatem dolore similique qui delectus. Illum,
              assumenda rerum ab possimus sapiente consequatur adipisci
              consequuntur saepe
            </p>
            <button className="all-btn btn btn-warning">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
