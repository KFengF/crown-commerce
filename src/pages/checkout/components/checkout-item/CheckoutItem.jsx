import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, decreaseItem } from '../../../../utils/redux/cart/cartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, removeItem, decreaseItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="checkout item" />
            </div>
            <span className="name" >{ name }</span>
            <div className="quantity" >
                <div 
                    className="arrow" 
                    onClick={ () => decreaseItem(cartItem) }
                >
                    &#10094;
                </div>
                <span className="value">{ quantity }</span>
                <p className="arrow" onClick={ () => addItem(cartItem) } >&#10095;</p>
            </div>
            <span className="price" >{ price }</span>
            <div 
                className="remove-button" 
                onClick={ () => removeItem(cartItem) }
            >
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);