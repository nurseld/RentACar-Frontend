import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "./payment-method.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteRental } from "../../store/rental/rentalSlice";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const rentalState = useSelector((store) => store.rental);
  const authState = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const onSubmit = async () => {
    // Handle form submission logic here
    console.log("Form submitted with values:");
    try {
      if (authState.id !== 0) {
        const response = await axiosInstance.post(`rentals/add`, { startDate: rentalState.startDate, endDate: rentalState.endDate, userId: authState.id, carId: rentalState.carId });
        dispatch(deleteRental())
        navigate("/order-complete", { state: { info: response.data, rental: { startDate: rentalState.startDate, endDate: rentalState.endDate, userId: authState.id, carId: rentalState.carId } } })
      } else {
        // navigate("/login")
        toast.error("Üye girişi yapmalısınız!")
      }


    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Havale & EFT
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Online Kredi Kartı
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />Araç Tesliminde Banka Kartı
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Araç Tesliminde Kredi Kartı
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button type="button" onClick={onSubmit}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
