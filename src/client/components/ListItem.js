import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList, H3, P } from '../../elements/commonStyle';
import CommonButton from './Button';
import { updateCart } from '../actions';

const ListItem = props => {
	const { data : { id, picture, price, title, description }, buyOption } = props;
	const cartItems = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const [ addedToCart, setAddedToCart ] = useState(false);
	
	const addToCart = () => {
		const tempCartItems = _.cloneDeep(cartItems);
		tempCartItems.push(id);
		setAddedToCart(true);
		dispatch(updateCart(tempCartItems));
	}
	
	const removeFromCart = () => {
		const tempCartItems = _.cloneDeep(cartItems);
		_.remove(tempCartItems, n => n === id);
		setAddedToCart(false);
		dispatch(updateCart(tempCartItems));
	}
	
	return (
		<ItemList>
			<span className="img-div">
				{!buyOption ? (
					<Link to={`${id}`} title={title} target="_blank">
						<img src={picture} alt={title} />
					</Link>
				) : (<img src={picture} alt={title} />) }
			</span>
			<span className="disc-div">
				<H3>{title}</H3>
				<P>{description}</P>
				<H3>{`$${price}`}</H3>
			</span>
			<div>
				{!addedToCart ? <CommonButton classes="lg-btn" clickFn={addToCart}>Add To Cart</CommonButton> :
				<CommonButton classes="lg-btn secondary" clickFn={removeFromCart} >Remove From Cart</CommonButton> }
				{buyOption && <CommonButton classes="lg-btn primary">Buy Now</CommonButton>}
			</div>
		</ItemList>
	)
}

export default ListItem;