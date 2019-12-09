import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPage } from './Collection.page';

describe('Collection page', () => {
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
            { name: 'e', id: 5 },
        ];
        const mockProps = {
            collection: {
                title: mockTitle,
                items: mockItems
            }
        }
        wrapper = shallow(<CollectionPage { ...mockProps } />);
    });

    it('should render Collection page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('collection prop', () => {
        it('should be the text hats in CollectionTitleH2', () => {
            expect(wrapper.find('CollectionTitleH2').text()).toBe(mockTitle);
        });

        it('should be five CollectionItem components', () => {
            expect(wrapper.find('Connect(CollectionItem)')).toHaveLength(5);
        });
    });
});