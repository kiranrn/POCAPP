import _ from 'lodash';
import { fetchProducts } from '../client/actions';

export const findProduct = ( data, id ) => {
	const item  = _.find(data, item => item.id == id);
	return item;
}

export const loadData = store => {
	store.dispatch(fetchProducts());
}

export const createCategoryList = data => {
	let categoryList = [];
	_.forEach(data, i => {
		let itemCategories = i.category.split('|');
		categoryList.push(...itemCategories);
	});
	return _.uniq(categoryList);
}

function createPLArray(count) {
	const tempArray = [];
	for (var i =1; i <= count; i++) { 
		let tempCount = 100*i;
		tempArray.push(`${tempCount-100} - ${tempCount}`)
	}
	return tempArray;
}

export const createPriceList = data => {
	const maxPriceItem = _.maxBy(data, 'price');
	let priceList = [];
	if (maxPriceItem) {
		const roundVal = Math.round(maxPriceItem.price/100)*100;
		const maxVal = maxPriceItem.price > roundVal ? roundVal+100 : roundVal;
		if (maxVal === 0) {
			priceList = createPLArray(1);
		} else {
			priceList = createPLArray(maxVal/100);
		}
	}
	return priceList;
}