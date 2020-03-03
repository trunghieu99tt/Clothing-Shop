import React, { Component } from "react";

export default class ProductPopUp extends Component {
	render() {
		const { hideProductPopUp, show, data } = this.props;

		const { imageUrl, name, id, price } = data;

		// const img =
		// 	"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg";
		return (
			<div
				className={`product-popup ${show ? "showProductPopUp" : ""}`}
				key={id}
			>
				<div className="product-popup__content">
					<figure className="product-popup__left">
						<img
							className="product-popup__img"
							src={imageUrl}
							alt=""
						/>
					</figure>

					<div className="product-popup__right">
						<p
							className="product-popup__close"
							onClick={hideProductPopUp}
						>
							x
						</p>
						<h2 className="product-popup__name section-heading">
							{name}
						</h2>
						<p className="product-popup__price">${price}</p>
						<div className="product-popup__description">
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nemo officia ipsum beatae
								corporis, obcaecati suscipit assumenda velit
								tempora. Deserunt repudiandae quisquam,
								voluptates enim facere quasi illo architecto at
								sed recusandae!
							</p>
						</div>

						<div className="product-popup__meta text-left">
							<p>SKU: 903</p>
							<p>Category: Showcase</p>
							<p>Tags: Demo, Showcase</p>
						</div>

						<div className="product-popup__buttons">
							<button className="button button--5">
								Add to card
							</button>
							<button className="button button--5">
								Add to wishlist
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
