import React from 'react';
import SignIn from './components/sign-in/SignIn.component';
import SignUp from './components/sign-up/SignUp.component';
import { FormPageDiv } from './Forms.styles';
/* import './FormsPage.scss'; */

const FormsPage = () => (
    <FormPageDiv>
        <SignIn />
        <SignUp />
    </FormPageDiv>
);

export default FormsPage;