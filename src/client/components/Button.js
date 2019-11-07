import React from 'react';
import { Button } from '../../elements/commonStyle';

const CommonButton = props  => {
	const { classes, clickFn, children } = props;
	return(
		<Button className={classes} onClick={clickFn}>{children}</Button>
	);
};

export default CommonButton;