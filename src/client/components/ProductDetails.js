import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchProducts } from '../actions';
import { findProduct } from '../../helpers/helperActions';
import ListItem from './ListItem';
import { MainContainer } from '../../elements/commonStyle';


const ProductDetails = () => {
	let { id } = useParams();	
	const products = useSelector(state => state.products);
	const dispatch = useDispatch();
	const [ product, setProduct ] = useState(findProduct(products, id));

	
	useEffect(() => {
		if ( _.isEmpty(products) ) {
			dispatch(fetchProducts());
		}
		setProduct(findProduct(products, id));
    }, [ products ]);
	
	if ( !_.isEmpty(product) ) {
      return (
		<MainContainer>
			<ListItem data={product} buyOption />
		</MainContainer>
	  )
    }
	return (
		<MainContainer className="no-content">
			{ _.isArray(product) ? 'Loading' : 'Product not found' }
		</MainContainer>
	)
	
}

function loadData(store) {
	store.dispatch(fetchProducts());
}

export { loadData };
export default ProductDetails;
