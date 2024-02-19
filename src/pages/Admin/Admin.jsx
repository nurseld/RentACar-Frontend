import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet.jsx";
import CommonSection from "../../components/CommonSection/CommonSection.jsx";
import "./Admin.css";
import BrandList from "../../components/Admin/Brands/BrandList.jsx";


const Admin = () => {
  return (
    <div>
      <Helmet title="Admin">
        <CommonSection title="Admin" />
        <div className="admin-page-container">
          <div className="admin-page-content">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="brands-tab" data-bs-toggle="tab" data-bs-target="#brands" type="button" role="tab" aria-controls="brands" aria-selected="true">Brands</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="models-tab" data-bs-toggle="tab" data-bs-target="#models" type="button" role="tab" aria-controls="models" aria-selected="false">Models</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="cars-tab" data-bs-toggle="tab" data-bs-target="#cars" type="button" role="tab" aria-controls="cars" aria-selected="false">Cars</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="rentals-tab" data-bs-toggle="tab" data-bs-target="#rentals" type="button" role="tab" aria-controls="rentals" aria-selected="false">Rentals</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="brands" role="tabpanel" aria-labelledby="brands-tab">
                <BrandList />
              </div>
              <div className="tab-pane fade" id="models" role="tabpanel" aria-labelledby="models-tab">
                models
              </div>
              <div className="tab-pane fade" id="cars" role="tabpanel" aria-labelledby="cars-tab">
                cars
              </div>
              <div className="tab-pane fade" id="rentals" role="tabpanel" aria-labelledby="rentals-tab">

                rentals
              </div>
            </div>
          </div>
        </div>
      </Helmet >



    </div >
  );
};

export default Admin;
