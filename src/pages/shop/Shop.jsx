import React from 'react';
import CollectionPreview from './components/collection-preview/CollectionPreview';
import shopData from './shopData';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: shopData
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className="shop-page" >
                { collections.map( ({ id, ...otherCollectionAttrs }) => (
                    <CollectionPreview key={ id } { ...otherCollectionAttrs } />
                )) }
            </div>
        )
    }
}

export default Shop;