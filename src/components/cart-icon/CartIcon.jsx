import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../utils/redux/cart/cartActions';
import { cartItemCountSelector } from '../../utils/redux/cart/cartSelector';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
    <div className="cart-icon" onClick={ toggleCartDropdown } >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" >{ itemCount }</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: cartItemCountSelector(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);