import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import * as Yup from "yup";
import FormInput from "../../components/FormInput/FormInput";

import "./login.css";
import { Form, Formik } from "formik";
import authService from "../../services/authService";
import { useDispatch } from "react-redux";
import customerService from "../../services/customerService";
import { loginSuccess } from "../../store/auth/authSlice";
import { toast } from "react-toastify";



const Login = () => {

    const navigate = useNavigate();
    const [modalStatus, setModalStatus] = useState(false);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if (modalStatus) {
    //         navigate('/register');
    //         setModalStatus(false)
    //     }
    // }, [modalStatus]);

    const getUser = async (id) => {
        try {
            const responseData = customerService.getByUserId(id)
                .then(response => { return response.data })
                .catch(error => { return [] });
            console.log(responseData)
            return responseData;
        } catch (error) {
            console.log("Error fetching users:", error);
        }
    };

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const onSubmit = async (values, { resetForm }) => {
        // Handle form submission logic here
        console.log("Form submitted with values:", values);
        try {
            // authService.login(values);
            const response = await authService.login(values)
            console.log(response);
            const currentUser = await getUser(response.data.id);
            console.log(currentUser)
            dispatch(loginSuccess(response.data))
            navigate("/home")
            toast.success("Giriş başarılı.")
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };

    return (
        <Helmet title="Login">
            <section className="login-page-section">
                <Container>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <div className="login-container">
                                <div className="login-body">
                                    <div className="login-form"><FormInput
                                        inputClass="form-control"
                                        type="email" name="email" placeholder="E-posta"
                                    />
                                        <FormInput
                                            inputClass="form-control"
                                            type="password" name="password" placeholder="Şifre"
                                        />
                                    </div>
                                </div>
                                <div className="login-footer">
                                    <button className="login-button" type="submit"
                                    >
                                        Giriş Yap
                                    </button>
                                    <a href="#" style={{ marginTop: '30px' }}>Şifremi Unuttum</a>
                                    <span>Henüz üye değil misin?
                                        <Link
                                            to="/register"
                                        >
                                            Kayıt Ol
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;