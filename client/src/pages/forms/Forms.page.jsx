import React from 'react';
import SignIn from './components/sign-in/SignIn.component';
import SignUp from './components/sign-up/SignUp.component';
import { FormsPageDiv } from './Forms.styles';
/* import './FormsPage.scss'; */

const FormsPage = () => (
    <FormsPageDiv>
        <SignIn />
        <SignUp />
    </FormsPageDiv>
);

export default FormsPage;