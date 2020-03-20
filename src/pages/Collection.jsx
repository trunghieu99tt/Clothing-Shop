import React, { Component } from "react";

import ItemCard2 from "../components/ItemCard/ItemCard-2";
import { connect } from "react-redux";
import { selectCollection } from "../redux/shop/shop.selector";

class Collection extends Component {
	render() {
		const { match, collection } = this.props;

		// console.log("match: ", match);
		// console.log("collection", collection);

		const collectionItems =
			collection &&
			collection.items &&
			collection.items.length > 0 &&
			collection.items.map(item => {
				return (
					<ItemCard2
						preRoute={match}
						routeName={collection && collection.title}
						item={item}
					/>
				);
			});

		return (
			<section className="collection-page container-fluid">
				<h1 className="section-heading collection-page__heading">
					{collection && collection.title}
				</h1>
				<div className="collection-page__items">{collectionItems}</div>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(Collection);
