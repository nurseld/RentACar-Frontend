import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import { useTranslation } from 'react-i18next'

const AboutSection = ({ aboutClass }) => {
  const { t } = useTranslation("global")
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
              <h4 className="section__subtitle">{t("aboutSection.About")}</h4>
              <h2 className="section__title">{t("aboutSection.Title")}</h2>
              <p className="section__description">
              {t("aboutSection.Description")}
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>{t("aboutSection.Exceptional")} </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> {t("aboutSection.UserFriendly")}
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> {t("aboutSection.Diverse")}
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> {t("aboutSection.Transparently")}
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
