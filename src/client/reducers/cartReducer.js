import { UPDATE_CART } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case UPDATE_CART:
			return action.payload;
		default:
			return state;
	}
}