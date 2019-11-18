import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from './components/checkout-item/CheckoutItem.component';
import StripeButton from './components/stripe-button/StripeButton.component';
import { cartItemsSelector, cartItemsTotalSelector } from '../../utils/redux/cart/cart.selectors';
import { CheckoutPageDiv, CheckoutHeaderDiv, TotalSpan, TestWarningP, HeaderBlock } from './Checkout.styles';
/* import './CheckoutPage.scss'; */

const checkoutHeaders = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
    <CheckoutPageDiv>
        <CheckoutHeaderDiv>
            { checkoutHeaders.map((header, index) =>
                <HeaderBlock key={ index } >{ header }</HeaderBlock>
            )}
        </CheckoutHeaderDiv>
        { cartItems.map(cartItem => 
            <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
        ) }
        <TotalSpan>TOTAL: ${ cartItemsTotal }</TotalSpan>
        <TestWarningP>
            *Please use the following test credit card for payments* 
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </TestWarningP>
        <StripeButton price={ cartItemsTotal } />
    </CheckoutPageDiv>
);

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartItemsTotal: cartItemsTotalSelector
});

export default connect(mapStateToProps)(CheckoutPage);