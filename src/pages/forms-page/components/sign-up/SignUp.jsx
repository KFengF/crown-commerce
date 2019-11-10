import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput';
import CustomButton from '../../../../components/custom-button/CustomButton';
import { signUpStart } from '../../../../utils/redux/user/userActions'
import { SignUpDiv, SignUpTitleH2, SignUpSpan } from './SignUpStyles';
/* import './SignUp.scss'; */

const SignUp = ({ signUpStart }) => {
    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [credentials, setCredentials] = useState(initialState);
    const { displayName, email, password, confirmPassword } = credentials;

    const onSubmit = async event => {
        event.preventDefault();

        if ( password !== confirmPassword ) {
            alert('passwords dont match');
            return;
        }

        try {
            await signUpStart({ displayName, email, password });
            setCredentials(initialState);
        } catch (error) {
            console.error(error);
        }
    }

    const onChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...credentials, [name]: value }); 
        //los parentesis significa que lo que sea name sera el key
    }

    return (
        <SignUpDiv>
            <SignUpTitleH2>I do not have an account</SignUpTitleH2>
            <SignUpSpan>Sign up with your email and password</SignUpSpan>
            <form onSubmit={ onSubmit } >
                <FormInput 
                    type="text"
                    name="displayName"
                    value={ displayName }
                    onChange={ onChange }
                    label="Display Name"
                    required 
                />
                <FormInput 
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    label="Email"
                    required 
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ onChange }
                    label="Password"
                    required 
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={ onChange }
                    label="Confirm Password"
                    required 
                />
                <CustomButton type="submit" >SIGN UP</CustomButton>
            </form>
        </SignUpDiv>
    );
}

const mapDispatch = dispatch => ({
    signUpStart: datas => dispatch(signUpStart(datas))
});

export default connect(null, mapDispatch)(SignUp);