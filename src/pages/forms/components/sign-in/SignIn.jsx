import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../../../../components/custom-button/CustomButton';
import { signInWithGoogle } from '../../../../utils/firebase';
import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in" >
                <h2 className="title" >I already have an account</h2>
                <span>Sign in with your email and password</span>
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
                    <div className="buttons-container" >
                        <CustomButton type="submit" >
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;