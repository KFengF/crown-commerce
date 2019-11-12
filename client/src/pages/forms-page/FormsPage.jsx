import React from 'react';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import { FormPageDiv } from './FormsPageStyles';
/* import './FormsPage.scss'; */

const FormsPage = () => (
    <FormPageDiv>
        <SignIn />
        <SignUp />
    </FormPageDiv>
);

export default FormsPage;