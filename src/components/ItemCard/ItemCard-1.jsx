import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const ItemCard1 = props => {
	const { imageUrl, name, price, routeName, id } = props;

	return (
		<div className="item-card-1">
			<img src={imageUrl} alt="" className="item-card-1__img" />
			<div className="item-card-1__content">
				<Link to={`/shop/${routeName}/${id}`}>
					<h2 className="item-card-1__name">{name}</h2>
				</Link>
				<p className="item-card-1__price">${price}</p>

				<div className="item-card-1__buttons">
					<Icon type="plus" />
					<Icon type="heart" />
				</div>
			</div>
		</div>
	);
};

export default ItemCard1;
