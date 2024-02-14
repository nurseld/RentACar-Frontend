import React, { useEffect, useState } from "react";

import carData from "../../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import CommonSection from "../../components/CommonSection/CommonSection";
import axios from "axios";
import CarItem from "../../components/CarItem/CarItem";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";

const CarDetails = () => {
  const { id } = useParams();

  const [carDetail, setCarDetail] = useState({});

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`cars/getById/${id}`);
      console.log('Response:', response);
      setCarDetail(response.data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, [id]);


  return (
    <Helmet title={carDetail.modelName}>
      <CommonSection title="CarDetails" />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={carDetail.imagePath} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{carDetail.brandName} {carDetail.modelName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {carDetail.dailyPrice}₺ / Day
                  </h6>
                </div>

                <p className="section__description">
                  {/* {carDetail.description} */}
                  {carDetail.colorName}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {carDetail.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {carDetail.automatic} */}
                    {carDetail.kilometer}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {carDetail.speed} */}
                    {carDetail.year}
                  </span>
                </div>
              </div>
            </Col>




          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
