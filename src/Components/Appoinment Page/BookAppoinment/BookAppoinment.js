import React from "react";
import AvailableSeat from "../AvailableSeat/AvailableSeat";
import './BookApoinment.css'

const BookAppoinment = ({date}) => {
  const availableAppoinment = [
    {
      _id: 1,
      subject: "teeth orthodontics",
      apointmentTime: "8:00 AM - 9:00 AM",
      availableSpace: 10,
    },
    {
      _id: 2,
      subject: "cosmetic dentistry",
      apointmentTime: "10:05 AM - 11:30 AM",
      availableSpace: 10,
    },
    {
      _id: 3,
      subject: "teeth cleaning",
      apointmentTime: "5:00 PM - 9:00 PM",
      availableSpace: 10,
    },
    {
      _id: 4,
      subject: "cavity protection",
      apointmentTime: "7:00 AM - 8:30 AM",
      availableSpace: 10,
    },
    {
      _id: 5,
      subject: "teeth orthodontics",
      apointmentTime: "8:00 AM - 9:00 AM",
      availableSpace: 10,
    },
    {
      _id: 6,
      subject: "teeth orthodontics",
      apointmentTime: "8:00 AM - 9:00 AM",
      availableSpace: 10,
    },
  ];
  console.log(date);
  return (
    <section className="container appoinment-part text-center">
      <div className="row">
        <h3 className="brand-color">Availablle Appoiment on {date.toDateString()}</h3>
      </div>
      <div className="row appoinment-inner">
        {availableAppoinment.map((availableSeat) => (
          <AvailableSeat availableSeat={availableSeat} key={availableSeat._id} />
        ))}
      </div>
    </section>
  );
};

export default BookAppoinment;
// 2500+2000+1600+
