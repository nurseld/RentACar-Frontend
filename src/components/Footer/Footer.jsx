import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation("global");

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
       
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    2g0 <br /> Cars
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">{t("footer.Content")}</p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">{t("footer.Links")}</h5>
              <ListGroup>
                <ListGroupItem className="p-0 mt-3 quick__link">
                  <Link to="/about">{t("header.About")}</Link>
                </ListGroupItem>

                <ListGroupItem className="p-0 mt-3 quick__link">
                  <Link to="/privacypolicy">{t("footer.Privacy")}</Link>
                </ListGroupItem>

                <ListGroupItem className="p-0 mt-3 quick__link">
                  <Link to="/cars">{t("header.Cars")}</Link>
                </ListGroupItem>

                <ListGroupItem className="p-0 mt-3 quick__link">
                  <Link to="/blogs">{t("header.Blog")}</Link>
                </ListGroupItem>

                <ListGroupItem className="p-0 mt-3 quick__link">
                  <Link to="/contact">{t("header.Contact")}</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4"> {t("footer.Office")}</h5>
              <p className="office__info"> {t("footer.Address")}</p>
              <p className="office__info"> {t("footer.Phone")} 0 (550) 500 50 50</p>

              <p className="office__info">Email: 2G0Cars@pair2b2mail.com</p>

              <p className="office__info"> {t("footer.Time")} 9am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title"> {t("footer.Newsletter")}</h5>
              <p className="section__description"> {t("footer.Subscribe")}</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i> {t("footer.Copyright")} {year}, {t("footer.Developers")} 
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
