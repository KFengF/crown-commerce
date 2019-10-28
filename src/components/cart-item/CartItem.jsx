import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    //Se destructura de this.props -> item y de item -> imageUrl, etc.
    <div className="cart-item">
        <img src={ imageUrl } alt="A cart item" />
        <div className="item-details">
            <span className="name">{ name }</span>
            <span className="price">
                { quantity } x ${ price }
            </span>
        </div>
    </div>
);

export default CartItem;