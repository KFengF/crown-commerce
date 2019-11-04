import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../../../../components/custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../../../utils/firebase/firebase';
import { SignInDiv, SignInTitleH2, SignInSpan, ButtonDiv } from './SignInStyles';
/* import './SignIn.scss'; */

const initialState = {
    email: '',
    password: ''
}

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    onSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            //iniciando sesion con email
            this.setState(initialState);
            //Limpiando los inputs
        } catch (error) {
            console.log('Error signing in', error);
        }
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <SignInDiv>
                <SignInTitleH2>I already have an account</SignInTitleH2>
                <SignInSpan>Sign in with your email and password</SignInSpan>
                <form onSubmit={ this.onSubmit } >
                    <FormInput
                        name="email"
                        value={ email }
                        type="email"
                        onChange={ this.onChange }
                        label="Email"
                        required 
                    />
                    <FormInput
                        name="password"
                        value={ password }
                        type="password"
                        onChange={ this.onChange }
                        label="Password"
                        required
                    />
                    <ButtonDiv>
                        <CustomButton type="submit" >
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >
                            Sign in with Google
                        </CustomButton>
                    </ButtonDiv>
                </form>
            </SignInDiv>
        )
    }
}

export default SignIn;