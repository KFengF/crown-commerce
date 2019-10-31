import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { collectionsSelector } from '../../../../utils/redux/shop/shopSelectors';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview" >
        { collections.map( ({ id, ...otherCollectionAttrs }) => (
            <CollectionPreview key={ id } { ...otherCollectionAttrs } />
        )) }
    </div>
);

const mapState = createStructuredSelector({
    collections: collectionsSelector
});

export default connect(mapState)(CollectionsOverview);