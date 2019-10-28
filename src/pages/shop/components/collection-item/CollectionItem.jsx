import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../../utils/redux/cart/cartActions';
import CustomButton from '../../../../components/custom-button/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item" >
            <div className="image" 
                style={{ backgroundImage: `url(${ imageUrl })` }}
            />
            <div className="collection-footer" >
                <span className="name" >{ name }</span>
                <span className="price" >{ price }</span>
            </div>
            <CustomButton inverted onClick={ () => addItem(item) } >
                ADD TO CART
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect( null, mapDispatchToProps )(CollectionItem);