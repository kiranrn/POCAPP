import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProductList from '../ProductList';
import ReduxProvider from '../ReduxProvider';
import { TEMP_INITIAL_STATE } from '../../../constant';
import ListItem from '../ListItem';

describe('Product List Page Test', () => {
	it('should display product list', () => {
		const wrapped = mount(
			<ThemeProvider theme={{}}>
				<ReduxProvider initialState={TEMP_INITIAL_STATE}>
					<BrowserRouter>
						<ProductList />
					</BrowserRouter>
				</ReduxProvider>
			</ThemeProvider>
		);
		expect(wrapped.find(ListItem).length).toEqual(2);
	});
	
	it('should not render list item component', () => {
		const wrapped = mount(
			<ThemeProvider theme={{}}>
				<ReduxProvider initialState={{}}>
					<ProductList />
				</ReduxProvider>
			</ThemeProvider>
		);
		expect(wrapped.find(ListItem).length).toEqual(0);
	});	
});