import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { singleCollectionSelector } from '../../../../utils/redux/shop/shopSelectors';
import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page" >
            <h2 className="title" >{ title } </h2>
            <div className="items" >
                { items.map(item => 
                    <CollectionItem key={ item.id } item={ item } />
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: singleCollectionSelector(ownProps.match.params.collectionID)(state)
    /* Un mapState avanzado con un selector avanzado.
    Recuerda que como este es un componente de un Route, 
    este tiene match como props */
})

export default connect(mapStateToProps)(CollectionPage);