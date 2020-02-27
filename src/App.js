import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./static/css/main.css";
import Banner from "./components/carousel";
import BestSeller from "./components/BestSeller";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Banner />
				<BestSeller />
				<Switch></Switch>
			</React.Fragment>
		);
	}
}

export default App;
