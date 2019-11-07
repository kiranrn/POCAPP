import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { BaseCSS, Container } from 'styled-bootstrap-grid';
import Routes from './Routes';
import reducers from './reducers';
import GlobalStyle from '../elements/globalStyle';
import Header from './components/Header';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
	<ThemeProvider theme={{}}>
		<Container fluid>
			<BaseCSS css={GlobalStyle} />
			<Provider store={store}>
				<Header />
				<BrowserRouter>
					<div>{renderRoutes(Routes)}</div>
				</BrowserRouter>
			</Provider>
		</Container>
	</ThemeProvider>
	, document.querySelector('#root') || document.createElement('div'));