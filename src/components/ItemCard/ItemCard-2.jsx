import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { connect } from "react-redux";

import { addItem, addItemToWishlist } from "../../redux/cart/cart.action";

const ItemCard2 = props => {
	const {
		item: { id, name, imageUrl, price },
		routeName,
		item,
		isSoldOut,
		preRoute,
		isShopPage,
		increaseItem,
		addItemToWishList
	} = props;

	const path = isShopPage
		? `${(preRoute && preRoute.path) || ""}/${routeName}/${id}`
		: `${(preRoute && preRoute.url) || ""}/${id}`;

	return (
		<div className="item-card-2">
			<div className="item-card-2__img">
				<div className="sold-out">
					<span>{isSoldOut ? "Hết hàng" : "Còn hàng"}</span>
				</div>
				<Link to={path}>
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
					<Icon type="plus" onClick={() => increaseItem(item)} />
					<Icon
						type="heart"
						onClick={() => addItemToWishList(item)}
					/>
				</div>
			</div>

			<div className="item-card-2__content">
				<h3 className="item-card-2__name">
					<Link to={path}>
						<p>{name || ""}</p>
					</Link>
				</h3>
				<p className="item-card-2__price">${price}</p>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	increaseItem: item => dispatch(addItem(item)),
	addItemToWishList: item => dispatch(addItemToWishlist(item))
});

export default connect(null, mapDispatchToProps)(ItemCard2);
