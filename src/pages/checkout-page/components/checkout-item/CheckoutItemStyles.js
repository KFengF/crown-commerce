import styled, { css } from 'styled-components';

const headerStyles = css`width: 23%;`;

export const CheckoutItemDiv = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageDiv = styled.div`
    width: 23%;
    padding-right: 15px;

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
    padding-left: 12px;
    cursor: pointer;
`;