import React, { useState } from "react";
import "./find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import FormInput from "../FormInput/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";

const FindCarForm = () => {
  const [dateInputType, setDateInputType] = useState("text");

  const activateDateInput = () => {
    setDateInputType("date");
  };

  const deactivateDateInput = () => {
    setDateInputType("text");
  };

  const initialValues = {
    // fromAddress: "",
    // toAddress: "",
    startDate: "",
    endDate: "",

  };

  const validationSchema = Yup.object().shape({
    // fromAddress: Yup.string().required("From Address is required"),
    // toAddress: Yup.string().required("To Address is required"),
    startDate: Yup.date().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          {/* <FormInput
            name="fromAddress"
            placeholder="From address"
            formGroupClass="form__group"

          /> */}

          {/* <FormInput
            name="toAddress"
            placeholder="To address"
            formGroupClass="form__group"

          /> */}

          <FormInput
            name="startDate"
            inputClass="form-control"
            type="date"
            placeholder="Start Date"
            id="date"
            onFocus={activateDateInput}
            onBlur={deactivateDateInput}
            pattern="\d{2}\d{2}\d{4}"
            formGroupClass="form__group"
          />

          <FormInput
            name="endDate"
            inputClass="form-control"
            type="date"
            placeholder="End Date"
            formGroupClass="form__group"

          />

          {/* Add a select input for car type */}
          {/* <FormInput
            name="car-type"
            inputClass="select"
            type="select"
            formGroupClass="form__group"
          >
            <select>
              <option value="ac">AC Car</option>
              <option value="non-ac">Non AC Car</option>
            </select>
          </FormInput> */}

          <FormGroup className="form__group">
            <button className="btn find__car-btn">Find Car</button>
          </FormGroup>
        </div>
      </Form>
    </Formik>
  );
};

export default FindCarForm;