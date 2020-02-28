import React, { Component } from "react";
import Navigation from "../navigation";
import Footer from "../Footer";

const BaseLayout = (WrappedComponent, props) => {
	return class extends Component {
		render() {
			return (
				<React.Fragment>
					<Navigation />
					<WrappedComponent {...props} />
					<Footer />
				</React.Fragment>
			);
		}
	};
};

export default BaseLayout;
