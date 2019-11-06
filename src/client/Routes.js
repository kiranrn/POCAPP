import React from 'react';
/*import { Route } from 'react-router-dom';*/
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { loadData } from '../helpers/helperActions';

/*export default () => {
	return (
		<div>
			<Route exact path="/" component={ProductList} />
			<Route exact path="/:id" component={ProductDetails} />
		</div>
	)
};*/

export default [
	{
		loadData,
		path: '/',
		component: ProductList,
		exact: true
	},
	{
		loadData,
		path: '/:id',
		component: ProductDetails,
		exact: true
	}
]