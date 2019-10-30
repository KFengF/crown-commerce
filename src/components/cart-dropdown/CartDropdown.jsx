import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { cartItemsSelector } from '../../utils/redux/cart/cartSelectors';
import { toggleCartDropdown } from '../../utils/redux/cart/cartActions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown" >
        <div className="cart-items" >
            { cartItems.length 
                ? cartItems.map(item => 
                    <CartItem key={ item.id } item={ item } />
                )
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={ () => {
            history.push('/checkout');
            dispatch(toggleCartDropdown());
            } 
        }>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
//withRouter da un hoc con history como props
/* Aun si no se pasa un mapDispatch, unos de los props por usar 
connect es dispatch, entonces no es necesario mapDispatch */