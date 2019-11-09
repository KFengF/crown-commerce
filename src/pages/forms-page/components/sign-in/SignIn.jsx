import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput';
import CustomButton from '../../../../components/custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../../../utils/redux/user/userActions';
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
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
        this.setState(initialState);
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

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
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
        )
    }
}

const mapDispatch = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatch)(SignIn);