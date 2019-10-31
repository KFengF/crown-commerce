import React from 'react';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import './FormsPage.scss';

const FormsPage = () => (
    <div className="forms-page" >
        <SignIn />
        <SignUp />
    </div>
);

export default FormsPage;