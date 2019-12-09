import React from 'react';
import { shallow } from 'enzyme';
import SomethingWrong from './SomethingWrong.component';
import SomethingWrongHandler from './SomethingWrong.handler';

describe('SomethingWrong component', () => {
    it('should render SomethingWrong component', () => {
        expect(shallow(<SomethingWrong />)).toMatchSnapshot();
    });
});

describe('SomethingWrong handler', () => {
    let TestComponent;
    let error;
    let wrapper;
    const originalError = console.error;
    //Usar esto para evitar los errores

    beforeEach(() => {
        console.error = () => {};
        TestComponent = () => <div id="test" />;
        error = new Error('An intended error');
        wrapper = shallow(
            <SomethingWrongHandler>
                <TestComponent />
            </SomethingWrongHandler>
        );
    });

    afterAll(() => {
        console.error = originalError;
    });
    
    describe('if there is not an error', () => {
        it('should render TestComponent', () => {
            expect(wrapper.exists(TestComponent)).toBe(true);
        });

        it('should not render SomethingWrong handler', () => {
            expect(wrapper.exists(SomethingWrong)).toBe(false);
        });
    });

    describe('if there is an error', () => {
        it('should render SomethingWrong handler', () => {
            wrapper.find(TestComponent).simulateError(error);
            expect(wrapper.exists(SomethingWrong)).toBe(true);
        });

        it('should not render TestComponent', () => {
            wrapper.find(TestComponent).simulateError(error);
            expect(wrapper.exists(TestComponent)).toBe(false);
        });
    });
});