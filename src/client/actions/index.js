import { FETCH_PRODUCTS, PRODUCT_LIST } from '../../constant';

export const fetchProducts = () => async dispatch => {
	const res = PRODUCT_LIST;
	dispatch({
		type: FETCH_PRODUCTS,
		payload: res,
	});
	return true;
}