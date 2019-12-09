import React from 'react';
import { shallow } from 'enzyme';
import FormsPage from './Forms.page';

describe('Forms page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormsPage />);
    });

    it('should render Forms page', () => {
        expect(wrapper).toMatchSnapshot();
    });
});