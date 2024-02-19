import React from 'react'
import './add-brand.css'
import Helmet from '../../../components/Helmet/Helmet'
import CommonSection from '../../../components/CommonSection/CommonSection'
import './add-brand.css'
import FormInput from '../../../components/FormInput/FormInput'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import brandService from '../../../services/brandService'


const initialValues = {
    name: ""
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Marka en az 2 karakterden oluşmalıdır.")
})


const onSubmit = async (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form submitted with values:", values);
    try {
        // console.log(values)
        const response = await brandService.add(values)
        console.log(response);
    } catch (error) {
        console.error('Veri çekme hatası:', error);
    }
    resetForm();
};

function AddBrand() {

    return (
        <Helmet>
            <CommonSection />
            <div className='admin-brand-add-container'>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <FormInput name="name" placeholder="Eklemek istediğiniz markayı giriniz" />
                        <button className='btn btn-success' type='submit'>
                            Ekle
                        </button>
                    </Form>
                </Formik>

            </div>


        </Helmet>
    )
}

export default AddBrand