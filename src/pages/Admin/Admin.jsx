import React, { Fragment } from "react";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar.jsx";
import { Outlet } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet.jsx";
import CommonSection from "../../components/CommonSection/CommonSection.jsx";
import Dashboard from "./AdminPages/Dashboard.jsx";

const Admin = () => {
  return (
    <Fragment>
      <Helmet title="Admin">
        <CommonSection title="Admin" />
      </Helmet>
      
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div style={{ marginLeft: "0px", padding: "20px", flex: "1" }}>
          <Dashboard />
          <div style={{ width: "100%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;