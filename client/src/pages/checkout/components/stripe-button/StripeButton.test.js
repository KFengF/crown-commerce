import React from 'react';
import { shallow } from 'enzyme';
import StripeButton from './StripeButton.component';

describe('StripeButton component', () => {
    let wrapper;
    let mockPrice;

    beforeEach(() => {
        mockPrice = 50;
        const mockProps = {
            price: mockPrice
        }
        wrapper = shallow(<StripeButton { ...mockProps } />);
    });

    it('should render StripeButton component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('price', () => {
        it('should print Your total is $50 in StripeCheckout component description', () => {
            expect(wrapper.find('ReactStripeCheckout').prop('description'))
                .toBe('Your total is $' + mockPrice);
        });
    });
});