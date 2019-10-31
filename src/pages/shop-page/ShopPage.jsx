import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './components/collections-overview/CollectionsOverview';
import CollectionPage from './pages/collection-page/CollectionPage';

const ShopPage = ({ match }) => (
    /* Match viene del componente Route que redirige a este 
    componente, tambien estan los props history y location */
    <div>
        <Route
            exact path={ `${ match.path }` } 
            component={ CollectionsOverview }
        />
        <Route
            path={ `${ match.path }/:collectionID` } 
            component={ CollectionPage }
        />
    </div>
);

export default ShopPage;