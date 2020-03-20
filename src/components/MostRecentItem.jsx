import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCard1 from "./ItemCard/ItemCard-1";

import { selectItems } from "../redux/shop/shop.selector";

class MostRecentItem extends Component {
	render() {
		const { shopItems } = this.props;

		return (
			<section className="container-fluid most-recent-container margin-bottom-8 ">
				<div className="most-recent__heading text-center">
					<h1 className="section-heading text-center margin-bottom-2">
						Most Recent
					</h1>
					<h2 className="margin-bottom-4 text-center">
						Check out the most recent items
					</h2>
				</div>
				<div className="most-recent">
					{shopItems &&
						shopItems.length &&
						shopItems
							.slice(0, Math.min(5, shopItems.length))
							.map(({ id, ...otherProps }) => {
								return (
									<ItemCard1
										key={id}
										{...otherProps}
										id={id}
									/>
								);
							})}
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	shopItems: selectItems(state)
});

export default connect(mapStateToProps)(MostRecentItem);
