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
		const { showPopup } = this.state;

		const img =
			"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg";

		return (
			<section className="best-seller margin-bottom-8">
				<h1 className="text-center margin-bottom-3 section-heading">
					Best Seller
				</h1>
				<div className="best-seller-items">
					{[...Array(14)].map((item, index) => {
						return (
							<figure
								className={`best-seller__item best-seller__item--${index +
									1}`}
								onClick={this.showProductPopUp}
							>
								<img
									className="best-seller__item__img"
									src={img}
									alt=""
								/>

								<figcaption className="best-seller__item__caption">
									Item Name
								</figcaption>
							</figure>
						);
					})}
				</div>
				<ProductPopUp
					hideProductPopUp={this.hideProductPopUp}
					show={showPopup}
				/>
			</section>
		);
	}
}
