import React from "react";
import { Link } from "react-router-dom";

const ItemCard3 = props => {
	const { id, name, imageUrl, price, routeName } = props;

	return (
		<div class="card card-product item-card-3">
			<div class="card-header card-header-image item-card-3__img">
				<Link to={`/shop/${routeName}/${id}`}>
					<img class="img" src={imageUrl} alt="product" />
				</Link>

				<div
					class="colored-shadow"
					style={{
						backgroundImage: `url(${imageUrl})`
					}}
				></div>
			</div>
			<div class="card-body">
				<h2 class="card-title">
					<Link to={`${id}`}>{name}</Link>
				</h2>
				<div class="card-description">
					<p>
						Dolce &amp; Gabbana's 'Greta' tote has been crafted in
						Italy from hard-wearing red textured-leather.
					</p>
				</div>
			</div>
			<div class="card-footer justify-content-between">
				<div class="price">
					<h4>${price}</h4>
				</div>
			</div>
		</div>
	);
};

export default ItemCard3;
