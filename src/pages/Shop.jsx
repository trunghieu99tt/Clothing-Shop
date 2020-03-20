import React, { Component } from "react";
import { connect } from "react-redux";

import ShopCollectionComponent from "../components/ShopCollection.component";
import { selectShopData } from "../redux/shop/shop.selector";

class Shop extends Component {
	render() {
		const { match, shopData } = this.props;

		const collections =
			shopData &&
			shopData.length &&
			shopData.map(({ id, routeName, ...othersProps }) => {
				return (
					<ShopCollectionComponent
						key={`collection-item-${id}`}
						preRoute={match}
						routeName={routeName}
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

const mapStateToProps = state => ({
	shopData: selectShopData(state)
});

export default connect(mapStateToProps)(Shop);
