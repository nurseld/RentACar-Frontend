import React, { useState } from "react";
import "./find-car-form.css";
import "./find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import FormInput from "../FormInput/FormInput";

const FindCarForm = () => {

  const [dateInputType, setDateInputType] = useState("text");

  const activateDateInput = () => {
    setDateInputType("date");
  };

  const deactivateDateInput = () => {
    setDateInputType("text");
  };

  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">

        <FormInput name="from-address" placeholder="From address" formGroupClass="form__group" required />
        <FormInput name="to-address" placeholder="To address" formGroupClass="form__group" required />

        <FormInput
          name="journey-date"
          inputClass="form-control"
          type={dateInputType}
          placeholder="Journey Dateeeeee"
          id="date"
          onFocus={activateDateInput}
          onBlur={deactivateDateInput}
          pattern="\d{2}\d{2}\d{4}"
          formGroupClass="form__group"
        />

        <FormInput
          inputClass="journey__time"
          type="time"
          placeholder="Journey time"
          formGroupClass="form__group"
          required
        />

        {/* <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup> */}

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
