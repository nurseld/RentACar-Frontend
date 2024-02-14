import React, { useRef, useState, useEffect } from "react";

import {
  Container, Row, Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store/auth/authSlice";
import logo from "../../assets/all-images/logo.png";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const headerLinks = [
  {
    path: "/login",
    display: "Login"
  },

  {
    path: "/register",
    display: "Register"
  },

  {
    path: "/profile",
    display: "Profile"
  }
]

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const authState = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">

        <Container>
          <Row>
          <Col lg="6" md="6" sm="6">
  <div className="header__top__left">
    <Link to="/home"> 
      <img src={logo} alt="Home" className="logo" />
    </Link>
    <span>Need Help?</span>
    <span className="header__top__help">
      <i className="ri-phone-fill"></i> 0 (550) 500 50 50
    </span>
  </div>
</Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {authState.id !== 0 && <Link to="/profile" className="d-flex align-items-center gap-1">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Profile
                </Link>}

                {authState.id !== 0 && <Link onClick={() => { dispatch(logoutSuccess()); navigate("/home") }} to="/home" className="d-flex align-items-center gap-1">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Logout
                </Link>}


                {authState.id === 0 && <Link to="/login" className="d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                </Link>}

                {authState.id === 0 && <Link to="/register" className="d-flex align-items-center gap-1" data-bs-target="#staticBackdrop">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Register
                </Link>}

                <div className="modal fade login-modal" id="staticBackdrop" tabIndex="-1"
                  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="modal-close-button-container">
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <>
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="login-individual-tab" data-bs-toggle="tab" data-bs-target="#login-individual" type="button" role="tab" aria-controls="home" aria-selected="true">Bireysel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="login-corporate-tab" data-bs-toggle="tab" data-bs-target="#login-corporate" type="button" role="tab" aria-controls="profile" aria-selected="false">Kurumsal</button>
                            </li>
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="login-individual" role="tabpanel" aria-labelledby="login-individual-tab">
                              <Login title="Bireysel" />
                            </div>

                            <div className="tab-pane fade" id="login-corporate" role="tabpanel" aria-labelledby="login-corporate-tab">
                              <Login title="Kurumsal" />
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
