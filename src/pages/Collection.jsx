import React, { Component } from "react";
import SHOP_DATA from "../shop.data";
import ItemCard2 from "../components/ItemCard/ItemCard-2";

export default class Collection extends Component {
	state = {
		shopData: SHOP_DATA
	};

	render() {
		const { shopData } = this.state;
		const { match } = this.props;

		console.log("match: ", match);

		const collectionName =
			match && match.params && match.params.collectionID;
		const filteredCollection = shopData.filter(
			item => item && item.routeName === collectionName
		);

		const filteredItems =
			filteredCollection &&
			filteredCollection.length > 0 &&
			filteredCollection[0] &&
			filteredCollection[0].items;

		const collectionItems =
			filteredItems &&
			filteredItems.length > 0 &&
			filteredItems.map(item => {
				return (
					<ItemCard2
						preRoute={match}
						routeName={collectionName}
						{...item}
					/>
				);
			});

		return (
			<section className="collection-page container-fluid">
				<h1 className="section-heading collection-page__heading">
					{collectionName}
				</h1>
				<div className="collection-page__items">{collectionItems}</div>
			</section>
		);
	}
}
