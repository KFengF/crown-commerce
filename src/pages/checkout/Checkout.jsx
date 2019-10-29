import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from './components/checkout-item/CheckoutItem';
import { cartItemsSelector, cartItemsTotalSelector } from '../../utils/redux/cart/cartSelector';
import './Checkout.scss';

const Checkout = ({ cartItems, cartItemsTotal }) => (
    <div className="checkout">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        { cartItems.map(cartItem => 
            <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
        ) }
        <span className="total">TOTAL: ${ cartItemsTotal }</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartItemsTotal: cartItemsTotalSelector
});

export default connect(mapStateToProps)(Checkout);