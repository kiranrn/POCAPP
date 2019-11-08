import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { BaseCSS, Container } from 'styled-bootstrap-grid';
import GlobalStyle from '../../elements/globalStyle';
import Header from './Header';
import Routes from '../Routes';
import ReduxProvider from './ReduxProvider';

const App = props => {
	return (
		<ThemeProvider theme={{}}>
			<Container fluid>
				<BaseCSS css={GlobalStyle} />
				<ReduxProvider>
					<Header />
					<BrowserRouter>
						<div>{renderRoutes(Routes)}</div>
					</BrowserRouter>
				</ReduxProvider>
			</Container>
		</ThemeProvider>
	)
}

export default App;
