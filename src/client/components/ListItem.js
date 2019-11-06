import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ItemList, H3, P } from '../../elements/commonStyle';

const ListItem = props => {
	const { data : { id, picture, price, title, description }, buyOption } = props;
	return (
		<ItemList>
			<span className="img-div">
				{!buyOption ? (
					<Link to={`${id}`} target="_blank">
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
				<Button className="lg-btn">Add To Cart</Button>
				<Button className="lg-btn secondary">Remove From Cart</Button>
				{buyOption && <Button className="lg-btn primary">Buy Now</Button>}
			</div>
		</ItemList>
	)
}

export default ListItem;