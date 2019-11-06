import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '../src/client/components/Accordion';

storiesOf('Accordion', module)
	.add('with content', () => (
		<div>
			<Accordion title="Category">Category Content</Accordion>
			<Accordion title="Price">Price Content</Accordion>
		</div>
	)).add('no content', () => (
		<div>
			<Accordion title="Category"></Accordion>
			<Accordion title="Price"></Accordion>
		</div>
	));

