import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h2 className="title" >{ title }</h2>
        <div className="preview">
            { items.filter( (item, index) => index < 4 )
            .map( (item) => (
                <CollectionItem key={ item.id } item={ item } />
            ))}
        </div>
    </div>
);

export default CollectionPreview;