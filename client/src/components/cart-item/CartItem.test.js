import React from 'react';
import CartItem from './CartItem.component';
import { shallow } from 'enzyme';

it('should render CartItem component', () => {
    const mockItem = {
        imageUrl: 'http://www.example.com',
        price: 10,
        name: 'hats',
        quantity: 2
    }

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});