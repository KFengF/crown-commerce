import React from 'react';
import { withRouter } from 'react-router-dom';
import './DirectoryItem.scss';

const DirectoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div 
        className={ `directory-item ${ size }` }
        onClick={ () => history.push(`${ match.url }${ linkUrl }`) }
    >
        <div className="background" style={{ backgroundImage: `url(${ imageUrl })` }} />
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(DirectoryItem);
//withRouter para que tenga los props history y match