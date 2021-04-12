import React from "react";
import {useForm} from "react-hook-form";
const AvailableSeat = ({availableSeat}) => {
  const {subject, apointmentTime, availableSpace} = availableSeat;
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="col-lg-4">
      <div className="available-seat shadow text-center">
        <h4 className="brand-color text-capitalize">{subject}</h4>
        <h5>{apointmentTime}</h5>
        <p>{availableSpace} space available</p>

        <button
          type="button"
          className="btn btn-success all-btn"
          data-bs-toggle="modal"
          data-bs-target="#bookApoinment"
        >
          Book Now
        </button>

        <div
          className="modal fade"
          id="bookApoinment"
          tabIndex="-1"
          aria-labelledby="bookApoinmentLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h4>{subject}</h4>
                <div className="form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                      className="form-control my-2"
                      {...register("SelectTime", {required: true})}
                    >
                      <option value="">Select Time </option>
                      <option value={apointmentTime}> {apointmentTime}</option>
                      <option value={apointmentTime}> {apointmentTime}</option>
                      <option value={apointmentTime}> {apointmentTime}</option>
                      <option value={apointmentTime}> {apointmentTime}</option>
                      <option value={apointmentTime}> {apointmentTime}</option>
                      <option value={apointmentTime}> {apointmentTime}</option>
                      {/* <option value="8:00-9:00">8:00 AM-9:00 AM </option>
                      <option value="8:00-9:00">8:00 AM-9:00 AM </option>
                      <option value="8:00-9:00">8:00 AM-9:00 AM </option>
                      <option value="10:05 PM-11:30">10:05 PM-11:30</option> */}
                    </select>
                    <input
                      placeholder="Your Name"
                      className="form-control my-2"
                      {...register("name", {
                        required: "name is required",
                        message: "name is required",
                      })}
                    />
                    <input
                      placeholder="Phone Number"
                      className="form-control my-2"
                      {...register("phoneNumber", {
                        required: true,
                        valueAsNumber: true,
                      })}
                    />
                    <input
                      placeholder="Your 
                    Email"
                      className="form-control my-2"
                      {...register("email", {required: true})}
                    />
                    <input
                      className="form-control my-2"
                      type="date"
                      {...register("date", {required: true, valueAsDate: true})}
                    />
                    <input
                      className="form-control btn-warning my-2"
                      type="submit"
                      value="Send"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSeat;
