import React from 'react';
import { shallow } from 'enzyme';
import CollectionPreview from './CollectionPreview.component';

describe('CollectionPreview component', () => {
    let mockTitle;
    let mockItems;
    let wrapper;

    beforeAll(() => {
        mockTitle = 'hats';
        mockItems = [
            { name: 'a', id: 1 },
            { name: 'b', id: 2 },
            { name: 'c', id: 3 },
            { name: 'd', id: 4 },
            { name: 'e', id: 5 }
        ];
        const mockProps = {
            title: mockTitle,
            items: mockItems
        }
        wrapper = shallow(<CollectionPreview { ...mockProps } />);
    });

    it('should render CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('title prop', () => {
        it('should be the text hats in TitleLink', () => {
            expect(wrapper.find('TitleLink').text()).toBe(mockTitle);
        });
    });

    describe('items prop', () => {
        it('should be four CollectionItem components', () => {
            expect(wrapper.find('Connect(CollectionItem)')).toHaveLength(4);
        });
    });
});