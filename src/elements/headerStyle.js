import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';

export const HeaderRow = styled(Row)`
	border-bottom: 1px solid #666666;
	background-color: #fff;
	background-size: cover;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
	min-height: 100px;
	margin-bottom: 0.75em;
	h1{
		font-size: 44px;
		color: #6f6f6f;
		padding: 0px;
		margin: 0px;
		font-weight: normal;
	}
`;


export const CartInfo = styled.div`
	display: inline-flex;
	margin-left: 0.75em;
	span{
		font-size: 23px;
	}
`;

