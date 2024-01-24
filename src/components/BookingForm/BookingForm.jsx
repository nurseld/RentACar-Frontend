import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./booking-form.css";
import { FormGroup } from "reactstrap";


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
        phoneNumber: Yup.number().typeError("Phone Number must be a number").required("Phone Number is required"),
        fromAddress: Yup.string().required("From Address is required"),
        toAddress: Yup.string().required("To Address is required"),
        journeyDate: Yup.date().required("Journey Date is required"),
        journeyTime: Yup.string().required("Journey Time is required"),
    });

    const onSubmit = (values, { resetForm }) => {

        console.log("Form submitted with values:", values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <FormGroup className="booking__form d-inline-block me-4 mb-4">
                    <Field type="text" name="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName" component="div" className="error" />
                </FormGroup>
                <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                    <Field type="text" name="lastName" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component="div" className="error" />
                </FormGroup>
                <FormGroup className="booking__form d-inline-block me-4 mb-4">
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />
                </FormGroup>
                <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                    <Field
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="error" />
                </FormGroup>
                <FormGroup className="booking__form d-inline-block me-4 mb-4">
                    <Field type="text" name="fromAddress" placeholder="From Address" />
                    <ErrorMessage name="fromAddress" component="div" className="error" />
                </FormGroup>
                <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                    <Field type="text" name="toAddress" placeholder="To Address" />
                    <ErrorMessage name="toAddress" component="div" className="error" />
                </FormGroup>

                <FormGroup className="booking__form d-inline-block me-4 mb-4">
                    <Field type="date" name="journeyDate" placeholder="Journey Date" />
                    <ErrorMessage name="journeyDate" component="div" className="error" />
                </FormGroup>
                <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                    <Field
                        type="time"
                        name="journeyTime"
                        placeholder="Journey Time"
                        className="time__picker"
                    />
                    <ErrorMessage name="journeyTime" component="div" className="error" />
                </FormGroup>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default BookingForm;