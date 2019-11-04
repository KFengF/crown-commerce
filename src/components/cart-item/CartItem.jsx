import React from 'react';
import { CartItemContainer, Image, ItemsDetailsContainer, NameSpan } from './CartItemStyles';
/* import './CartItem.scss'; */

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    //Se destructura de this.props -> item y de item -> imageUrl, etc.
    <CartItemContainer>
        <Image src={ imageUrl } alt="A cart item" />
        <ItemsDetailsContainer>
            <NameSpan>{ name }</NameSpan>
            <span>
                { quantity } x ${ price }
            </span>
        </ItemsDetailsContainer>
    </CartItemContainer>
);

export default CartItem;