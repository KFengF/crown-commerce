import styled, { css } from 'styled-components';

const headerStyles = css`width: 22%;`;

export const CheckoutItemDiv = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export const ImageDiv = styled.div`
    ${ headerStyles }

    img {
        width: 100%;
    }
`;

export const NameSpan = styled.span`${ headerStyles }`;

export const QuantityDiv = styled.div`
    ${ headerStyles }

    display: flex;

    span {
        cursor: pointer;
    }

    p {
        margin: 0 7px;
    }
`;

export const PriceSpan = styled.span`${ headerStyles }`;

export const RemoveSpan = styled.span`
    width: 12%;
    padding-left: 12px;
    cursor: pointer;
`;