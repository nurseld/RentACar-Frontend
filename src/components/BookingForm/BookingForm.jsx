import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./booking-form.css";
import { FormGroup } from "reactstrap";
import FormInput from "../FormInput/FormInput";


// const FormField = ({ type, name, placeholder }) => (
//     <FormGroup className="booking__form__element d-inline-block  ">
//         <Field type={type} name={name} placeholder={placeholder} />
//         <ErrorMessage name={name} component="div" className="error" />
//     </FormGroup>
// );

const BookingForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        fromAddress: "",
        toAddress: "",
        journeyDate: "",
        journeyTime: "",
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: Yup.string()
            .typeError("Phone Number must be a number")
            .required("Phone Number is required"),
        fromAddress: Yup.string().required("From Address is required"),
        toAddress: Yup.string().required("To Address is required"),
        journeyDate: Yup.date().required("Journey Date is required"),
        journeyTime: Yup.string().required("Journey Time is required"),
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
            <Form className="booking__form">
                {/* <div className="d-flex flex-wrap"> */}
                {/* Reusable FormField component for each input */}
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="text" name="lastName" placeholder="Last Name"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="text" name="firstName" placeholder="First Name"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="email" name="email" placeholder="Email"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="text" name="phoneNumber" placeholder="Phone Number"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="text" name="fromAddress" placeholder="From Address"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="text" name="toAddress" placeholder="To Address"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="date" name="journeyDate" placeholder="Journey Date"
                />
                <FormInput
                    formGroupClass="booking__form__element d-inline-block"
                    type="time" name="journeyTime" placeholder="Journey Time"
                    className="time__picker"
                />
                {/* </div> */}
                {/* <button type="submit">Submit</button> */}
            </Form>
        </Formik>
    );
};

export default BookingForm;