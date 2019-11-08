import productReducer from '../productReducer';
import { FETCH_PRODUCTS } from '../../actions/types';

it('handles action of FETCH_PRODUCTS', () => {
	const action = {
		type: FETCH_PRODUCTS,
		payload: [{
		  "id": 1,
		  "title": "Chance",
		  "category": "Comedy|Drama",
		  "price": 167.00,
		  "picture": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
		  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
		}],
	};
	
	const newState = productReducer([], action);
	expect(newState).toEqual(action.payload);
});