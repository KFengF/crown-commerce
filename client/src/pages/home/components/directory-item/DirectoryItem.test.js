import React from 'react';
import { shallow } from 'enzyme';
import { DirectoryItem } from './DirectoryItem.component';

describe('DirectoryItem component', () => {
    let wrapper;
    let mockTitle;
    let mockSize;
    let mockLinkUrl;
    let mockHistory;
    let mockMatch;

    beforeEach(() => {
        mockTitle = 'hats';
        mockSize = 'large';
        mockLinkUrl = 'shop/hats';
        mockHistory = { push: jest.fn() };
        mockMatch = { url: '/' };
        const mockProps = {
            title: mockTitle,
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            size: mockSize,
            linkUrl: mockLinkUrl,
            history: mockHistory,
            match: mockMatch
        }
        wrapper = shallow(<DirectoryItem { ...mockProps } />);
    });

    it('should render DirectoryItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('DirectoryItemDiv', () => {
        it('should call history.push when clicked in DirectoryItemDiv component', () => {
            wrapper.find('DirectoryItemDiv').simulate('click');
            expect(mockHistory.push).toHaveBeenCalled();
        });

        it('should be the prop size with value large in DirectoryItemDiv component', () => {
            expect(wrapper.find('DirectoryItemDiv').prop('size')).toBe(mockSize);
        });
    })
    
    describe('imageUrl', () => {
        it(`should be the prop style with value {"backgroundImage": "url(https://i.ibb.co/cvpntL1/hats.png)"} 
            in className background`, () => {
                expect(wrapper.find('.background').prop('style'))
                    .toStrictEqual({"backgroundImage": "url(https://i.ibb.co/cvpntL1/hats.png)"});
            }
        );
    });

    describe('title', () => {
        it('should be the text hats in TitleH2 component', () => {
            expect(wrapper.find('TitleH2').text()).toBe(mockTitle);
        });
    });
});