import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { signOut } from '../../utils/redux/user/userActions';
import { hiddenSelector } from '../../utils/redux/cart/cartSelectors';
import { currentUserSelector } from '../../utils/redux/user/userSelectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, LinksContainer, LinkStyled, LinkSpan } from './HeaderStyles'
/* import './Header.scss'; */

const Header = ({ currentUser, hidden, signOut }) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo />
        </LogoContainer>
        <LinksContainer>
            <LinkStyled to="/shop" >
                SHOP
            </LinkStyled>
            <LinkStyled to="/shop" >
                CONTACT
            </LinkStyled>
            { currentUser ?
                <LinkSpan onClick={ signOut } > LOG OUT </LinkSpan>
              : <LinkStyled to="/signin" >SIGN IN</LinkStyled>
              //En vez de usar LinkSpan se podria usar LinkStyled as="span"
            }
            <CartIcon />
        </LinksContainer>
        { !hidden && <CartDropdown /> }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({ 
    currentUser: currentUserSelector,
    hidden: hiddenSelector
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

/* El anterior mapStateToProps antes de reselect
const mapStateToProps = rootReducer => ({ 
    currentUser: rootReducer.userReducer.currentUser,
    hidden: rootReducer.cartReducer.hidden
}); */

export default connect(mapStateToProps, mapDispatchToProps)(Header);
/* El nuevo componente estara conectado al store, cada vez que 
la propiedad currentUser en el store sea actualizado, mapStateToProps 
hara que Header tenga el nuevo currentUser */