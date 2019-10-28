import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { cartItemSelector } from '../../utils/redux/cart/cartSelector';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown" >
        <div className="cart-items" >
            { cartItems.map(item => 
                <CartItem key={ item.id } item={ item } />
            )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: cartItemSelector(state)
});

export default connect(mapStateToProps)(CartDropdown);