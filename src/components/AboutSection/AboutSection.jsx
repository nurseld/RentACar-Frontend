import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to 2G0 Car Rental Service</h2>
              <p className="section__description">
              Your journey matters to us at 2G0 Car Rental Service. Experience hassle-free car rental and excellent customer service that sets us apart from the rest. We offer vehicles suitable for your needs at the most affordable prices.Our user-friendly app simplifies the reservation process, showcasing a diverse fleet of vehicles for a comfortable and wallet-smart journey, ensuring you feel financially empowered throughout your trip.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Exceptional Top-Notch Service Experience
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> User-friendly Booking System
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Diverse Vehicle Selection
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Transparently Affordable Comfort
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
