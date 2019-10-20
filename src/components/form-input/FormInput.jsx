import React from 'react';
import './FormInput.scss';

const FormInput = ({ onChange, label, ...otherProps }) => (
    <div className="form-input" >
        <input className="input" onChange={ onChange } { ...otherProps } />
        { label ? 
            
        <label 
            className={ `${ otherProps.value.length ? 'shrink' : '' } form-input-label` }
        >{ label }</label> :
        null }
    </div>
);

export default FormInput;