import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/register.css";



const Register = () => {
    return (
        <Helmet title="Register">
            <section className="register-page-section">
                <Container>
                    <div className="register-container">
                        <div className="register-body">
                            <div className="register-form">
                                <input className="form-control" type="text" placeholder="Ad*" />
                                <input className="form-control" type="text" placeholder="Soyad*" />
                                <input className="form-control" type="email" placeholder="E-Posta*" />
                                <input className="form-control" type="password" placeholder="Şifre*" />
                                <input className="form-control" type="password" placeholder="Şifre Tekrar*" />
                            </div>
                        </div>
                        <div className="register-footer">
                            <button className="register-button" type="submit">Kayıt Ol</button>
                            <span>Zaten bir hesabın var mı? <a className="register-footer-link" href="#/login"> Giriş Yap</a></span>
                        </div>
                    </div>

                </Container>
            </section>
        </Helmet>
    );
};

export default Register;