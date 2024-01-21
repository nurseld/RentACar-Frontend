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

const CarDetails = () => {
  const { id } = useParams();

  const [carDetail, setCarDetail] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/cars/getById/${id}`);
      console.log('Response:', response);
      setCarDetail(response.data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, [id]);


  // const singleCarItem = data.find((item) => item.carName === id);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [singleCarItem]);

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
                <h2 className="section__title">{carDetail.modelName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${carDetail.dailyPrice}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    {/* ({carDetail.rating} ratings) */}
                  </span>
                </div>

                <p className="section__description">
                  {/* {carDetail.description} */}
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
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {carDetail.speed} */}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {/* {carDetail.gps} */}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {/* {carDetail.seatType} */}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {carDetail.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
