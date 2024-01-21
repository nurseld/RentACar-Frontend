import React from 'react'

export default function logintest() {
    return (
        <div className="register-container">
            <>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Bireysel</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Kurumsal</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                        <div className="individual-login-body">
                            <div className="login-form">
                                <input className="form-control" type="email" placeholder="E-Posta" />
                                <input className="form-control" type="password" placeholder="Şifre" />
                            </div>
                        </div>

                    </div>


                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="corporate-register-body">
                            <div className="login-form">
                                <input className="form-control" type="email" placeholder="E-Posta" />
                                <input className="form-control" type="password" placeholder="Şifre" />
                            </div>
                        </div>
                        <div className="register-footer">
                            <button className="register-button" type="submit">Kayıt Ol</button>

                        </div>
                    </div>


                </div>
            </>

        </div>
    )
}
