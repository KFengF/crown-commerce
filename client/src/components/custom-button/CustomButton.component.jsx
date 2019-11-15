import React from 'react';
import CustomButtonStyled from './CustomButton.styles';
/* import './CustomButton.scss'; */

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonStyled { ...otherProps } >
        { children }
    </CustomButtonStyled>
);

/* El anterior className={ `${
    isGoogleSignIn && 'google-sign-in'
} ${
     inverted && 'inverted' 
} custom-button` }  */

export default CustomButton;