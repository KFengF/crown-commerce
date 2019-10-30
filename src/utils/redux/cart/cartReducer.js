import cartActionTypes from './cartTypes';
import { addItemToCart, removeItemFromCart, decreaseItemFromCart } from './cartUtils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = ( state=INITIAL_STATE, action ) => {
    const { TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM } = cartActionTypes;
    const { type, payload } = action;
    const { hidden, cartItems } = state;
    switch (type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(cartItems, payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(cartItems, payload)
            }
        case DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemFromCart(cartItems, payload)
            }
        default:
            return state;
    }
}

export default cartReducer;