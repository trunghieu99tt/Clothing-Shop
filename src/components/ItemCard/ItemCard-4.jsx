import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { addItem, decreaseItem } from "../../redux/cart/cart.action";

const ItemCard4 = props => {
	const {
		item: { id, name, imageUrl, price, quantity, routeName },
		item,
		increaseQuantity,
		decreaseQuantity
	} = props;

	console.log("quantity", quantity);

	return (
		<tr className="item-card-4">
			<td>
				<div class="img-container">
					<Link to={`/shop/${routeName}/${id}`}>
						<img class="img" src={imageUrl} alt={name} />
					</Link>
				</div>
			</td>
			<td class="td-name">
				<Link to={`/shop/${routeName}/${id}`}>
					<p>{name}</p>
				</Link>
			</td>

			<td class="td-number text-right">
				<p>
					<small>$</small> {price}
				</p>
			</td>
			<td class="td-number item-quantity">
				<p className="item-quantity--value" productid={id}>
					{quantity}
				</p>
				<div class="btn-group btn-group-sm">
					<button
						class="btn btn-round btn-info"
						onClick={() => decreaseQuantity(item)}
					>
						<i class="material-icons">remove</i>{" "}
					</button>
					<button
						class="btn btn-round btn-info"
						onClick={() => increaseQuantity(item)}
					>
						<i class="material-icons">add</i>{" "}
					</button>
				</div>
			</td>
			<td class="td-number">
				<p>
					<small>$</small> {price}
				</p>
			</td>
			<td class="td-actions">
				<button
					type="button"
					rel="tooltip"
					data-placement="left"
					title=""
					class="btn btn-link"
					data-original-title="Remove item"
				>
					<i class="material-icons">close</i>
					<div class="ripple-container"></div>
				</button>
			</td>
		</tr>
	);
};

const mapDispatchToProps = dispatch => ({
	increaseQuantity: item => dispatch(addItem(item)),
	decreaseQuantity: item => dispatch(decreaseItem(item))
});

export default connect(null, mapDispatchToProps)(ItemCard4);
