import React from 'react'
import './edit-brand-modal.css'
import { Form, Formik } from 'formik'
import FormInput from '../../../FormInput/FormInput';
import { toast } from 'react-toastify';


function EditModal({ entityService, entity, modalId, initialValues, validationSchema }) {

    const onSubmit = async (values, { resetForm }) => {

        console.log("Form submitted with values:", values);
        try {
            values.id = entity.id;
            const response = await entityService.update(values)
            toast.success("Güncelleme işlemi başarıyla tamamlandı!")
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
                    <div className="modal-header edit-brand-modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body edit-brand-modal-body">
                        <div className="edit-brand-modal-body-title">
                            {/* {"Seçilen kaydı güncellemek istediğinize emin misiniz?"} */}
                        </div>
                        <div className="edit-brand-modal-body-content">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <FormInput name="name" placeholder={entity.name} />
                                    <button className='btn btn-success' type='submit'>
                                        Güncelle
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="modal-footer edit-brand-modal-footer">
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

export default EditModal