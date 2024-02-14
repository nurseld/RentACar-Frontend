import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./car-item.css";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


const CarItem = (props) => {

  const authState = useSelector((store) => store.auth);

  const test = async () => {
    if (authState.id !== 0) {
      // toast.success("olduuuuuuuu <33333")
    } else {
      // navigate("/login")
      toast.error("Üye girişi yapmalısınız!")
    }

  }

  const { id, modelName, colorName, year, dailyPrice, imagePath, brandName } = props.item;

  return (
    <Col xl="4" lg="6" md="6" sm="12" className="mb-5">
      <div className="car__item" key={id}>
        <div className="car__img">
          <img src={imagePath} alt="not found" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{brandName}</h4>
          <h6 className="rent__price text-center mt-">
            {dailyPrice}₺ <span>/ Gün</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {modelName}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {colorName}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {year}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/reservation/${id}`} onClick={test}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
