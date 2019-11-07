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
`;

export const LogoContainer = styled(Link)`
    width: 70px;
    margin: 25px 5%;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LinkStyled = styled(Link)`${ linkStyles }`;

export const LinkSpan = styled.span`${ linkStyles }`;