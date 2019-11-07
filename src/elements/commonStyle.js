import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

export const Button = styled.button`
	display: inline-block;
	color: white;
	font-size: 0.85em;
	margin: 0.25em;
	padding: 0.50em 0.75em;
	border: 1px solid #428bca;
	border-radius: 3px;
	cursor: pointer;
	background: #428bca; 
	
	:hover{
		background: #2381d4;
	}
	
	&.selected{
		background: #2381d4;
	}
	
	&.lg-btn{
		font-size: 1em;
	}
	&.secondary{
		background: #fc5353;
		border-color: #fc5353;
		&:hover{
			background: #da3535;
		}
	}
	&.primary{
		background: #ff9f00;
		border-color: #ff9f00;
		&:hover{
			background: #dc8d0a;
		}
	}
`;

export const H3 = styled.h3`
	font-size: 1.5rem;
	font-weight: normal;
	margin: 0;
`;

export const P = styled.p`
	margin: 0.25em 0;
`;

export const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	
	&.no-content{
		padding: 1em;
		text-align: center;
	}
`;

export const ItemList = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: .75rem;
	border: 1px solid #dddddd;
	border-radius: 4px;
	
	.link-title{
		font-size: 1.5rem;
	}
	.img-div{
		display: block;
		overflow: hidden;
		margin-bottom: 0.25em;
	}
	.disc-div{
	}
`;

export const Input = styled.input`
	padding: 0px 10px;
	border: 1px solid #c8c8c8;
	background-color: #ffffff;
	font-size: 14px;
	color: #474747;
	&.header-input{
		height: 56px;
	}
`;

export const Icon = styled.i`
	width: 32px;
	height: 32px;
	&.cart{
		background-image: url(images/shopping_cart-24px.svg);
		background-repeat: no-repeat;
		background-size: cover;
		text-indent: -9999;
		overflow: hidden;
	}
`;

export const ProductListDiv = styled.div`
	display: inline-block;
	margin: 10px 0.5%;
	${media.xs`
		width: 99%;
	`}
	${media.sm`
		width: 99%;
	`}

	${media.md`
		width: 49%;
	`}

	${media.lg`
		width: 32.33%;
	`}

	${media.xl`
		width: 24%;
	`}
`;

export const FilterSection = styled.aside`
	margin-top: 10px;
	.filter-title{
		padding: 10px 15px;
		border: 1px solid #428bca;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		background-color: #428bca;
		font-size: 14px;
		color: #ffffff;
		font-weight: normal;
		margin: 0;
	}
	.filter-content{
		border: 1px solid #dddddd;
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	}
`;


