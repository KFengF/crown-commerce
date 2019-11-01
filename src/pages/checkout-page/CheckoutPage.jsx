import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from './components/checkout-item/CheckoutItem';
import StripeCheckoutButton from './components/stripe-checkout-button/StripeCheckoutButton';
import { cartItemsSelector, cartItemsTotalSelector } from '../../utils/redux/cart/cartSelectors';
import './CheckoutPage.scss';

const checkoutHeaders = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            { checkoutHeaders.map(header =>
                <div className="header-block">
                    <span>{ header }</span>
                </div>
            )}
        </div>
        { cartItems.map(cartItem => 
            <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
        ) }
        <span className="total">TOTAL: ${ cartItemsTotal }</span>
        <div className="test-warning">
            *Please use the following test credit card for payments* 
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={ total } />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartItemsTotal: cartItemsTotalSelector
});

export default connect(mapStateToProps)(CheckoutPage);