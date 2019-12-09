import styled from 'styled-components';

export const CollectionPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CollectionTitleH2 = styled.h2`
    font-size: 38px;
    text-transform: uppercase;
    margin: 0 auto 30px;
`;

CollectionTitleH2.displayName = 'CollectionTitleH2';

export const CollectionItemsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
    }
`;