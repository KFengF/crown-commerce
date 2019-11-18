import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../../../../components/custom-button/CustomButton.component';
import { googleSignInStart, emailSignInStart } from '../../../../utils/redux/user/user.actions';
import { SignInDiv, SignInTitleH2, SignInSpan, ButtonDiv } from './SignIn.styles';
/* import './SignIn.scss'; */

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const initialState = { email: '', password: '' }
    const [credentials, setCredentials] = useState(initialState);
    const { email, password } = credentials;

    const onSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
        setCredentials(initialState);
        //Limpiando los inputs

        /* antes de usar saga:
        try {
            await auth.signInWithEmailAndPassword(email, password);
            //iniciando sesion con email
            this.setState(initialState);
            //Limpiando los inputs
        } catch (error) {
            console.error('Error signing in', error);
        } */
    }

    const onChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    }

    return (
        <SignInDiv>
            <SignInTitleH2>I already have an account</SignInTitleH2>
            <SignInSpan>Sign in with your email and password</SignInSpan>
            <form onSubmit={ onSubmit } >
                <FormInput
                    name="email"
                    value={ email }
                    type="email"
                    onChange={ onChange }
                    label="Email"
                    required 
                />
                <FormInput
                    name="password"
                    value={ password }
                    type="password"
                    onChange={ onChange }
                    label="Password"
                    required
                />
                <ButtonDiv>
                    <CustomButton type="submit" >
                        Sign in
                    </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={ googleSignInStart }
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonDiv>
            </form>
        </SignInDiv>
    );
}

const mapDispatch = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
        dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatch)(SignIn);