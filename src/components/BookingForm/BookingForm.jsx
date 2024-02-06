import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./booking-form.css";
import { FormGroup } from "reactstrap";
import FormInput from "../FormInput/FormInput";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";


// const FormField = ({ type, name, placeholder }) => (
//     <FormGroup className="booking__form d-inline-block ms-1 me-1  ">
//         <Field type={type} name={name} placeholder={placeholder} />
//         <ErrorMessage name={name} component="div" className="error" />
//     </FormGroup>
// );

const BookingForm = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const initialValues = {

        pickUpLocation: "",
        dropOffLocation: "",
        startDate: "",
        endDate: ""


    };

    const validationSchema = Yup.object().shape({

        pickUpLocation: Yup.string().required("From Address is required"),
        dropOffLocation: Yup.string().required("To Address is required"),
        startDate: Yup.string().required("Start Date is required"),
        endDate: Yup.string().required("End Date is required"),

    });

    const onSubmit = async (values, { resetForm }) => {
        // Handle form submission logic here
        console.log("Form submitted with values:", values);
        try {
            const response = await axiosInstance.post(`rentals/add`, { ...values, userId: 9, carId: id });
            console.log('Response:', response);
            navigate("/order-complete", { state: { info: response.data, rental: values } })

        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="d-flex flex-wrap">
                    {/* Reusable FormField component for each input */}

                    <FormInput
                        formGroupClass="booking__form d-inline-block ms-1 me-1"
                        type="text" name="pickUpLocation" placeholder="Pick Up Location"
                    />
                    <FormInput
                        formGroupClass="booking__form d-inline-block ms-1 me-1"
                        type="text" name="dropOffLocation" placeholder="Drop Off Location"
                    />
                    <FormInput
                        formGroupClass="booking__form d-inline-block ms-1 me-1"
                        type="date" name="startDate" placeholder="Start Date"
                    />
                    <FormInput
                        formGroupClass="booking__form d-inline-block ms-1 me-1"
                        type="date" name="endDate" placeholder="End Date"
                    />

                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default BookingForm;