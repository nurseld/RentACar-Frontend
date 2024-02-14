import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
import './login.css'
import authService from '../../services/authService';
import userService from '../../services/userService';
import customerService from '../../services/customerService';
import { loginSuccess } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';

function Login({ title }) {

    const navigate = useNavigate();
    const [modalStatus, setModalStatus] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (modalStatus) {
            navigate('/register');
            setModalStatus(false)
        }
    }, [modalStatus]);


    const getUser = async (id) => {
        try {
            const responseData = customerService.getByUserId(id)
                .then(response => { return response.data })
                .catch(error => { return [] });
            console.log(responseData)
            return responseData;
        } catch (error) {
            console.log("Error fetching cars:", error);
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
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="login-container">
                    <div className="login-body">
                        <div className="title">
                            Hoş Geldiniz,
                            <br></br>
                            {title} Hesabınızla Giriş Yapabilirsiniz

                        </div>
                        <div className="login-form">
                            <FormInput
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
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                        >Giriş Yap</button>
                        <a href="#">Şifremi Unuttum</a>
                        <span>Henüz üye değil misin?
                            <Link
                                to="/register"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={async () => await setModalStatus(true)}
                                className="login-footer-link"
                            >
                                Kayıt Ol
                            </Link>
                        </span>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}

export default Login