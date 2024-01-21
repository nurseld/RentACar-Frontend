import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './login.css'

function Login({ title }) {

    const navigate = useNavigate();
    const [modalStatus, setModalStatus] = useState(false);

    useEffect(() => {
        if (modalStatus) {
            navigate('/register');
            setModalStatus(false)
        }
    }, [modalStatus]);



    return (
        <div className="login-container">
            <div className="login-body">
                <div className="title">
                    Hoş Geldiniz,
                    <br></br>
                    {title} Hesabınızla Giriş Yapabilirsiniz

                </div>
                <div className="login-form">
                    <input className="form-control" type="email" placeholder="E-Posta" />
                    <input className="form-control" type="password" placeholder="Şifre" />
                </div>
            </div>
            <div className="login-footer">
                <button className="login-button" type="submit" >Giriş Yap</button>
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
    )
}

export default Login