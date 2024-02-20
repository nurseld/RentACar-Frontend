import React from 'react'
import './personal-information.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import FormInput from '../../../FormInput/FormInput';
import { Form, Formik } from 'formik';
import userService from '../../../../services/userService';





function PersonalInformation({ customer }) {

    const onSubmit = async (values) => {
        const userUpdateResponse = await userService.update(values)
        console.log(userUpdateResponse)
    }

    return (
        <div className='personal-information-container'>
            <Formik
                initialValues={{
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    phoneNumber: customer.phoneNumber,
                    // password: customer.password
                }}
                onSubmit={onSubmit}>
                <Form className='personal-information-form'>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Ad</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="firstName" placeholder={customer.firstName} />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Soyad</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="lastName" placeholder={customer.lastName} />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Telefon Numarası</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="phoneNumber" placeholder={customer.phoneNumber} />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Email</label>
                        <FormInput formGroupClass="" inputClass="personal-information-input" name="email" placeholder="example@example.com" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Şifre</label>
                        <FormInput formGroupClass="" type='password' inputClass="personal-information-input" name="password" placeholder="********" />
                    </div>
                    <div className='personal-information-form-element'>
                        <label className='personal-information-label'>Şifre Tekrar</label>
                        <FormInput formGroupClass="" type='password' inputClass="personal-information-input" name="confirmPassword" placeholder="********" />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button type='submit' className='btn btn-warning px-4'>
                            Güncelle
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default PersonalInformation