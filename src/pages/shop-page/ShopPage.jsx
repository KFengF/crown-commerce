import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from './components/collections-overview/CollectionsOverview';
import CollectionPage from './pages/collection-page/CollectionPage';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';
import { fetchCollectionsStart } from '../../utils/redux/shop/shopActions';
import { isCollectionsFetchingSelector, collectionsSelector } from '../../utils/redux/shop/shopSelectors';

const CollsOverviewWithSpinner = LoadingSpinner(CollectionsOverview);
const CollPageWithSpinner = LoadingSpinner(CollectionPage);

const ShopPage = ({ collections, fetchCollectionsStart, match, isCollectionsFetching }) => {

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
                    <CollsOverviewWithSpinner isLoading={ isCollectionsFetching } { ...props } />
                }
            />
            <Route
                path={ `${ match.path }/:collectionID` } 
                render={ props => 
                    <CollPageWithSpinner isLoading={ isCollectionsFetching } { ...props } />
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);