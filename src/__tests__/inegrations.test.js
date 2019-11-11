import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import App from '../client/components/App';
import ListItem from '../client/components/ListItem';
import { TEMP_INITIAL_STATE } from '../constant';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('/resourses/product.json', {
		status: 200,
		response: TEMP_INITIAL_STATE.products,
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('fetch products and display them on screen', (done) => {
	const wrapped = mount(<App />);
	
	moxios.wait(() => {
		wrapped.update();		
		expect(wrapped.find(ListItem).length).toEqual(2);		
		done();
	});	
});