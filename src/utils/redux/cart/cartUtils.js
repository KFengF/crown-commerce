const addItemToCart = (cartItems, cartItemToAdd) => {
    //Tal vez halla mejor manera de hacerlo pero este es adecuado para React
    const doesCartItemExist = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (doesCartItemExist) {
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem );
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
}

export default addItemToCart;