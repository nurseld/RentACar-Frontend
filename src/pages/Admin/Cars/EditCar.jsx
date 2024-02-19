import React, { useEffect, useState } from 'react'
import './edit-car.css'
import Helmet from '../../../components/Helmet/Helmet'
import CommonSection from '../../../components/CommonSection/CommonSection'
import FormInput from '../../../components/FormInput/FormInput'
import { Form, Formik } from 'formik'
import * as Yup from "yup";
import carService from '../../../services/carService'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'



function EditBrand() {

    const { id } = useParams();

    const initialValues = {
        name: ""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Marka en az 2 karakterden oluşmalıdır.")
    })

    const fetchBrand = async (id) => {
        if (id !== undefined) {
            const currentBrand = await brandService.getById(id);
            setCurrentBrand(await currentBrand.data);
        }
        else {
            setCurrentBrand({});
        }
    }

    const onSubmit = async (values, { resetForm }) => {

        console.log("Form submitted with values:", values);
        try {
            console.log(values)
            const response = await brandService.update(values)
            toast.success("Güncelleme işlemi başarıyla tamamlandı!")
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };


    const [currentBrand, setCurrentBrand] = useState()



    fetchBrand(id);

    return (
        <Helmet>
            <CommonSection />
            <div className='admin-brand-edit-container'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <FormInput name="name" placeholder={currentBrand?.name} />
                        <button className='btn btn-success' type='submit'>
                            Güncelle
                        </button>
                    </Form>
                </Formik>
            </div>
        </Helmet>
    )
}

export default EditBrand