/* El workflow para agregar una nueva accion:
type -> action -> utils -> reducer -> rootReducer */

const cartActionTypes = {
    TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    DECREASE_ITEM: 'DECREASE_ITEM'
}

export default cartActionTypes;