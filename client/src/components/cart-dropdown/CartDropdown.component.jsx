import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';
import { cartItemsSelector } from '../../utils/redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../utils/redux/cart/cart.actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan } from './CartDropdown.styles';
/* import './CartDropdown.scss'; */

const customButtonStyles = { marginTop: 'auto' }

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            { cartItems.length 
                ? cartItems.map(item => 
                    <CartItem key={ item.id } item={ item } />
                )
                : <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
            }
        </CartItemsContainer>
        <CustomButton
            styles={ customButtonStyles }
            onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartDropdown());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownContainer>
);

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
//withRouter da un hoc con history como props
/* Aun si no se pasa un mapDispatch, unos de los props por usar 
connect es dispatch, entonces no es necesario mapDispatch */