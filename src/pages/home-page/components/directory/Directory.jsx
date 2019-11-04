import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DirectoryItem from '../directory-item/DirectoryItem';
import { sectionsSelector } from '../../../../utils/redux/directory/directorySelectors'
import { DirectoryDiv } from './DirectoryStyles';
/* import './Directory.scss'; */

const Directory = ({ sections }) => (
    <DirectoryDiv>
    { Object.keys(sections).map(key => {
        const { id, imageUrl, linkUrl, size } = sections[key];
        return <DirectoryItem 
            key={ id } title={ key } 
            imageUrl={ imageUrl } linkUrl={ linkUrl }
            size={ size }
        />
    })}
    </DirectoryDiv>
);

const mapState = createStructuredSelector({
    sections: sectionsSelector
})

export default connect(mapState)(Directory);