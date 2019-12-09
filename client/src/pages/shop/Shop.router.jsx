import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner.component';
import LoadingSpinnerHOC from '../../components/loading-spinner/LoadingSpinner.hoc';
import { fetchCollectionsStart } from '../../utils/redux/shop/shop.actions';
import { isCollectionsFetchingSelector, collectionsSelector } from '../../utils/redux/shop/shop.selectors';

const CollectionsOverviewPage = lazy(() => import('./pages/collections-overview/CollectionsOverview.page'));
const CollectionPage = lazy(() => import('./pages/collection/Collection.page'));

const CollsOverviewPageSpinned = LoadingSpinnerHOC(CollectionsOverviewPage);
const CollPageSpinned = LoadingSpinnerHOC(CollectionPage);

export const ShopRouter = ({ collections, fetchCollectionsStart, match, isCollectionsFetching }) => {
    useEffect(() => {
        if ( !Boolean(collections) ) fetchCollectionsStart();
        // eslint-disable-next-line
    }, [collections]); 

    /* Match viene del componente Route que redirige a este 
    componente, tambien estan los props history y location */
    return (
        <Suspense fallback={ <LoadingSpinner /> }>
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
        </Suspense>
    );
}


const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: isCollectionsFetchingSelector,
    collections: collectionsSelector
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopRouter);