import styled from 'styled-components';

export const CheckoutPageDiv = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

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
    border-bottom: 1px solid darkgrey;
`;

export const TotalSpan = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningP = styled.p`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;

export const HeaderBlock = styled.span`
    width: 23%;
 
    &:last-child {
        width: 8%;
    }
`;