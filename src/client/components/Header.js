import React from 'react';
import { Col } from 'styled-bootstrap-grid';
import { HeaderRow, CartInfo } from '../../elements/headerStyle';
import { Input, Icon } from '../../elements/commonStyle';

const Header = () => {
	return (
		<HeaderRow justifyContent="between" alignItems="center">
			<Col auto >
				<h1>Poc Shop</h1>
			</Col>
			<Col auto >
				<Input type="text" className="header-input" />
				<CartInfo>
					<Icon className="cart">Cart</Icon>
					<span>(0)</span>
				</CartInfo>
			</Col>
		</HeaderRow>
	)
}

export default Header;