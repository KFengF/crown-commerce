import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from './components/collections-overview/CollectionsOverview';
import CollectionPage from './pages/collection-page/CollectionPage';
import { postCollections } from '../../../utils/redux/shop/shopActions';
import { firestore } from '../../utils/firebase/firebase';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { postCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const newDataArray = snapshot.docs.map(doc => {
                const { title, items } = doc.data();

                return {
                    routeName: encodeURI(title),
                    id: doc.id,
                    title,
                    items
                }
            });

            const newCollections = newDataArray.reduce((accumulator, data) => {
                accumulator[data.title] = data;
                return accumulator;
            }, {});

            postCollections(newCollections)
        });
    }

    render() {
        const { match } = this.props;
        return (
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
    }
}

const mapDispatch = dispatch => ({
    postCollections: collections => dispatch(postCollections(collections))
})

export default connect(null, mapDispatch)(ShopPage);