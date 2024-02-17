import React from "react";

import CommonSection from "../../components/CommonSection/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import AboutSection from "../../components/AboutSection/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../../components/BecomeDriverSection/BecomeDriverSection";

import driveImg from "../../assets/all-images/drive.jpg";
import OurMembers from "../../components/OurMember/OurMembers";
import "./about.css";
import { useTranslation } from 'react-i18next'


const About = () => {
  const { t } = useTranslation("global")
  return (
    <Helmet title={t("about.Title")}>
      <CommonSection title={t("about.Us")}/>
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
                {t("about.Safety")} </h2>

                <p className="section__description">
                {t("about.SectionD1")}
                </p>

                <p className="section__description">
                {t("about.SectionD2")}
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">{t("about.Help")}</h6>
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
              <h6 className="section__subtitle">{t("about.Experts")}</h6>
              <h2 className="section__title">{t("about.Members")}</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
