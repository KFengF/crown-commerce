import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid transparent;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;//styled tambien acepta scss

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`;

const googleStyles = css`
    background-color: #4285f4;
    color: #fff;
    border: 1px solid #113570;

    &:hover {
        background-color: #113570;
        color: #ddd;
        border: 1px solid #4285f4;
    }
`;

const setButtonStyles = props => {
    if (props.isGoogleSignIn) return googleStyles;

    return props.inverted ? invertedStyles : buttonStyles;
}

const CustomButtonStyled = styled.button`
    min-width: 165px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bolder;
    cursor: pointer;
    transition: color 0.2s ease-in, background-color 0.3s ease-in;

    ${ setButtonStyles }
`;

export default CustomButtonStyled;