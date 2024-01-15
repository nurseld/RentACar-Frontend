import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/login.css";



const Login = () => {
    return (
        <Helmet title="Login">
            <section className="login-page-section">
                <Container>
                    <div className="login-container">
                        <div className="login-body">
                            <div className="login-form">
                                <input className="form-control" type="email" placeholder="E-Posta" />
                                <input className="form-control" type="password" placeholder="Şifre" />
                            </div>
                        </div>
                        <div className="login-footer">
                            <button className="login-button" type="submit">Giriş Yap</button>
                            <a href="#">Şifremi Unuttum</a>
                            <span>Henüz üye değil misin? <a className="login-footer-link" href="#/login"> Kayıt ol</a></span>

                        </div>
                    </div>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;