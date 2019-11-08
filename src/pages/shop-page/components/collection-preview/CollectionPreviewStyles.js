import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
`;