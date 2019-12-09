import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import { collectionsSelector } from '../../../../utils/redux/shop/shop.selectors';
import { CollectionsOverviewDiv } from './CollectionsOverview.styles';
/* import './CollectionsOverview.scss'; */

export const CollectionsOverviewPage = ({ collections }) => (
    <CollectionsOverviewDiv>
        { collections && 
            Object.keys(collections).map(key => {
                const { id, ...otherCollectionAttrs } = collections[key];
                return <CollectionPreview 
                    key={ id } title={ key } 
                    { ...otherCollectionAttrs }
                />
            })
        }
    </CollectionsOverviewDiv>
);

const mapState = createStructuredSelector({
    collections: collectionsSelector
});

export default connect(mapState)(CollectionsOverviewPage);