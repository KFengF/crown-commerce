import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { hiddenSelector } from '../../utils/redux/cart/cartSelectors';
import { currentUserSelector } from '../../utils/redux/user/userSelectors';
import { auth } from '../../utils/firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header" >
        <Link className="logo-container" to="/" >
            <Logo className="logo" />
        </Link>
        <div className="links-container" >
            <Link className="link" to="/shop" >
                SHOP
            </Link>
            <Link className="link" to="/shop" >
                CONTACT
            </Link>
            { currentUser ?
              <div className="link" onClick={ () => auth.signOut() } > LOG OUT </div>
              : <Link className="link" to="/signin" >SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { !hidden && <CartDropdown /> }
    </div>
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