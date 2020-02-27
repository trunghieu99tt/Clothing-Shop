import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

export default class Banner extends Component {
	state = {
		carouselData: [
			{
				id: 1,
				image:
					"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-2.jpg",
				title: "Amazing Shop Layouts",
				collectionName: "Rikikudo Collection"
			},
			{
				id: 2,
				image:
					"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-3.jpg",
				title: "Amazing Shop Layouts",
				collectionName: "Build the best shop"
			},
			{
				id: 3,
				image:
					"https://grayson.qodeinteractive.com/wp-content/uploads/2016/08/home-3-slider-image-1.jpg",
				title: "Fresh and Fashionable",
				collectionName: "The Best Shop Platform"
			}
		]
	};

	render() {
		const { carouselData } = this.state;

		const carouseItem = carouselData.map((data, index) => {
			const { image, id, title, collectionName } = data;

			return (
				<Carousel.Item
					style={{
						background: `linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.4)), url(${image})`,
						backgroundSize: "cover"
					}}
				>
					<div className="carousel-content">
						<h2 className="carousel__collectionName">
							{collectionName}
						</h2>
						<h1 className="carousel__title">{title}</h1>
						<a href="#" className="button button--4">
							View More
						</a>
					</div>
				</Carousel.Item>
			);
		});

		return <Carousel className="margin-bottom-5">{carouseItem}</Carousel>;
	}
}
