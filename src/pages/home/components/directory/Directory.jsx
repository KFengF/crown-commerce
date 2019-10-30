import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/MenuItem';
import { sectionsSelector } from '../../../../utils/redux/directory/directorySelectors'
import './Directory.scss';

const Directory = ({ sections }) => (
    <div className="directory" >
        { sections.map(({ id, title, imageUrl, linkUrl, size }) => 
            <MenuItem key={ id } title={ title } imageUrl={ imageUrl } linkUrl={ linkUrl } size={ size } />
        )}
    </div>
);

const mapState = createStructuredSelector({
    sections: sectionsSelector
})

export default connect(mapState)(Directory);