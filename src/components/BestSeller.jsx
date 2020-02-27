import React, { Component } from "react";
import ProductPopUp from "./ProductPopUp";

export default class BestSeller extends Component {
	state = {
		showPopup: false
	};

	showProductPopUp = () => {
		this.setState({ showPopup: true });
	};

	hideProductPopUp = () => {
		this.setState({ showPopup: false });
	};

	render() {
		const img =
			"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg";

		return (
			<section className="best-seller">
				<h1 className="text-center margin-bottom-3">Best Seller</h1>
				<div className="best-seller-items">
					{[...Array(14)].map((item, index) => {
						return (
							<figure
								className={`best-seller__item best-seller__item--${index +
									1}`}
								onClick={this.showProductPopUp}
							>
								<img
									className="best-seller__img"
									src={img}
									alt=""
								/>
							</figure>
						);
					})}
				</div>
				<ProductPopUp
					hideProductPopUp={this.hideProductPopUp}
					show={this.state.showPopup}
				/>
			</section>
		);
	}
}
