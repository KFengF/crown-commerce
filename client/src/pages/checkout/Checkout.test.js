import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutPage } from './Checkout.page';
import CheckoutItem from './components/checkout-item/CheckoutItem.component';

describe('Checkout page component', () => {
    let mockProps;
    let wrapper;
    const mockCartItems = [{
        id: 12,
        name: 'a',
        imageUrl: 'https://example.com/img?img=1',
        price: 10,
        quantity: 1
    }, {
        id: 13,
        name: 'b',
        imageUrl: 'https://example.com/img?img=2',
        price: 20,
        quantity: 2
    }, {
        id: 14,
        name: 'c',
        imageUrl: 'https://example.com/img?img=3',
        price: 13,
        quantity: 3
    }];

    beforeEach(() => {
        mockProps = {
            cartItems: mockCartItems,
            cartItemsTotal: 43
        }

        wrapper = shallow(<CheckoutPage { ...mockProps } />);
    })

    it('should render Checkout page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an equal number of CheckoutItem components as the cartItems prop', () => {
        expect(wrapper.find(CheckoutItem).length).toEqual(mockCartItems.length);
    });

    it('should be the text TOTAL: $43 in TotalSpan', () => {
        expect(wrapper.find('TotalSpan').text()).toBe('TOTAL: $43');
    });
});