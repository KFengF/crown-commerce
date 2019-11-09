import cartActionTypes from './cartTypes';
const { TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM, CLEAR_CART } = cartActionTypes;

export const toggleCartDropdown = () => ({
    type: TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});

export const decreaseItem = item => ({
    type: DECREASE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CLEAR_CART
});