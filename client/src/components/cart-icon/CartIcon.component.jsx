import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../utils/redux/cart/cart.actions';
import { cartItemsCountSelector } from '../../utils/redux/cart/cart.selectors';
import { CartIconContainer, ShoppingIconStyled, ItemCountSpan } from './CartIcon.styles';
/* import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import './CartIcon.scss'; */

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
    <CartIconContainer onClick={ toggleCartDropdown } >
        <ShoppingIconStyled />
        <ItemCountSpan>{ itemCount }</ItemCountSpan>
    </CartIconContainer>
);

const mapStateToProps = state => ({
    itemCount: cartItemsCountSelector(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);