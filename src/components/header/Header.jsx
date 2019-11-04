import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { hiddenSelector } from '../../utils/redux/cart/cartSelectors';
import { currentUserSelector } from '../../utils/redux/user/userSelectors';
import { auth } from '../../utils/firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, LinksContainer, LinkStyled } from './HeaderStyles'
/* import './Header.scss'; */

const Header = ({ currentUser, hidden }) => (
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
              <LinkStyled as='div' onClick={ () => auth.signOut() } > LOG OUT </LinkStyled>
              //as='div' significa que no sera el componente Link sino el div tag
              : <LinkStyled to="/signin" >SIGN IN</LinkStyled>
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

/* El anterior mapStateToProps antes de reselect
const mapStateToProps = rootReducer => ({ 
    currentUser: rootReducer.userReducer.currentUser,
    hidden: rootReducer.cartReducer.hidden
}); */

export default connect(mapStateToProps)(Header);
/* El nuevo componente estara conectado al store, cada vez que 
la propiedad currentUser en el store sea actualizado, mapStateToProps 
hara que Header tenga el nuevo currentUser */