import "./Admin.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader.jsx";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar.jsx";
import { Outlet } from 'react-router-dom';
const Admin = () => {
    return (
        <div>
          <AdminHeader />
          <div style={{ display: 'flex' }}>
            <AdminSidebar />
            <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
              <Outlet />
            </div>
          </div>
        </div>
      );
    };
  export default Admin;