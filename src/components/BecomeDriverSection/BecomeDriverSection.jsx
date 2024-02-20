import React from "react";
import "./become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import driverImg from "../../assets/all-images/drive.png";

const BecomeDriverSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/mercedes.jpg" alt="" className="w-100" />
          </div>

          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/audi.jpg" alt="" className="w-100" />
          </div>

          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/bmw.jpg" alt="" className="w-100" />
          </div>

          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/skoda.jpg" alt="" className="w-100" />
          </div>

          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/vw.jpg" alt="" className="w-100" />
          </div>

          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/renault.jpg" alt="" className="w-100" />
          </div>

          <div className="brand-img-container">
            <img src="/src/assets/all-images/brands-img/fiat.jpg" alt="" className="w-100" />
          </div>

          {/* <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              {t("becomeDriver.Title")}
            </h2>
            <p>{t("becomeDriver.P1")}</p> <p>{t("becomeDriver.P2")} </p>
            <button className="btn become__driver-btn mt-4">
              {t("becomeDriver.Button")}
            </button>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
