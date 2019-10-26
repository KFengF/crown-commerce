import cartActionTypes from './cartType';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = ( state=INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;