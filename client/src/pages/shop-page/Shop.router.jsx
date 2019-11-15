import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverviewPage from './pages/collections-overview/CollectionsOverview.page';
import CollectionPage from './pages/collection-page/Collection.page';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner.hoc';
import { fetchCollectionsStart } from '../../utils/redux/shop/shop.actions';
import { isCollectionsFetchingSelector, collectionsSelector } from '../../utils/redux/shop/shop.selectors';

const CollsOverviewPageSpinned = LoadingSpinner(CollectionsOverviewPage);
const CollPageSpinned = LoadingSpinner(CollectionPage);

const ShopRouter = ({ collections, fetchCollectionsStart, match, isCollectionsFetching }) => {

    useEffect(() => {
        if ( !Boolean(collections) ) fetchCollectionsStart();
    });

    return (
        /* Match viene del componente Route que redirige a este 
        componente, tambien estan los props history y location */
        <div>
            <Route
                exact path={ `${ match.path }` } 
                render={ props => 
                    <CollsOverviewPageSpinned isLoading={ isCollectionsFetching } { ...props } />
                }
            />
            <Route
                path={ `${ match.path }/:collectionID` } 
                render={ props => 
                    <CollPageSpinned isLoading={ isCollectionsFetching } { ...props } />
                }
            />
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: isCollectionsFetchingSelector,
    collections: collectionsSelector
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopRouter);