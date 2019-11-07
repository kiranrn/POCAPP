import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'styled-bootstrap-grid';
import { HeaderRow, CartInfo } from '../../elements/headerStyle';
import { Input, Icon } from '../../elements/commonStyle';

const Header = () => {
	const cartItems = useSelector(state => state.cart);
	return (
		<HeaderRow justifyContent="between" alignItems="center">
			<Col auto >
				<h1>Poc Shop</h1>
			</Col>
			<Col auto >
				<Input type="text" className="header-input" />
				<CartInfo>
					<Icon className="cart">Cart</Icon>
					<span>({cartItems.length})</span>
				</CartInfo>
			</Col>
		</HeaderRow>
	)
}

export default Header;