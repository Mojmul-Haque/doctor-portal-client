import React from "react";
import {useForm} from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("email"));
  return (
    <section className="contact-part">
      <div className="row text-center">
        <div className="contact-head">
          <h4 className="section-sub-title">Contact Us</h4>
          <h3 className="section-title">Always Conncext With Us</h3>
        </div>
      </div>
      <div className="row justify-content-center contact-form">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="error-handelar position-relative">
              <input
                className="form-control"
                {...register("email", {required: true})}
                placeholder="Your Email*"
              />
              {errors.email && (
                <span className="email-error">email required</span>
              )}
            </div>
            <div className="error-handelar position-relative">
              <input
                className="form-control"
                {...register("subject", {required: true})}
                placeholder="Your subject*"
              />
              {errors.subject && (
                <span className="subject-error">subject required</span>
              )}{" "}
            </div>
            <div className="error-handelar position-relative">
              <textarea
                resize="false"
                className="form-control message-box"
                {...register("textarea", {required: true})}
                placeholder="Your Message*"
              />
              {errors.textarea && (
                <span className="textarea-error">TextArea is required </span>
              )}
              <input
                type="submit"
                className="all-btn btn btn-warning d-block mt-3"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
