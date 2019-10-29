import { createSelector } from 'reselect';
/* createSelector es una funcion que da un nuevo selector
pero el state se queda en el cache y mapStateToProps no 
tendra que pasar todo el state sino solamente lo que cambio.
Sin esto simpre que se llama mapStateToProps, se actualizan TODOS
los componentes */

const cartSelector = state => state.cartReducer; //input selector
//El state proviene de rootReducer

const cartItemsSelector = createSelector(
    //output selector
    [cartSelector], 
    /* en este array se puede pasar otro selector 
    que sera usado como segundo parametro.
    tambien en vez de array se puede pasar como argumentos 
    separados, es igual */
    cartReducer => cartReducer.cartItems
);

const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
    )
);

const hiddenSelector = createSelector(
    [cartSelector],
    cartReducer => cartReducer.hidden
);

const cartItemsTotalSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
        0
    )
);

export {
    cartItemsSelector,
    cartItemsCountSelector,
    hiddenSelector,
    cartItemsTotalSelector
}