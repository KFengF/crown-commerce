import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div 
        className={ `menu-item ${ size }` }
        onclick={ () => history.push(`${ match.url }${ linkUrl }`) }
    >
        <div className="background" style={{ backgroundImage: `url(${ imageUrl })` }} />
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);