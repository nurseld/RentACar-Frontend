import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet.jsx";
import CommonSection from "../../components/CommonSection/CommonSection.jsx";
import Dashboard from "../../pages/Admin/AdminPages/Dashboard";
import CarControl from "../../pages/Admin/AdminPages/CarControl";

const Admin = () => {
  const [activeTab, setactiveTab ] = useState("Dashboard")
  const handleActiveTab = (text) => {setactiveTab(text)}

  const navLinks = [
    {
      path: "/admin/dashboard",
      icon: "fas fa-tachometer-alt fa-fw",
      display: "Dashboard",
    },
    {
      path: "/admin/carcontrol",
      icon: "fas fa-chart-area fa-fw",
      display: "Car Panel",
    },
    {
      path: "/admin/rental",
      icon: "fas fa-chart-bar fa-fw",
      display: "Rents",
    },
    {
      path: "/admin/users",
      icon: "fas fa-users fa-fw",
      display: "User Panel",
    },
    {
      path: "/admin/colors",
      icon: "fas fa-money-bill fa-fw",
      display: "Colors",
    },
  ];

  const renderComponent = (activeTab) => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "CarControl":
        return <CarControl />;
      // Diğer case'leri ekle isteğe bağlı
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Helmet title="Admin">
        <CommonSection title="Admin" />
      </Helmet>
      
      <div style={{ display: "flex" }}>
        <aside>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
            style={{ width: "250px" }}
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-2 mt-0">
                {navLinks.map((link, index) => (
                  <span onClick={() => handleActiveTab(link.display)}
                    key={index}
                    className={`list-group-item list-group-item-action py-2 ripple ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <i className={link.icon + " me-3"}></i>
                    <span>{link.display}</span>
                  </span>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <main style={{ marginLeft: "200px", padding: "20px", flex: "1" }}>
          <div style={{ width: "100%" }}>
            {renderComponent()}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
