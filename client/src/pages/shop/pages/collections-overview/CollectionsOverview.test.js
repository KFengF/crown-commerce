import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsOverviewPage } from './CollectionsOverview.page';

describe('CollectionOverview page', () => {
    let mockCollections;
    let wrapper;

    beforeAll(() => {
        mockCollections = {
            hats: {
                id: 1,
                items: [
                    { name: 'hello', id: 1 },
                    { name: 'how', id: 2 },
                ]
            },
            sneakers: {
                id: 2,
                items: [
                    { name: 'are', id: 3 },
                    { name: 'you', id: 4 },
                ]
            }
        }
        const mockProps = {
            collections: mockCollections 
        }
        wrapper = shallow(<CollectionsOverviewPage { ...mockProps } />);
    });

    it('should render CollectionOverview page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('collections prop', () => {
        it('should be two CollectionPreview components', () => {
            expect(wrapper.find('CollectionPreview')).toHaveLength(2);
        });
    });
});