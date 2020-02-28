import React, { Component } from "react";
import Banner from "../components/carousel";
import BestSeller from "../components/BestSeller";
import MostRecentItem from "../components/MostRecentItem";
import MostRecentReview from "../components/MostRecentReview";
import NewsLetter from "../components/NewsLetter";

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Banner />
				<BestSeller />
				<MostRecentItem />
				<MostRecentReview></MostRecentReview>
				<NewsLetter />
			</div>
		);
	}
}
