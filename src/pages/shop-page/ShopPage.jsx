import React from 'react';
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

class ShopPage extends React.Component {
    componentDidMount(){
        const { collections, fetchCollectionsStart } = this.props;
        if ( !Boolean(collections) ) fetchCollectionsStart();
    }

    render() {
        const { match, isCollectionsFetching } = this.props;
        return (
            /* Match viene del componente Route que redirige a este 
            componente, tambien estan los props history y location */
            <div>
                <Route
                    exact path={ `${ match.path }` } 
                    /* component={ CollectionsOverview } */
                    render={ props => 
                        <CollsOverviewWithSpinner isLoading={ isCollectionsFetching } { ...props } />
                    }
                />
                <Route
                    path={ `${ match.path }/:collectionID` } 
                    /* component={ CollectionPage } */
                    render={ props => 
                        <CollPageWithSpinner isLoading={ isCollectionsFetching } { ...props } />
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: isCollectionsFetchingSelector,
    collections: collectionsSelector
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);