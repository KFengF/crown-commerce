import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './CartIcon.component';

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartDropdown;

    beforeEach(() => {
        mockToggleCartDropdown = jest.fn();

        const mockProps = {
            toggleCartDropdown: mockToggleCartDropdown,
            itemCount: 1
        }

        wrapper = shallow(<CartIcon {...mockProps} />);
    });

    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleCartDropdown when CartIconContainer is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartDropdown).toHaveBeenCalled();
    });

    it('should render the itemCount as text', () => {
        expect(parseInt(wrapper.find('ItemCountSpan').text())).toBe(1);
    })
})