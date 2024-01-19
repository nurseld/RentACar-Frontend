import React from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";

const FormFields = ({ formType, formFields }) => (
    <Formik
        initialValues={{
            ...formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
        }}
        validationSchema={formType === "individual" ? IndividualSchema : CorporateSchema}
        onSubmit={(values, { setSubmitting }) => {
            // Form submit işlemleri burada gerçekleştirilebilir
            console.log(values);
            setSubmitting(false);
        }}
    >
        <FormikForm className={`${formType}-register-body`}>
            {/* Diğer giriş alanları */}
            {formFields.map((field) => (
                <div key={field.name} className="mb-3">
                    <label htmlFor={field.name} className="form-label">{field.label}</label>
                    <Field type={field.type} name={field.name} placeholder={field.placeholder} className="form-control" />
                    <div className="text-danger">
                        <ErrorMessage name={field.name} />
                    </div>
                </div>
            ))}

            {/* Kayıt ol butonu */}
            <div className="register-footer">
                <button className="register-button" type="submit">Kayıt Ol</button>
            </div>
        </FormikForm>
    </Formik>
);

export default FormFields;