import styled from 'styled-components';

export const SignInDiv = styled.div`
    width: 90%;
    max-width: 440px;
    display: flex;
    flex-direction: column;
    margin-right: 5%;

    @media screen and (max-width: 800px) {
        margin: 0 0 50px;
    }
`;

export const SignInTitleH2 = styled.h2`margin-bottom: 10px;`;

export const SignInSpan = styled.span`letter-spacing: 1px;`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;