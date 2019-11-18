import styled from 'styled-components';

export const ContactPageDiv = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: justify;
    font-size: 24px;
    line-height: 1.4;
    
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

export const TextP = styled.p`
    max-width: 800px;
    width: 95%;
    margin-bottom: 10px;
`;

export const TestWarningP = styled(TextP)`
    color: red;
`;

export const Anchor = styled.a`
    word-break: break-word;
`;