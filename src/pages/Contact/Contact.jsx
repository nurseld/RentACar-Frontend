import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import { useTranslation } from 'react-i18next'

import "./contact.css";

const socialLinks = [
  
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];


const Contact = () => {
  const { t } = useTranslation("global")

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">{t("contact.GetInTouch")}</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder={t("contact.Name")} type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder={t("contact.Email")} type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder={t("contact.Message")}
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                {t("contact.Send")} 
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">{t("contact.Info")} </h6>
                <p className="section__description mb-0">
                {t("contact.Address")}
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">{t("contact.Phone")}</h6>
                  <p className="section__description mb-0">0 (550) 500 50 50</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">2G0Cars@pair2b2mail.com</p>
                </div>

                <h6 className="fw-bold mt-4">{t("contact.Follow")}</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
