import React from "react";
import { Icon } from "antd";

const ItemCard1 = () => {
	const image =
		"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg";

	return (
		<div className="item-card-1">
			<img src={image} alt="" className="item-card-1__img" />
			<div className="item-card-1__content">
				<h2 className="item-card-1__name">Item name</h2>
				<p className="item-card-1__price">$99.99</p>

				<div className="item-card-1__buttons">
					<Icon type="plus" />
					<Icon type="eye" />
					<Icon type="heart" />
				</div>
			</div>
		</div>
	);
};

export default ItemCard1;
