import React from 'react';
import { auth, createUserDoc } from '../../../../utils/firebase';
import FormInput from '../form-input/FormInput';
import CustomButton from '../../../../components/custom-button/CustomButton';
import './SignUp.scss';

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

        if ( password !== confirmPassword ) {
            alert('passwords dont match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserDoc(user, { displayName });
            //No se porque se esta pasando el displayName
            this.setState(initialState)
            //Tampoco se porque se esta poniendo el estado inicial
        } catch (error) {
            console.error(error)
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
            <div className="sign-up" >
                <h2 className="title" >I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={ this.onSubmit } >
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
            </div>
        );
    }
}

export default SignUp;