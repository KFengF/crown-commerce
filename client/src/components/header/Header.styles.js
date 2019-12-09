import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyles = css`
    margin: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 55px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    width: 50px;
    margin: 25px 5%;

    svg {
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        width: 30vw;
        margin: 0;
    }

    @media screen and (max-width: 400px) {
        width: 10vw;
        margin: 0;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80vw;
    }
`;

export const LinkStyled = styled(Link)`${ linkStyles }`;

LinkStyled.displayName = 'LinkStyled';

export const LinkSpan = styled.span`${ linkStyles }`;

LinkSpan.displayName = 'LinkSpan';