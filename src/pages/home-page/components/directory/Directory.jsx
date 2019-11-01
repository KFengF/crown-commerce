import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DirectoryItem from '../directory-item/DirectoryItem';
import { sectionsSelector } from '../../../../utils/redux/directory/directorySelectors'
import './Directory.scss';

const Directory = ({ sections }) => (
    <div className="directory" >
    { Object.values(sections).map(({ id, title, imageUrl, linkUrl, size }) => 
            <DirectoryItem key={ id } title={ title } imageUrl={ imageUrl } linkUrl={ linkUrl } size={ size } />
        )}
    </div>
);

const mapState = createStructuredSelector({
    sections: sectionsSelector
})

export default connect(mapState)(Directory);