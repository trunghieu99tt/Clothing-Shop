import React, { Component } from "react";
import ProductPopUp from "./ProductPopUp";
import SHOP_DATA from "../shop.data";
import { getItemList } from "./Helper";

export default class BestSeller extends Component {
	state = {
		showPopup: false,
		clickedItem: ""
	};

	showProductPopUp = item => {
		this.setState({ showPopup: true, clickedItem: item });
	};

	hideProductPopUp = () => {
		this.setState({ showPopup: false });
	};

	render() {
		const { showPopup } = this.state;

		console.log(SHOP_DATA);

		const productItems = getItemList(SHOP_DATA);

		// const img =
		// 	"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg";

		return (
			<section className="best-seller margin-bottom-5 text-center">
				<h1 className="text-center margin-bottom-2 section-heading">
					Best Seller
				</h1>
				<h2 className="margin-bottom-3">
					Check out the best-seller items
				</h2>
				<div className="best-seller-items">
					{productItems &&
						productItems
							.slice(0, Math.min(14, productItems.length))
							.map((item, index) => {
								const { name, imageUrl } = item;

								return (
									<figure
										className={`best-seller__item best-seller__item--${index +
											1}`}
										onClick={() =>
											this.showProductPopUp(item)
										}
									>
										<img
											className="best-seller__item__img"
											src={imageUrl}
											alt=""
										/>

										<figcaption className="best-seller__item__caption">
											{name}
										</figcaption>
									</figure>
								);
							})}
				</div>
				<ProductPopUp
					data={this.state.clickedItem}
					hideProductPopUp={this.hideProductPopUp}
					show={showPopup}
				/>
			</section>
		);
	}
}
