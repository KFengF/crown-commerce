import cartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, decreaseItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = ( state=INITIAL_STATE, action ) => {
    const { type, payload } = action;
    const { hidden, cartItems } = state;
    switch (type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(cartItems, payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(cartItems, payload)
            }
        case cartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemFromCart(cartItems, payload)
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default: return state;
    }
}

export default cartReducer;