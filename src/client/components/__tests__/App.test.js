import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';

describe('App Test', () => {
	it('contains header component ', () => {
		const wrapped = shallow(<App />);
		expect(wrapped.find(Header).length).toEqual(1);
	})
});
