import { FETCH_PRODUCTS, PRODUCT_LIST, UPDATE_CART } from '../../constant';

export const fetchProducts = () => async dispatch => {
	const res = PRODUCT_LIST;
	dispatch({
		type: FETCH_PRODUCTS,
		payload: res,
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