import React from 'react'
import './personal-information.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import FormInput from '../../../FormInput/FormInput';
import { Form, Formik } from 'formik';






function PersonalInformation({ customer }) {
    return (

        <div className='personal-information-container'>
            <Formik
                initialValues={{

                    firstName: customer.firstName,
                    lastName: customer.lastName


                }}>
                <Form className='personal-information-form'>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Ad</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="firstName" placeholder="Ad*" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Soyad</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="lastName" placeholder="Soyad*" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Telefon Numarası</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="phoneNumber" placeholder="555 555 55 55*" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Email</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="email" placeholder="example@example.com" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Şifre</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="password" placeholder="********" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Şifre Tekrar</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="confirmPassword" placeholder="********" />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default PersonalInformation