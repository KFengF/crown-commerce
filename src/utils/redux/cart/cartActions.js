import cartActionTypes from './cartTypes';
const { TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM } = cartActionTypes;

const toggleCartDropdown = () => ({
    type: TOGGLE_CART_DROPDOWN
});

const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
});

const decreaseItem = item => ({
    type: DECREASE_ITEM,
    payload: item
});

export { toggleCartDropdown, addItem, removeItem, decreaseItem };