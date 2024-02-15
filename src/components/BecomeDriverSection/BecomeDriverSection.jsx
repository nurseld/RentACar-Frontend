import React from "react";
import "./become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/drive.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>
            <p>

            Unlock new opportunities for earning by joining us today! At 2G0 Cars, we're thrilled to offer a unique chance for individuals aspiring to become drivers and dive into a flexible and rewarding career. As a 2G0 Cars driver, you'll experience the advantages of reliable payments and streamlined tracking, ensuring a seamless and supported journey. What sets us apart is our commitment to your well-being, providing access to exclusive driver benefits, including discounts on vehicle maintenance, fuel, and additional perks. 
</p> <p>Seize the opportunity now to transform your career and be part of a dynamic community. Don't hesitate; become a 2G0 Cars driver today and let's embark on this journey of professional growth and financial success together!</p>

            <button className="btn become__driver-btn mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
