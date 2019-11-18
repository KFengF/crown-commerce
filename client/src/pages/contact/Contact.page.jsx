import React from 'react';
import { ContactPageDiv, TextP, TestWarningP, Anchor } from './Contact.styles';

const links = {
    'github repository': 'https://github.com/KFengF/crown-commerce.git',
    'email': 'fengfengkevin@gmail.com'
}

const ContactPage = () => (
    <ContactPageDiv>
        {
            Object.keys(links).map(key => (
                <TextP>
                    The { key } is here: &nbsp;
                    <Anchor href={ links[key] } target="_blank" >
                        { links[key] }
                    </Anchor>
                </TextP>
            ))
        }
        <TestWarningP>
            *This project is only for skill demonstration purposes*
        </TestWarningP>
    </ContactPageDiv>
);

export default ContactPage;