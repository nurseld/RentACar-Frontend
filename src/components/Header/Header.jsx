import React, { useRef, useState } from "react";

import {
  Container, Row, Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import "./header.css";


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
  }
]

const Header = () => {

  const history = useNavigate();

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    history("/Register");
  };


  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">

        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">



                <Link to="/login" className="d-flex align-items-center gap-1 test" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i className="ri-login-circle-line"></i> Login
                </Link>


                <div className="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                      {/* <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div> */}

                      <div className="modal-body">
                        <div className="login-container">
                          <div className="login-body">
                            <div className="login-form">
                              <input className="form-control" type="email" placeholder="E-Posta" />
                              <input className="form-control" type="password" placeholder="Şifre" />
                            </div>
                          </div>
                          <div className="login-footer">
                            <button className="login-button" type="submit" >Giriş Yap</button>
                            <a href="#">Şifremi Unuttum</a>
                            <span>Henüz üye değil misin? <button onClick={closeModal}>Kayıt Ol</button></span>

                          </div>
                        </div>
                      </div>

                      {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                      </div> */}

                    </div>
                  </div>
                </div>



                <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}

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

            <div className="nav__right">
              {/* <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
