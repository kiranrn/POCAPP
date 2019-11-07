import { UPDATE_CART } from '../../constant';

export default (state = [], action) => {
	switch (action.type) {
		case UPDATE_CART:
			return action.payload;
		default:
			return state;
	}
}