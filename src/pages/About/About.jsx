import React from "react";

import CommonSection from "../../components/CommonSection/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import AboutSection from "../../components/AboutSection/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../../components/BecomeDriverSection/BecomeDriverSection";

import driveImg from "../../assets/all-images/drive.jpg";
import OurMembers from "../../components/OurMember/OurMembers";
import "./about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  
Dedicated to Your Safety, Every Ride. Your Peace of Mind, Our Priority.
                </h2>

                <p className="section__description">
                  
At 2G0 Cars, safety is our unwavering commitment as we provide reliable ride solutions for our valued customers. We recognize the paramount importance of delivering secure transportation, starting with the meticulous maintenance and regular inspections of our diverse fleet. Each vehicle undergoes rigorous checks to meet and exceed the highest safety standards, ensuring your peace of mind every time you step into one of our cars.
                </p>

                <p className="section__description">
                When you choose 2G0 Cars, you're not just opting for a ride; you're selecting a secure and reliable transportation partner. Our dedication to providing safe ride solutions is deeply embedded in every facet of our service, ensuring that your journey with us is not only comfortable but, most importantly, safe.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>0 (550) 500 50 50</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
