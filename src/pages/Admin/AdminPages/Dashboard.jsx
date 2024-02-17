import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid className="admin-dashboard">
      <Row>
        <Col lg="12">
          <h1 className="mb-4">Dashboard</h1>
        </Col>
      </Row>

      <Row>
        <Col lg="4" md="6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">1234</p>
            </div>
          </div>
        </Col>

        <Col lg="4" md="6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">5678</p>
            </div>
          </div>
        </Col>

        <Col lg="4" md="6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text">$123,456</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
