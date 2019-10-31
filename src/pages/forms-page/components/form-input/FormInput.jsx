import React from 'react';
import './FormInput.scss';

const FormInput = ({ onChange, label, ...otherProps }) => (
    <div className="form-input" >
        <input className="input" onChange={ onChange } { ...otherProps } />
        { label && /* Esto significa si hay label retornar <label> */
            <label 
                className={ `${ otherProps.value.length && 'shrink' } form-input-label` }
            >{ label }</label>
        }
    </div>
);

export default FormInput;