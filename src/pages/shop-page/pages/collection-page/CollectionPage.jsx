import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { singleCollectionSelector } from '../../../../utils/redux/shop/shopSelectors';
import { CollectionPageDiv, CollectionTitleH2, CollectionItemsDiv } from './CollectionPageStyles';
/* import './CollectionPage.scss'; */

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log(collection)
    return (
        <CollectionPageDiv>
            <CollectionTitleH2>{ title }</CollectionTitleH2>
            <CollectionItemsDiv>
                { items && items.map(item => 
                    <CollectionItem key={ item.id } item={ item } />
                )}
            </CollectionItemsDiv>
        </CollectionPageDiv>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: singleCollectionSelector(ownProps.match.params.collectionID)(state)
    /* Un mapState avanzado con un selector avanzado.
    Recuerda que como este es un componente de un Route, 
    este tiene match como props */
})

export default connect(mapStateToProps)(CollectionPage);