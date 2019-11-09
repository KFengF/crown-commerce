import React from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/FormInput';
import CustomButton from '../../../../components/custom-button/CustomButton';
import { signUpStart } from '../../../../utils/redux/user/userActions'
import { SignUpDiv, SignUpTitleH2, SignUpSpan } from './SignUpStyles';
/* import './SignUp.scss'; */

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

class SignUp extends React.Component {
    constructor () {
        super ();
        
        this.state = initialState
    }

    onSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if ( password !== confirmPassword ) {
            alert('passwords dont match');
            return;
        }

        try {
            await signUpStart({ displayName, email, password });
            this.setState(initialState);
        } catch (error) {
            console.error(error);
        }
    }

    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value }); 
        //los parentesis significa que lo que sea name sera el key
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpDiv>
                <SignUpTitleH2>I do not have an account</SignUpTitleH2>
                <SignUpSpan>Sign up with your email and password</SignUpSpan>
                <form onSubmit={ this.onSubmit } >
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={ displayName }
                        onChange={ this.onChange }
                        label="Display Name"
                        required 
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={ email }
                        onChange={ this.onChange }
                        label="Email"
                        required 
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ this.onChange }
                        label="Password"
                        required 
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={ confirmPassword }
                        onChange={ this.onChange }
                        label="Confirm Password"
                        required 
                    />
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                </form>
            </SignUpDiv>
        );
    }
}

const mapDispatch = dispatch => ({
    signUpStart: datas => dispatch(signUpStart(datas))
});

export default connect(null, mapDispatch)(SignUp);