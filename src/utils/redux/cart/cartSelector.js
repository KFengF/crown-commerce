import { createSelector } from 'reselect';

const cartSelector = state => state.cartReducer; //input selector
//El state proviene de rootReducer

const cartItemsSelector = createSelector(
    //output selector
    [cartSelector],
    cartReducer => cartReducer.cartItems
);

const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
    )
)

export { cartItemsSelector, cartItemsCountSelector }