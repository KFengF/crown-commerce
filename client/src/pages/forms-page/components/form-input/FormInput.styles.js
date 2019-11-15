import styled, { css } from 'styled-components';

const mainColor = 'black';

const subColor = '#555';

const shrinkLabelStyles = css`
    top: -14px;
    font-size: 13px;
    color: ${ mainColor };
`;

const setShrinkLabelStyles = props => {
    if (props.value.length) return shrinkLabelStyles;
}

export const FormInputDiv = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const Input = styled.input`
    background: none;
    background-color: white;
    color: ${ subColor };
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${ subColor };
    margin: 25px 0;

    &[type='password'] {
        letter-spacing: 4px;
    }

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${ shrinkLabelStyles }
    }
`;
/* si el input se enfoca entonces el form-input-label... */

export const FormLabel = styled.label`
    color: ${ subColor };
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    letter-spacing: 1px;

    ${ setShrinkLabelStyles }
`;