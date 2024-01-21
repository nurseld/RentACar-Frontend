import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import CarItem from "../../components/CarItem/CarItem";
import carData from "../../assets/data/carData";
import axios from "axios";


const CarListing = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8081/api/cars/getAll");
    setPosts(response.data);
  };

  useEffect(() => {

    fetchPosts();

  }, []);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {
              posts.map((item) => (
                <CarItem item={item} key={item.id} />
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
