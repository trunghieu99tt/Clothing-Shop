import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const ItemCard2 = props => {
	const { id, name, imageUrl, price, isSoldOut, routeName } = props;

	return (
		<div className="item-card-2">
			<div className="item-card-2__img">
				<div className="sold-out">
					<span>{isSoldOut ? "Hết hàng" : "Còn hàng"}</span>
				</div>
				<Link to={`${routeName}/${id}`}>
					<img
						className="item-card-2__img--front"
						alt="item-card-pt--front"
						src={imageUrl}
					/>
					<img
						className="item-card-2__img--back"
						alt="item-card-pt--back"
						src={imageUrl}
					/>
				</Link>
				<div className="item-card-2__buttons">
					<Icon type="plus" />
					<Icon type="eye" />
					<Icon type="heart" />
				</div>
			</div>

			<div className="item-card-2__content">
				<h3 className="item-card-2__name">
					<Link to={`${routeName}/${id}`}>
						<p>{name || ""}</p>
					</Link>
				</h3>
				<p className="item-card-2__price">${price}</p>
			</div>
		</div>
	);
};

export default ItemCard2;