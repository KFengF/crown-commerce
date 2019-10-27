import cartActionTypes from './cartType';

const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export { toggleCartDropdown, addItem };