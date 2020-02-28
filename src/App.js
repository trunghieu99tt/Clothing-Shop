import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./static/css/main.css";

import BaseLayout from "./components/BaseView/BaseLayout";
import Homepage from "./pages/HomePage";
import Shop from "./pages/Shop";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default BaseLayout(App);
