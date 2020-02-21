import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";

import "./static/css/main.css";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Switch></Switch>
			</React.Fragment>
		);
	}
}

export default App;
