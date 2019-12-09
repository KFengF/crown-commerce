import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';

describe('Header component', () => {
    let wrapper;
    let mockSignOut

    beforeEach(() => {
        mockSignOut = jest.fn();

        const mockProps = {
            currentUser: { id: 12 },
            hidden: true, 
            signOut: mockSignOut
        }

        wrapper = shallow(<Header { ...mockProps } />);
    });

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('If currentUser is present', () => {
        it('should call signOut when clicked in LinkSpan', () => {
            wrapper.find('LinkSpan').simulate('click');
            expect(mockSignOut).toHaveBeenCalled();
        });

        it('should be the text LOG OUT in LinkSpan', () => {
            expect(wrapper.find('LinkSpan').text()).toBe('LOG OUT');
        });
    });

    describe('If currentUser is null', () => {
        it('should render LinkStyled', () => {
            const newProps = {
                currentUser: null,
                hidden: true,
                signOut: mockSignOut
            }

            const newWrapper = shallow(<Header { ...newProps } />);

            expect(newWrapper.find('LinkStyled').at(2).text())
            .toBe('SIGN IN');
        });
    });

    describe('if hidden is true', () => {
        it('should not render CartDropdown', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false);
        });
    });

    describe('if hidden is false', () => {
        it('should render CartDropdown', () => {
            const newProps = {
                currentUser: null,
                hidden: false,
                signOut: mockSignOut
            }

            const newWrapper = shallow(<Header { ...newProps } />);

            expect(newWrapper.exists(CartDropdown)).toBe(true);
        });
    });
});