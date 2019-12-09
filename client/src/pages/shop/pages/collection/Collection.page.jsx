import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem.component';
import { singleCollectionSelector } from '../../../../utils/redux/shop/shop.selectors';
import { CollectionPageDiv, CollectionTitleH2, CollectionItemsDiv } from './Collection.styles';
/* import './CollectionPage.scss'; */

export const CollectionPage = ({ collection }) => {
    if (collection) {
        const { title, items } = collection;
        return (
            <CollectionPageDiv>
                <CollectionTitleH2>{title}</CollectionTitleH2>
                <CollectionItemsDiv>
                    { items.map(item => 
                        <CollectionItem key={ item.id } item={ item } />
                    )}
                </CollectionItemsDiv>
            </CollectionPageDiv>
        );    
    } else return null;
}

const mapStateToProps = (state, ownProps) => ({
    collection: singleCollectionSelector(ownProps.match.params.collectionID)(state)
    /* Un mapState avanzado con un selector avanzado.
    Recuerda que como este es un componente de un Route, 
    este tiene match como props */
})

export default connect(mapStateToProps)(CollectionPage);