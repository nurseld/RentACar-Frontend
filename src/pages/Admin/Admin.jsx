import "./Admin.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader.jsx";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar.jsx";
import { Outlet } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet.jsx";
import CommonSection from "../../components/CommonSection/CommonSection.jsx";
const Admin = () => {
  return (
    <Helmet title="Admin">
      <CommonSection title="Admin"/>
      <div>
        <AdminHeader />
        <div style={{ display: "flex" }}>
          <AdminSidebar />
          <div style={{ marginLeft: "200px", padding: "20px", width: "100%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </Helmet>
  );
};
export default Admin;
