import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../../utils/redux/cart/cart.actions';
import { 
    CollectionItemDiv, 
    ImageDiv, 
    CollectionFooter, 
    CustomButtonStyled, 
    NameSpan, PriceSpan 
} from './CollectionItem.styles';
/* import './CollectionItem.scss'; */

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemDiv>
            <ImageDiv
                style={{ backgroundImage: `url(${ imageUrl })` }}
            />
            <CollectionFooter>
                <NameSpan>{ name }</NameSpan>
                <PriceSpan>{ price }</PriceSpan>
            </CollectionFooter>
            <CustomButtonStyled
                inverted 
                onClick={ () => addItem(item) } 
            >
                ADD TO CART
            </CustomButtonStyled>
        </CollectionItemDiv>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect( null, mapDispatchToProps )(CollectionItem);