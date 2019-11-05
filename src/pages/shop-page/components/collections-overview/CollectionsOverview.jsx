import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { collectionsSelector } from '../../../../utils/redux/shop/shopSelectors';
import { CollectionsOverviewDiv } from './CollectionOverviewStyles';
/* import './CollectionsOverview.scss'; */

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewDiv>
        { collections ? 
            Object.keys(collections).map(key => {
                const { id, ...otherCollectionAttrs } = collections[key];
                return <CollectionPreview 
                    key={ id } title={ key } 
                    { ...otherCollectionAttrs }
                />
            }) :
            null
        }
    </CollectionsOverviewDiv>
);

const mapState = createStructuredSelector({
    collections: collectionsSelector
});

export default connect(mapState)(CollectionsOverview);