import React, { Component } from "react";
import ItemCard1 from "./ItemCard/ItemCard-1";
import { getItemList } from "./Helper";
import SHOP_DATA from "../shop.data";

export default class MostRecentItem extends Component {
	render() {
		const items = getItemList(SHOP_DATA);

		console.log("items: ", items);

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
					{items &&
						items.length &&
						items
							.slice(0, Math.min(5, items.length))
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
