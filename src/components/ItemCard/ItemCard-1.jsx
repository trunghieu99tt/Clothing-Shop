import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import { connect } from "react-redux";
import { addItem, addItemToWishlist } from "../../redux/cart/cart.action";

const ItemCard1 = props => {
	const {
		item: { imageUrl, name, price, id },
		item,
		routeName,
		increaseItem,
		addItemToWishList
	} = props;

	return (
		<div className="item-card-1">
			<img src={imageUrl} alt="" className="item-card-1__img" />
			<div className="item-card-1__content">
				<Link to={`/shop/${routeName}/${id}`}>
					<h2 className="item-card-1__name">{name}</h2>
				</Link>
				<p className="item-card-1__price">${price}</p>

				<div className="item-card-1__buttons">
					<Icon
						type="plus"
						onClick={() => increaseItem({ ...item, routeName })}
					/>
					<Icon
						type="heart"
						onClick={() =>
							addItemToWishList({ ...item, routeName })
						}
					/>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	increaseItem: item => dispatch(addItem(item)),
	addItemToWishList: item => dispatch(addItemToWishlist(item))
});

export default connect(null, mapDispatchToProps)(ItemCard1);
