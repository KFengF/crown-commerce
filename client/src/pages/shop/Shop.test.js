import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { ShopRouter } from './Shop.router';

describe('Shop router', () => {
    let wrapper;
    let mockFetchCollectionsStart;

    beforeEach(() => {
        mockFetchCollectionsStart = jest.fn();
        const mockProps = {
            collections: null,
            fetchCollectionsStart: mockFetchCollectionsStart,
            match: { path: '/shop' },
            isCollectionsFetching: true
        }
        wrapper = mount(
            <BrowserRouter>
                <ShopRouter { ...mockProps } />
            </BrowserRouter>
        );
    });

    it('should render Shop router', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call fetchCollectionsStart when mounted', done => {
        setImmediate(() => {
            wrapper.update();
            expect(mockFetchCollectionsStart).toHaveBeenCalled();
            done();
        })
    });
});