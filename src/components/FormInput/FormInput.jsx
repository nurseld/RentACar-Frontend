import React from 'react'
import { FormGroup } from "reactstrap";
import './form-input.css'

function FormInput({
    formGroupClass,
    type = "text",
    id,
    name,
    placeholder,
    inputClass,
    required = false,
    onFocus,
    onBlur,
    pattern }) {
    return (
        <FormGroup className={formGroupClass} >
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={inputClass}
                required={required}
                onFocus={onFocus}
                onBlur={onBlur}
                pattern={pattern}
            />
        </FormGroup >
    )
}

export default FormInput