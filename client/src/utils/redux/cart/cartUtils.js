const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemFound = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (cartItemFound) {
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem );
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
}

const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(
        cartItem => cartItem.id !== itemToRemove.id
    );
}

const decreaseItemFromCart = (cartItems, itemToDecrease) => {
    if (itemToDecrease.quantity === 1) {
        return removeItemFromCart(cartItems, itemToDecrease);
    } else {
        return cartItems.map( cartItem => 
            cartItem.id === itemToDecrease.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem );
    }
}

export { addItemToCart, removeItemFromCart, decreaseItemFromCart }