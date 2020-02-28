import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./static/css/main.css";
import Banner from "./components/carousel";
import BestSeller from "./components/BestSeller";
import MostRecentItem from "./components/MostRecentItem";
import MostRecentReview from "./components/MostRecentReview";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Banner />
				<BestSeller />
				<MostRecentItem />
				<MostRecentReview></MostRecentReview>
				<NewsLetter />
				<Footer />
				<Switch></Switch>
			</React.Fragment>
		);
	}
}

export default App;
