import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../utils/firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);

const mapStateToProps = rootReducer => ({ 
    currentUser: rootReducer.user.currentUser
})

export default connect(mapStateToProps)(Header);
/* El nuevo componente estara conectado al store, cada vez que 
la propiedad currentUser en el store sea actualizado, mapStateToProps 
hara que Header tenga el nuevo currentUser */