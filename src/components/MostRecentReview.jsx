import React, { Component } from "react";
import ReactOwlCarousel from "react-owl-carousel";

export default class MostRecentReview extends Component {
	render() {
		const img =
			"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg";

		const carouselItems = [...Array(3)].map(item => {
			return (
				<div className="reviews__item">
					<figure>
						<img src={img} alt="" className="reviews__item__user" />
					</figure>

					<div className="reviews__item__content">
						<i className="material-icons">format_quote</i>
						<p className="reviews__item__description">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Est mollitia maiores nam, autem quis hic optio
							omnis quod asperiores, repellendus exercitationem at
							quo vero ut porro, reprehenderit eius esse tenetur?
						</p>
						<h2 style={{ fontWeight: "500" }}>Rikikudo</h2>
						<div className="reviews__item__footer">
							<i className="material-icons text-warning">star</i>
							<i className="material-icons text-warning">star</i>
							<i className="material-icons text-warning">star</i>
							<i className="material-icons text-warning">star</i>
							<i className="material-icons text-warning">star</i>
						</div>
					</div>
				</div>
			);
		});

		const options = {
			loop: true,
			center: true,
			// autoplay: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1170: {
					items: 3
				}
			}
		};

		return (
			<section
				className="reviews margin-bottom-3 testimonials-1 section-image"
				style={{
					backgroundImage: `url('./assets/img/dg2.jpg')`,
					backgroundAttachment: "fixed"
				}}
			>
				<div className="row reviews__heading">
					<div className="col-md-6 ml-auto mr-auto text-center">
						<h1 className="reviews__title">Most Recent Review</h1>
						<h4 className="reviews__description">
							You need more information? Check what other persons
							are saying about our product. They are very happy
							with their purchase.
						</h4>
					</div>
				</div>

				<ReactOwlCarousel className="testimonials" {...options}>
					{carouselItems}
				</ReactOwlCarousel>
			</section>
		);
	}
}
