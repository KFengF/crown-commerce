import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import { CollectionPreviewDiv, TitleLink, PreviewDiv } from './CollectionPreviewStyles';
/* import './CollectionPreview.scss'; */

const CollectionPreview = ({ title, items, match }) => (
    <CollectionPreviewDiv>
        <TitleLink to={ `shop/${ title }` } >
            { title }
        </TitleLink>
        <PreviewDiv>
            { items.filter( (item, index) => index < 4 )
            .map( (item) => (
                <CollectionItem key={ item.id } item={ item } />
            ))}
        </PreviewDiv>
    </CollectionPreviewDiv>
);

export default CollectionPreview;