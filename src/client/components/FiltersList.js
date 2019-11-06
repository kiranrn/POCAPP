import React, { useState } from 'react';
import _ from 'lodash';



const FiltersList = props => {
	const { list, applyFn, type } = props;
	const [ selItem, setSelItem ] = useState([]);
	
	const applyFilter = item => {
		const itemSel = selItem[0] === item ? [] : [item];
		setSelItem(itemSel);
		applyFn(type, item);
	}
	const renderFilterList = () => {
		return list.map( item => {
			return <li key={item} className={selItem[0] === item ? 'selected' : ''} onClick={() => applyFilter(item)}>{item}</li>
		});
	}
	return (
		_.isEmpty(list) ? '' : renderFilterList()
	)
}

export default FiltersList;