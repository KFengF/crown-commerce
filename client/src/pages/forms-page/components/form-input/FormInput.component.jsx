import React from 'react';
import { FormInputDiv, Input, FormLabel } from './FormInput.styles';
/* import './FormInput.scss'; */

const FormInput = ({ onChange, label, value, ...otherProps }) => (
    <FormInputDiv>
        <Input
            onChange={ onChange }
            value={ value }
            { ...otherProps }
        />
        { label && /* Esto significa si hay label retornar <label> */
            <FormLabel value={ value } >{ label }</FormLabel>
        }
    </FormInputDiv>
);

export default FormInput;

/* label && //Esto significa si hay label retornar <label> 
<label 
    className={ `${ otherProps.value.length && 'shrink' } form-input-label` }
>{ label }</label> */