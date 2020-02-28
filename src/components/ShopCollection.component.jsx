import React from "react";
import { Link } from "react-router-dom";
import ItemCard2 from "./ItemCard/ItemCard-2";

const ShopCollectionComponent = props => {
	const { title, routeName, id, items } = props;

	const itemCards =
		items &&
		items.length > 0 &&
		items.slice(0, Math.min(items.length, 4)).map(item => {
			return <ItemCard2 routeName={routeName} {...item} />;
		});

	return (
		<section className="shop-collection-item container-fluid " key={id}>
			<Link to={`/${routeName}`}>
				<h2 className="shop-collection-item__heading">{title}</h2>
			</Link>
			<div className="shop-collection-item__cards">{itemCards}</div>
		</section>
	);
};

export default ShopCollectionComponent;
