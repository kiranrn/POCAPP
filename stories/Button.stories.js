import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CommonButton from '../src/client/components/Button';

storiesOf('Button', module)
	.add('normal button', () => (
		<div>
			<CommonButton >Default Button</CommonButton>
			<CommonButton classes="primary" >Primary Button</CommonButton>
			<CommonButton classes="secondary" >Secondary Button</CommonButton>
		</div>
	)).add('large button', () => (
		<div>
			<CommonButton classes="lg-btn">Default Button</CommonButton>
			<CommonButton classes="lg-btn primary">Primary Button</CommonButton>
			<CommonButton classes="lg-btn secondary">Secondary Button</CommonButton>
		</div>
	));
	
