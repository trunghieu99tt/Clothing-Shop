import React, { Component } from "react";
import SHOP_DATA from "../shop.data";
import ShopCollectionComponent from "../components/ShopCollection.component";

export default class Shop extends Component {
	state = {
		shopData: SHOP_DATA
	};

	render() {
		const { shopData } = this.state;

		const { match } = this.props;

		const collections =
			shopData &&
			shopData.length &&
			shopData.map(({ id, ...othersProps }) => {
				return (
					<ShopCollectionComponent
						key={`collection-item-${id}`}
						preRoute={match}
						{...othersProps}
					/>
				);
			});

		return (
			<div className="shop-page">
				<h1 className="section-heading">Explore our collections</h1>
				{collections}
			</div>
		);
	}
}
