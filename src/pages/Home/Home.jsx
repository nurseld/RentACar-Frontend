import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Helmet from "../../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../../components/FindCarForm/FindCarForm";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesList from "../../components/ServiceList/ServicesList";
import carData from "../../assets/data/carData";
import CarItem from "../../components/CarItem/CarItem";
import BecomeDriverSection from "../../components/BecomeDriverSection/BecomeDriverSection";
import Testimonial from "../../components/Testimonials/Testimonial";

import BlogList from "../../components/BlogList/BlogList";
import axios from "axios";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";
import { Page } from "../../constants";

const Home = () => {
  const { t } = useTranslation("global")

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axiosInstance.get("cars/getAll");
    setPosts(response.data);
  };

  useEffect(() => {

    fetchPosts();

  }, []);




  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                 {/* <h2>Start your reservation here</h2> */}
                  <h2>{t("home.Find")}</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">{t("home.See")}</h6>
              <h2 className="section__title">{t("home.Popular")}</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">{t("home.Come")}</h6>
              <h2 className="section__title">{t("home.Hot")}</h2>
            </Col>

            {posts.slice(0, 3).map((item) => (
              <CarItem item={item} key={item.id} page={Page.Home_HotOffers} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">{t("home.Clients")}</h6>
              <h2 className="section__title">{t("home.Testimonials")}</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">{t("home.Explore")}</h6>
              <h2 className="section__title">{t("home.Latest")}</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
