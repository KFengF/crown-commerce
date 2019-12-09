import React from 'react';
import { mount } from 'enzyme';
import { SignIn } from './SignIn.component';

describe('SignIn component', () => {
    let wrapper;
    let mockEmailSignInStart;
    let mockGoogleSignInStart;

    beforeEach(() => {
        mockEmailSignInStart = jest.fn();
        mockGoogleSignInStart = jest.fn();
        const mockProps = {
            emailSignInStart: mockEmailSignInStart,
            googleSignInStart: mockGoogleSignInStart
        }
        wrapper = mount(<SignIn { ...mockProps } />);
    });

    it('should render SignIn component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call googleSignInStart when clicked in the second CustomButton', () => {
        wrapper.find('CustomButton').at(1).simulate('click');
        expect(mockGoogleSignInStart).toHaveBeenCalled();
    });

    it(`should call emailSignInStart when clicked in the first CustomButton 
        and changed the inputs`, done => {
            wrapper.find('input').at(0).simulate('change', 
                { target: { name: 'email', value: 'testing@example.com' } }
            );
            wrapper.find('input').at(1).simulate('change', 
                { target: { name: 'password', value: '123456'} }
            );
            wrapper.find('form').simulate('submit', { preventDefault: () => {} });
            expect(mockEmailSignInStart).toHaveBeenCalled();
            done();
        }
    );
});