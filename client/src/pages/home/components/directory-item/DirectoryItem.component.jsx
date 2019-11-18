import React from 'react';
import { withRouter } from 'react-router-dom';
import { DirectoryItemDiv, TitleH2, SubtitleSpan } from './DirectoryItem.styles';
/* import './DirectoryItem.scss'; */

const DirectoryItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <DirectoryItemDiv
        size={ size }
        onClick={ () => history.push(`${ match.url }${ linkUrl }`) }
    >
        <div className="background" style={{ backgroundImage: `url(${ imageUrl })` }} />
        <div className="content">
            <TitleH2>{ title }</TitleH2>
            <SubtitleSpan>SHOP NOW</SubtitleSpan>
        </div>
    </DirectoryItemDiv>
); //Deje esos divs porque no encontraba como reemplazar unos estilos

export default withRouter(DirectoryItem);
//withRouter para que tenga los props history y match