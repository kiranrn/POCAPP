import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import ReduxProvider from '../ReduxProvider';
import { TEMP_INITIAL_STATE } from '../../../constant'

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<ThemeProvider theme={{}}>
			<ReduxProvider initialState={TEMP_INITIAL_STATE}>
				<Header />
			</ReduxProvider>
		</ThemeProvider>
	);
});

describe('Header Test', () => {
	it('should match cart item count ', () => {
		expect(wrapped.find('#cartCount').text()).toEqual('(5)')
	});
});