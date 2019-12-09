import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton.component';

it('should render CustomButton component', () => {
    const mockProps = {
        className: 'something',
        onClick: () => {}
    }

    expect(shallow(<CustomButton { ...mockProps }>something</CustomButton>))
    .toMatchSnapshot();
});