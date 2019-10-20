import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1>{ title }</h1>
        <div className="preview">
            { items.filter( (item, index) => index < 4 )
            .map( ({ id, ...otherItemAttrs }) => (
                <CollectionItem key={ id } { ...otherItemAttrs } />
            ))}
        </div>
    </div>
);

export default CollectionPreview;