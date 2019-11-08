import axios from 'axios';
import { PRODUCT_LIST } from '../../constant';
import { FETCH_PRODUCTS, UPDATE_CART } from './types';

export const fetchProducts = () => async dispatch => {
	const res = await axios.get('/resourses/product.json');
	dispatch({
		type: FETCH_PRODUCTS,
		payload: res.data,
	});
	return true;
}

export const updateCart = data => dispatch => {
	dispatch({
		type: UPDATE_CART,
		payload: data,
	});
	return true;
}