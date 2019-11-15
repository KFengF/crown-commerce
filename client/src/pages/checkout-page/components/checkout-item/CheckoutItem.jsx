import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, decreaseItem } from '../../../../utils/redux/cart/cartActions';
import { CheckoutItemDiv, ImageDiv, NameSpan, QuantityDiv, PriceSpan, RemoveSpan } from './CheckoutItemStyles';
/* import './CheckoutItem.scss'; */

const CheckoutItem = ({ cartItem, removeItem, decreaseItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemDiv>
            <ImageDiv>
                <img src={ imageUrl } alt="checkout item" />
            </ImageDiv>
            <NameSpan>{ name }</NameSpan>
            <QuantityDiv >
                <span
                    onClick={ () => decreaseItem(cartItem) }
                    style={{ marginLeft: 'auto' }}
                >
                    &#10094;
                </span>
                <p>{ quantity }</p>
                <span
                    onClick={ () => addItem(cartItem) }
                    style={{ marginRight: 'auto' }}
                >
                    &#10095;
                </span>
            </QuantityDiv>
            <PriceSpan>{ price }</PriceSpan>
            <RemoveSpan onClick={ () => removeItem(cartItem) } >
                &#10005;
            </RemoveSpan>
        </CheckoutItemDiv>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);