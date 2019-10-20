import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
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
              <div className="link" onClick={ auth.signOut } > LOG OUT </div>
              : <Link className="link" to="/signin" >SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;