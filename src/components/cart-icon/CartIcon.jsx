import React from 'react';
import { connect } from 'react-redux';
import toggleCartDropdown from '../../utils/redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCartDropdown }) => (
    <div className="cart-icon" onClick={ toggleCartDropdown } >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" >0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(null, mapDispatchToProps)(CartIcon);