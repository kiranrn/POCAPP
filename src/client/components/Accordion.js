import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AccordionIcon = styled.span`
	position: absolute;
	top: 7px;
	right: 7px;
	width: 32px;
	height: 32px;
	background-image: url(images/add-24px.svg);
	background-repeat: no-repeat;
	background-size: cover;
`;

const AccordionTitle = styled.button`
	margin: 0px;
	font-weight: normal;
	padding: 15px;
	width: 100%;
	text-align: left;
	cursor: pointer;
	background: #fff;
	border-width: 0 0 1px 0;
    border-color: #dddddd;
    border-style: solid;
	position: relative;
	&.exapanded{
		${AccordionIcon} {
			background-image: url(images/remove-24px.svg);
		}
	}
`;

const AccordionContent = styled.ul`
	list-style-type: none;
    margin: 0;
    padding: 0;
	li{
		border-width: 0 0 1px 0;
		border-color: #dddddd;
		border-style: solid;
		font-size: 14px;
		padding: 7px 15px;
		&.selected{
			background : #afcce4;
		}
	}
`;



const Accordion = props => {
	const [ expand, setExpand ] = useState(false);
	const expandItem = () => {
		if (props.children) {
			setExpand(!expand);
		}
	}
	
	return (
		<div>
			<AccordionTitle onClick={expandItem} className={`${expand ? 'exapanded' : ''}`}>
				{props.title}
				{props.children && <AccordionIcon />}
			</AccordionTitle>
			<AccordionContent style={{ display: `${expand ? 'block' : 'none'}`}}>
				{props.children}
			</AccordionContent>
		</div>
	)
}

export default Accordion;