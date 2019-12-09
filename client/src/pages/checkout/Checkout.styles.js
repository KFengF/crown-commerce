import styled from 'styled-components';

export const CheckoutPageDiv = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    margin: 50px auto;

    button {
        margin-left: auto;
        margin-top: 35px;
    }
`;

export const CheckoutHeaderDiv = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid darkgrey;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export const TotalSpan = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media screen and (max-width: 600px) {
        font-size: 26px;
    }
`;

TotalSpan.displayName = 'TotalSpan';

export const TestWarningP = styled.p`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

export const HeaderBlock = styled.span`
    width: 22%;
 
    &:last-child {
        width: 12%;
    }
`;