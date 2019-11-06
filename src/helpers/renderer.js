import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { BaseCSS, Container } from 'styled-bootstrap-grid';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import GlobalStyle from '../elements/globalStyle';
import Header from '../client/components/Header';

export default (req, store, sheet, context) => {
	const content = renderToString(
		sheet.collectStyles(
			<ThemeProvider theme={{}}>
				<Container fluid>
					<BaseCSS css={GlobalStyle} />
					<Header />
					<Provider store={store} >
						<StaticRouter location={req.url.pathname} context={context} >
							<div>{renderRoutes(Routes)}</div>
						</StaticRouter>
					</Provider>
				</Container>
			</ThemeProvider>
		)
	);
	const styles = sheet.getStyleTags();
	const title = 'Product App';
	return `
		<html>
			<head>
				<title>${title}</title>
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
				${styles}
			</head>
			<body>
				<div id="root">${content}</div>
				<script src="public/bundle.js"></script>
				<script>window.__INITIAL_DATA__ = ${serialize(context)}</script>
			</body>
		</html>
	`;
}