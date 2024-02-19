import React from 'react'
import './add-brand-modal.css'
import { Form, Formik } from 'formik'
import FormInput from '../../../FormInput/FormInput';
import { toast } from 'react-toastify';


function AddModal({ entityService, entity, modalId, initialValues, validationSchema }) {

    const onSubmit = async (values, { resetForm }) => {

        console.log("Form submitted with values:", values);
        try {
            const response = await entityService.add(values)
            toast.success("Ekleme işlemi başarıyla tamamlandı!")
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };

    return (
        <div
            className="modal fade"
            id={modalId}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header add-brand-modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body add-brand-modal-body">
                        <div className="add-brand-modal-body-title">
                            {/* {"Seçilen kaydı güncellemek istediğinize emin misiniz?"} */}
                        </div>
                        <div className="add-brand-modal-body-content">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <FormInput name="name" placeholder="Marka giriniz" />
                                    <button className='btn btn-success' type='submit'>
                                        Ekle
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="modal-footer add-brand-modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Kapat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal