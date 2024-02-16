import React from "react";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar.jsx";
import { Outlet } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet.jsx";
import CommonSection from "../../components/CommonSection/CommonSection.jsx";

const Admin = () => {
  return (
   
      <div style={{ display: "flex" }}>
         <Helmet title="Admin">
      <CommonSection title="Admin" />
        <AdminSidebar /> 
        <div style={{ marginLeft: "200px", padding: "20px", width: "100%" }}>
        </div>
        </Helmet>
        <Outlet />
      </div>
    
  );
};

export default Admin;