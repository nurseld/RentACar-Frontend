import React from "react";
import "./booking-form.css";
import { Form, FormGroup } from "reactstrap";
import FormInput from "../FormInput/FormInput";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormInput name="first-name" placeholder="First Name" formGroupClass="booking__form d-inline-block me-4 mb-4" />
      <FormInput name="last-name" placeholder="Last Name" formGroupClass="booking__form d-inline-block ms-1 mb-4" />
      <FormInput type="email" name="email" placeholder="Email" formGroupClass="booking__form d-inline-block me-4 mb-4" />
      <FormInput name="phone-number" placeholder="Phone Number" formGroupClass="booking__form d-inline-block ms-1 mb-4" />
      <FormInput name="from-address" placeholder="From Address" formGroupClass="booking__form d-inline-block me-4 mb-4" />
      <FormInput name="to-address" placeholder="To Address" formGroupClass="booking__form d-inline-block ms-1 mb-4" />
      <FormInput type="date" name="journey-date" placeholder="Journey Date" formGroupClass="booking__form d-inline-block me-4 mb-4" />
      <FormInput type="time" name="journey-time" placeholder="Journey Time" formGroupClass="booking__form d-inline-block ms-1 mb-4" inputClass="time__picker" />
    </Form>
  );
};

export default BookingForm;
