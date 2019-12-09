import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home.page';

it('should render Home page', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
});