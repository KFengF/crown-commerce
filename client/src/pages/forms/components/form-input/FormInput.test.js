import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput.component';

describe('FormInput component', () => {
    let wrapper;
    let mockOnChange;
    let mockLabel;
    let mockValue;

    beforeEach(() => {
        mockOnChange = jest.fn();
        mockLabel = 'Password';
        mockValue = '123456';

        const mockProps = {
            onChange: mockOnChange,
            label: mockLabel,
            value: mockValue,
            name: 'password',
            type: 'password',
            required: true
        }
        wrapper = shallow(<FormInput { ...mockProps } />);
    });

    it('should render FormInput component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('Input component', () => {
        it('should call onChange by writing in it', () => {
            wrapper.find('Input').simulate('change');
            expect(mockOnChange).toHaveBeenCalled();
        });

        it('should be 123456 in the Input text', () => {
            expect(wrapper.find('Input').props().value).toBe('123456');
        });
    });

    describe('label', () => {
        it('should render FormLabel if there is label', () => {
            expect(wrapper.exists('FormLabel')).toBe(true);
        });

        it('should not render FormLabel if there is not label', () => {
            const newProps = {
                onChange: mockOnChange,
                label: '',
                value: mockValue
            }

            const newWrapper = shallow(<FormInput { ...newProps } />);
            expect(newWrapper.exists('FormLabel')).toBe(false);
        });
    });
});