import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import { CollectionPreviewDiv, TitleH2, PreviewDiv } from './CollectionPreviewStyles';
/* import './CollectionPreview.scss'; */

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewDiv>
        <TitleH2>{ title }</TitleH2>
        <PreviewDiv>
            { items.filter( (item, index) => index < 4 )
            .map( (item) => (
                <CollectionItem key={ item.id } item={ item } />
            ))}
        </PreviewDiv>
    </CollectionPreviewDiv>
);

export default CollectionPreview;