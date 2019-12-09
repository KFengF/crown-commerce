import React from 'react';
import { shallow } from 'enzyme';
import App from './App.component';
import { AppRouter } from './App.router';

describe('App component', () => {
    it('should render App component', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });
});

describe('App router', () => {
    it('should render App router', () => {
        expect(shallow(<AppRouter />)).toMatchSnapshot();
    });
});