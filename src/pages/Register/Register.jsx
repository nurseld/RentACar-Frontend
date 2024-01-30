import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import "./register.css";



const Register = () => {

    const [dateInputType, setDateInputType] = useState("text");

    const activateDateInput = () => {
        setDateInputType("date");
    };

    const deactivateDateInput = () => {
        setDateInputType("text");
    };



    return (
        <Helmet title="Register">
            <section className="register-page-section">
                <Container>


                    <div className="register-container">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="register-individual-tab" data-bs-toggle="tab" data-bs-target="#register-individual" type="button" role="tab" aria-controls="home" aria-selected="true">Bireysel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="register-corporate-tab" data-bs-toggle="tab" data-bs-target="#register-corporate" type="button" role="tab" aria-controls="profile" aria-selected="false">Kurumsal</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="register-individual" role="tabpanel" aria-labelledby="register-individual-tab">

                                <div className="individual-register-body">
                                    <div className="register-form">
                                        <input className="form-control" type="text" placeholder="Ad*" />
                                        <input className="form-control" type="text" placeholder="Soyad*" />
                                        <input className="form-control" type="text" placeholder="TC No*" />
                                        <input
                                            className="form-control"
                                            type={dateInputType}
                                            placeholder="Doğum Tarihi"
                                            id="date"
                                            onFocus={activateDateInput}
                                            onBlur={deactivateDateInput}
                                            pattern="\d{2}\d{2}\d{4}"
                                        />
                                        <input className="form-control" type="text" placeholder="Telefon*" />
                                        <input className="form-control" type="email" placeholder="E-Posta*" />
                                        <input className="form-control" type="password" placeholder="Şifre*" />
                                        <input className="form-control" type="password" placeholder="Şifre Tekrar*" />
                                    </div>
                                </div>
                                <div className="register-footer">
                                    <button className="register-button" type="submit">Kayıt Ol</button>
                                </div>



                            </div>
                            <div className="tab-pane fade" id="register-corporate" role="tabpanel" aria-labelledby="register-corporate-tab">
                                <div className="corporate-register-body">
                                    <div className="register-form">
                                        <input className="form-control" type="text" placeholder="Yetkili Ad*" />
                                        <input className="form-control" type="text" placeholder="Yetkili Soyad*" />
                                        <input className="form-control" type="text" placeholder="Company Name" />
                                        <input className="form-control" type="text" placeholder="Tax No" />
                                        <input className="form-control" type="text" placeholder="Telefon*" />
                                        <input className="form-control" type="email" placeholder="E-Posta*" />
                                        <input className="form-control" type="password" placeholder="Şifre*" />
                                        <input className="form-control" type="password" placeholder="Şifre Tekrar*" />
                                    </div>
                                </div>
                                <div className="register-footer">
                                    <button className="register-button" type="submit">Kayıt Ol</button>

                                </div>
                            </div>
                        </div>
                    </div>






                </Container>
            </section>
        </Helmet>
    );
};

export default Register;
