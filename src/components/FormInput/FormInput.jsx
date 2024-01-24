import React from 'react'
import { FormGroup } from "reactstrap";
import './form-input.css'
import { ErrorMessage, Field } from 'formik';

const FormInput = ({
    formGroupClass,
    type = "text",
    id,
    name,
    placeholder,
    inputClass,
    onFocus,
    onBlur,
    pattern }) => (
    <FormGroup className={`height-60px ${formGroupClass}`}>
        <Field
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className={inputClass}
            onFocus={onFocus}
            // onBlur={onBlur}
            pattern={pattern}

        />
        <ErrorMessage name={name}>
            {message => <span className="text-danger">{message}</span>}
        </ErrorMessage>
    </FormGroup>
);

export default FormInput