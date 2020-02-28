import React, { Component } from "react";
import ItemCard1 from "./ItemCard/ItemCard-1";

export default class MostRecentItem extends Component {
	render() {
		return (
			<section className="container most-recent-container margin-bottom-8">
				<h1 className="section-heading text-center margin-bottom-3">
					Most Recent
				</h1>
				<div className="most-recent">
					{[...Array(4)].map(item => {
						return <ItemCard1 />;
					})}
				</div>
			</section>
		);
	}
}
