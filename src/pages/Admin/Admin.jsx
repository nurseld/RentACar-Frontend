import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet.jsx";
import CommonSection from "../../components/CommonSection/CommonSection.jsx";
import "./Admin.css";
import BrandList from "../../components/Admin/Brands/BrandList.jsx";
import CarList from "../../components/Admin/Cars/CarList.jsx";
import ModelList from "../../components/Admin/Models/ModelList.jsx";
import UserList from "../../components/Admin/Users/UserList.jsx";
import ColorList from "../../components/Admin/Colors/ColorList.jsx";
import RentalList from "../../components/Admin/Rentals/RentalList.jsx";

const Admin = () => {
  return (
    <div>
      <Helmet title="Admin">
        <CommonSection title="Admin" />
        <div className="admin-page-container">
          <div className="admin-page-content">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="brands-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#brands"
                  type="button"
                  role="tab"
                  aria-controls="brands"
                  aria-selected="true"
                >
                  Brands
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="models-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#models"
                  type="button"
                  role="tab"
                  aria-controls="models"
                  aria-selected="false"
                >
                  Models
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="cars-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cars"
                  type="button"
                  role="tab"
                  aria-controls="cars"
                  aria-selected="false"
                >
                  Cars
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="rentals-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#rentals"
                  type="button"
                  role="tab"
                  aria-controls="rentals"
                  aria-selected="false"
                >
                  Rentals
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="users-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#users"
                  type="button"
                  role="tab"
                  aria-controls="users"
                  aria-selected="false"
                >
                  Users
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="colors-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#colors"
                  type="button"
                  role="tab"
                  aria-controls="colors"
                  aria-selected="false"
                >
                  Colors
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade"
                id="brands"
                role="tabpanel"
                aria-labelledby="brands-tab"
              >
                <BrandList />
              </div>
              <div
                className="tab-pane fade"
                id="models"
                role="tabpanel"
                aria-labelledby="models-tab"
              >
                <ModelList />
              </div>
              <div
                className="tab-pane fade show active"
                id="cars"
                role="tabpanel"
                aria-labelledby="cars-tab"
              >
                <CarList />
              </div>
              <div
                className="tab-pane fade"
                id="rentals"
                role="tabpanel"
                aria-labelledby="rentals-tab"
              >
                <RentalList />
              </div>
              <div
                className="tab-pane fade"
                id="users"
                role="tabpanel"
                aria-labelledby="users-tab"
              >
                <UserList />
              </div>
              <div
                className="tab-pane fade"
                id="colors"
                role="tabpanel"
                aria-labelledby="users-tab"
              >
                <ColorList />
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </div>
  );
};

export default Admin;
