import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'styled-bootstrap-grid';
import { fetchProducts } from '../actions';
import { Button, MainContainer, ItemList, ProductListDiv, FilterSection } from '../../elements/commonStyle';
import Accordion from './Accordion';
import FiltersList from './FiltersList';
import ListItem from './ListItem';
import { createCategoryList, createPriceList } from '../../helpers/helperActions';
import { CATEGORY_LABEL, PRICE_LABEL } from '../../constant';

const ProductList = props => {
	const products = useSelector(state => state.products);
	const dispatch = useDispatch();
	
	const [ productItems, setProductItems ] = useState(products);
	const [ sortType, setSortType ] = useState(null);
	const [ categoryList, setCategoryList ] = useState([]);
	const [ priceList, setPriceList ] = useState([]);
	const [ filter , setFilter ] = useState({ [CATEGORY_LABEL]: [], [PRICE_LABEL]: [] });

	
	useEffect(() => {
		if ( _.isEmpty(products) ) {
			dispatch(fetchProducts());
		}
		setProductItems(products);
		setCategoryList(createCategoryList(products));
		setPriceList(createPriceList(products));
    }, [ products ]);
		
	const renderProducts = () => {
		const items = productItems.map(item => {
			return (
				<ProductListDiv key={item.id} >
					<ListItem data={item} />
				</ProductListDiv>
			)
		});
		return (
			<div>{items}</div>
		)
	}
	
	const addFilter = (type, val) => {
		const tempFilter = filter;
		const itemKey = _.toLower(type);
		const itemIndex = _.indexOf(tempFilter[itemKey], val);
		tempFilter[itemKey] = [];
		if (itemIndex < 0) {
			tempFilter[itemKey].push(val);
		}
		setFilter(tempFilter);
		applyFilter();
	}
	
	const applyFilter = () => {
		let tempProducts = products;
		if (!_.isEmpty(filter[CATEGORY_LABEL])) {
			const filteredItems = _.filter(tempProducts, item => { 
				const itemCategories = item.category.split('|');
				const hasCategory = _.some(itemCategories, i => _.indexOf(filter[CATEGORY_LABEL], i) >= 0);
				return hasCategory; 
			});
			tempProducts = filteredItems;
		}
		if (!_.isEmpty(filter[PRICE_LABEL])) {
			const filteredItems = _.filter(tempProducts, item => { 
				const priceRange = filter[PRICE_LABEL][0].split(' - ');
				const minVal = parseInt(priceRange[0]);
				const maxVal = parseInt(priceRange[1]);
				return item.price >= minVal && item.price <=maxVal; 
			});
			tempProducts = filteredItems;
		}
		setProductItems(tempProducts);
	}
	
	
	return (
		<Row>
			<Col col xl="2" lg="3" md="4" sm="5">
				<FilterSection>
					<h4 className="filter-title">Filters</h4>
					<div className="filter-content">
						<Accordion title="Category">
							{!_.isEmpty(categoryList) && <FiltersList list={categoryList} applyFn={addFilter} type="Category" />}
						</Accordion>
						<Accordion title="Price">
							{!_.isEmpty(priceList) && <FiltersList list={priceList} applyFn={addFilter} type="Price" />}
						</Accordion>
						<Accordion title="Rating"></Accordion>
						<Accordion title="Discounts / Offers"></Accordion>
					</div>
				</FilterSection>
			</Col>
			<Col col xl="10" lg="9" md="8" sm="7">
				{!_.isEmpty(productItems) ? renderProducts() : <ProductListDiv> {'No Products found'} </ProductListDiv>}
			</Col>
		</Row>
	)
}

export default ProductList;