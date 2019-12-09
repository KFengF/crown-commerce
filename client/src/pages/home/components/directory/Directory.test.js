import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './Directory.component';
import DirectoryItem from '../directory-item/DirectoryItem.component';

describe('Directory component', () => {
    let wrapper;
    let mockSections;

    beforeEach(() => {
        mockSections = {
            hats: {
                id: 1,
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl: 'shop/hats'
            },
            sneakers: {
                id: 2,
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                linkUrl: 'shop/sneakers'
            }
        }
        const mockProps = {
            sections: mockSections
        }
        wrapper = shallow(<Directory { ...mockProps } />);
    });

    it('should render Directory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should be 2 DirectoryItem components', () => {
        expect(wrapper.find(DirectoryItem)).toHaveLength(2);
    });
});