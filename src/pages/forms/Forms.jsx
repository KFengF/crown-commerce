import React from 'react';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import './Forms.scss';

const Forms = () => (
    <div className="forms" >
        <SignIn />
        <SignUp />
    </div>
);

export default Forms;