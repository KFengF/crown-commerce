import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './Contact.page';

describe('Contact page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ContactPage />);
    });

    it('should render Contact page', () => {
        expect(wrapper).toMatchSnapshot();
    });
});