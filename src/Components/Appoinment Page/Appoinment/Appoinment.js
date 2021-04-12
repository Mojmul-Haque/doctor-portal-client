import React, {useState} from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/NavBar/NavBar";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import BookAppoinment from "../BookAppoinment/BookAppoinment";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Navbar />
      <AppoinmentBanner handleChangeDate={handleChangeDate} />
      <BookAppoinment date={selectedDate} />
      <Footer />
    </>
  );
};

export default Appoinment;
