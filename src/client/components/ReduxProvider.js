import React from 'react';
import createStore from '../../helpers/createStore';

import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import createSagaMiddleware from 'redux-saga';
//import reducers from '../reducers';


//const sagaMiddleware = createSagaMiddleware();

const ReduxProvider = ({ children, initialState = {} }) => {
	//const store = createStore(reducers, initialState, applyMiddleware(thunk));
	const store = createStore(initialState);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}

export default ReduxProvider;
