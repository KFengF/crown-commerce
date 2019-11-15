import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const TitleLink = styled(Link)`
    text-transform: uppercase;
    font-size: 32px;
    margin-bottom: 25px;
    margin-right: auto;
`;

export const PreviewDiv = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
`;