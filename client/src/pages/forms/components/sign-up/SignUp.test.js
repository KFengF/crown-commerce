import React from 'react';
import { mount } from 'enzyme';
import { SignUp } from './SignUp.component';

describe('SignUp component', () => {
    let wrapper;
    let mockSignUpStart;
    const originalError = console.error;
    //Usar esto para evitar los errores

    beforeEach(() => {
        mockSignUpStart = jest.fn();
        const mockProps = {
            signUpStart: mockSignUpStart
        }
        wrapper = mount(<SignUp { ...mockProps } />);
        console.error = () => {};
    });

    afterAll(() => {
        console.error = originalError;
    });

    it('should render SignUp component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call signUpStart when submit', done => {
        wrapper.find('input').at(0).simulate('change', 
            { target: { name: 'displayName', value: 'test jest' } }
        );
        wrapper.find('input').at(1).simulate('change', 
            { target: { name: 'email', value: 'testing@example.com' } }
        );
        wrapper.find('input').at(2).simulate('change', 
            { target: { name: 'password', value: '123456' } }
        );
        wrapper.find('input').at(3).simulate('change', 
            { target: { name: 'confirmPassword', value: '123456'} }
        );
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(mockSignUpStart).toHaveBeenCalled();
        done();
    });
});