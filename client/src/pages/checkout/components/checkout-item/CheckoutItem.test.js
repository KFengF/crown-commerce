import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './CheckoutItem.component';

describe('CheckoutItem component', () => {
    let mockProps;
    let mockRemoveItem;
    let mockDecreaseItem;
    let mockAddItem;
    let wrapper;

    beforeEach(() => {
        mockRemoveItem = jest.fn();
        mockDecreaseItem = jest.fn();
        mockAddItem = jest.fn();

        mockProps = {
            cartItem: {
                id: 12,
                name: 'a',
                imageUrl: 'https://example.com/img?img=1',
                price: 10,
                quantity: 1
            },
            removeItem: mockRemoveItem,
            decreaseItem: mockDecreaseItem,
            addItem: mockAddItem
        }

        wrapper = shallow(<CheckoutItem { ...mockProps } />);
    });

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('cartItem', () => {
        it('should render the correct src in img tag', () => {
            expect(wrapper.find('img').prop('src'))
                .toBe(mockProps.cartItem.imageUrl);
        });

        it('should render a in the NameSpan', () => {
            expect(wrapper.find('NameSpan').text())
                .toBe(mockProps.cartItem.name);
        });

        it('should render 10 in the PriceSpan', () => {
            expect(wrapper.find('PriceSpan').text())
                .toBe(String(mockProps.cartItem.price));
        });

        it('should render 1 in p tag', () => {
            expect(wrapper.find('p').text())
            .toBe(String(mockProps.cartItem.quantity))
        });
    });

    describe('removeItem', () => {
        it('should call removeItem when clicked in RemoveSpan', () => {
            wrapper.find('RemoveSpan').simulate('click');
            expect(mockRemoveItem).toHaveBeenCalled();
        });
    });

    describe('decreaseItem', () => {
        it('should call decreaseItem when clicked in first span tag', () => {
            wrapper.find('span').at(0).simulate('click');
            expect(mockDecreaseItem).toHaveBeenCalled();
        });
    });

    describe('decreaseItem', () => {
        it('should call addItem when clicked in second span tag', () => {
            wrapper.find('span').at(1).simulate('click');
            expect(mockAddItem).toHaveBeenCalled();
        });
    });
})