import React, { useEffect, useState } from "react";
import './reservation.css'
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

const Reservation = () => {

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


    // const singleCarItem = data.find((item) => item.carName === id);

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [singleCarItem]);

    return (
        <Helmet title={carDetail.modelName}>
            <CommonSection title="Reservation" />
            <section>
                <Container className="reservation-page-container">
                    <Row className="d-flex justify-content-start">
                        <Col lg="6">
                            <img src={carDetail.imagePath} alt="" className="w-100" />
                        </Col>

                        <Col lg="6">
                            <div className="car__info">
                                <h2 className="section__title">{carDetail.brandName} {carDetail.modelName}</h2>

                                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent__price fw-bold fs-4">
                                        {carDetail.dailyPrice} ₺ / Gün
                                    </h6>

                                    <span className=" d-flex align-items-center gap-2">
                                        <span style={{ color: "crimson" }}>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            <i className="ri-star-s-fill"></i>
                                            &nbsp;&nbsp;5/5
                                        </span>
                                        {/* ({carDetail.rating} ratings) */}
                                    </span>
                                </div>

                                <p className="section__description">
                                    {/* {carDetail.description} */}
                                    Gövde Tipi: {carDetail.bodyType}
                                </p>

                                <div
                                    className=" d-flex align-items-center mt-3"
                                    style={{ columnGap: "4rem" }}
                                >
                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            className="ri-road-map-line"
                                            style={{ color: "crimson" }}
                                        ></i>{" "}
                                        {carDetail.kilometer} Km
                                    </span>


                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            className="ri-settings-2-line"
                                            style={{ color: "crimson" }}
                                        ></i>{" "}
                                        {/* {carDetail.automatic} */}
                                        Vites Tipi: {carDetail.gearType}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            className="ri-pantone-line"
                                            style={{ color: "crimson" }}
                                        ></i>{" "}
                                        Renk: {carDetail.colorName}
                                    </span>
                                </div>

                                <div
                                    className=" d-flex align-items-center mt-3"
                                    style={{ columnGap: "2.8rem" }}
                                >
                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            className="ri-arrow-right-double-line"
                                            style={{ color: "crimson" }}
                                        ></i>{" "}
                                        Yakıt Tipi: {carDetail.fuelType}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            className="ri-arrow-right-double-line"
                                            style={{ color: "crimson" }}
                                        ></i>{" "}
                                        {/* {carDetail.speed} */}
                                        Model Yılı: {carDetail.year}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            className="ri-arrow-right-double-line"
                                            style={{ color: "crimson" }}
                                        ></i>{" "}
                                        Plaka: {carDetail.plate}
                                    </span>
                                </div>
                            </div>
                            <div className="payment__info mt-5">
                                <h5 className="mb-0 fw-bold text-end">Ödeme Seçenekleri</h5>
                                <PaymentMethod carId={carDetail.id} />
                            </div>
                        </Col>

                        {/* <Col lg="7" className="mt-5">
                            <div className="booking-info mt-5">
                                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                                <BookingForm />
                            </div>
                        </Col> */}

                        <Col lg="5" className="ms-auto me-5">

                        </Col>

                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Reservation;
