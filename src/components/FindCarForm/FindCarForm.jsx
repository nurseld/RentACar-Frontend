import React, { useState } from "react";
import "./find-car-form.css";
import { FormGroup } from "reactstrap";
import FormInput from "../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loadRental } from "../../store/rental/rentalSlice";


const FindCarForm = () => {
  const [dateInputType, setDateInputType] = useState("text");

  const authState = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

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
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    // Handle form submission logic here

    console.log("Form submitted with values:", values);



    try {
      const response = await axiosInstance.post(`cars/getAvailableCars`, { ...values });
      console.log('Response:', response);
      dispatch(loadRental(values))
      navigate("/rentable-cars", { state: { cars: response.data } })
    } catch (error) {
      console.error('Veri çekme hatası:', error);
      toast.error(error.response.data.message)
    }
    resetForm();
  };


  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCity2, setSelectedCity2] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const handleCityChange2 = (event) => {
    setSelectedCity2(event.target.value);
  };

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      <Form className="form">
        <div className="d-flex align-items-center justify-content-between flex-wrap">

          {/* <div className="booking__form d-inline-block ms-1 me-1">
            <h2>Pick Up Location</h2>
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">Şehir Seçiniz</option>
              <option value="Kadıköy">Kadıköy</option>
              <option value="Maltepe">Maltepe</option>
              <option value="Bahçeşehir">Bahçeşehir</option>
              <option value="Ataşehir">Ataşehir</option>
            </select>
            <p>Seçili Şehir: {selectedCity}</p>
          </div> */}
          {/* <div className="booking__form d-inline-block ms-1 me-1">
            <h2>Drop Off Location</h2>
            <select value={selectedCity2} onChange={handleCityChange2}>
              <option value="">Şehir Seçiniz</option>
              <option value="Kadıköy">Kadıköy</option>
              <option value="Maltepe">Maltepe</option>
              <option value="Bahçeşehir">Bahçeşehir</option>
              <option value="Ataşehir">Ataşehir</option>
            </select>
            <p>Seçili Şehir: {selectedCity2}</p>
          </div> */}
          <FormInput

            formGroupClass="booking__form d-inline-block ms-1 me-1"
            type="date" name="startDate" placeholder="Start Date"
          />
          <FormInput
            formGroupClass="booking__form d-inline-block ms-1 me-1"
            type="date" name="endDate" placeholder="End Date"
          />

          <FormGroup className="form__group">
            <button type="submit" className="btn find__car-btn">Find Car</button>
          </FormGroup>
        </div>
      </Form>
    </Formik>
  );
};

export default FindCarForm;