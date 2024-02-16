import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo2 from "../../assets/all-images/logo2.png";

const AdminSidebar = () => {
  const navLinks = [
    {
      path: "/dashboard",
      icon: "fas fa-tachometer-alt fa-fw",
      display: "Dashboard",
    },
    {
      path: "/carcontrol",
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

  return (
    <div>
    <aside>
      {/* Admin sayfası yan menü öğeleri */}
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
        style={{ width: "250px" }}
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-2 mt-0">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`list-group-item list-group-item-action py-2 ripple ${
                  index === 0 ? "active" : ""
                }`}
              >
                <i className={link.icon + " me-3"}></i>
                <span>{link.display}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Navbar */}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand */}
          <Link className="navbar-brand" to="/admin">
            <img
              src={logo2}
              alt="Home"
              className="logo"
              style={{ height: "31px", width: "auto" }}
            />
          </Link>

          {/* Search form */}
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)'
              style={{ minWidth: "225px" }}
            />
            <span className="input-group-text border-0">
              <i className="fas fa-search"></i>
            </span>
          </form>

          {/* Right links */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* Notification dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* Icon */}
            <li className="nav-item">
              <a className="nav-link me-3 me-lg-0" href="#">
                <i className="fas fa-fill-drip"></i>
              </a>
            </li>

            {/* Icon */}
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>

            {/* Icon dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="flag-united-kingdom flag m-0"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-united-kingdom flag"></i>English
                    <i className="fa fa-check text-success ms-2"></i>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {/* Diğer dil seçenekleri */}
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-poland flag"></i>Polski
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-china flag"></i>中文
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-japan flag"></i>日本語
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-germany flag"></i>Deutsch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-france flag"></i>Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-spain flag"></i>Español
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-russia flag"></i>Русский
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="flag-portugal flag"></i>Português
                  </a>
                </li>
              </ul>
            </li>

            {/* Avatar */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="22"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Container wrapper */}
      </nav>
    </aside>
    <Outlet></Outlet>
    </div>
  );
};

export default AdminSidebar;
