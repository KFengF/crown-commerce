import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import { CollectionPreviewDiv, TitleLink, PreviewDiv } from './CollectionPreview.styles';
/* import './CollectionPreview.scss'; */

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewDiv>
        <TitleLink to={ `shop/${ title }` } >
            { title }
        </TitleLink>
        <PreviewDiv>
            { 
                items.slice(0, 4)
                .map((item) => (
                    <CollectionItem key={ item.id } item={ item } />
                ))
            }
        </PreviewDiv>
    </CollectionPreviewDiv>
);

export default CollectionPreview;