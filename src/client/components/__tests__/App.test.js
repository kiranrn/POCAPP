import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client';
import Header from '../Header';


describe('POC Test', () => {
	it('shows header component ', () => {
		const wrapped = shallow(<Header />);
		expect(wrapped.find(Header).length).toEqual(1);
	})
});