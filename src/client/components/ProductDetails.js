import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchProducts } from '../actions';
import { findProduct } from '../../helpers/helperActions';
import { Button, MainContainer, ItemList, H3 } from '../../elements/commonStyle';


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
	
	
	const renderProductDetails = () => {
		const { id, title, price, picture, category, description } = product;
		return (
			<ItemList>
				<span className="img-div">
					<img src={picture} alt={title} />
				</span>
				<span className="disc-div">
					<H3>{title}</H3>
					<i>{category}</i><br/>
					<strong>{`$${price}`}</strong>
					<p>{description}</p>
					<p>
						<Button className="lg-btn primary">Add To Cart</Button>
						<Button className="lg-btn secondary">Buy Now</Button>
					</p>
				</span>
			</ItemList>
		)
	}
	
	if ( !_.isEmpty(product) ) {
      return (
		<MainContainer>
			{renderProductDetails()}
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
