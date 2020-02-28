import React, { Component } from "react";
import ItemCard1 from "./ItemCard/ItemCard-1";

export default class MostRecentItem extends Component {
	render() {
		return (
			<section className="container most-recent-container margin-bottom-8 ">
				<div className="most-recent__heading text-center">
					<h1 className="section-heading text-center margin-bottom-2">
						Most Recent
					</h1>
					<h2 className="margin-bottom-4 text-center">
						Check out the most recent items
					</h2>
				</div>
				<div className="most-recent">
					{[...Array(4)].map(item => {
						return <ItemCard1 />;
					})}
				</div>
			</section>
		);
	}
}
