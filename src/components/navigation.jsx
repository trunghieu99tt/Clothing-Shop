import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
	constructor() {
		super();
		this.state = {
			dataMenu: [
				{
					id: 1,
					name: "home",
					url: "/"
				},
				{
					id: 2,
					name: "shop",
					url: "/shop",
					submenu: [
						{
							id: 1,
							name: "Hats",
							url: "/hats"
						},
						{
							id: 2,
							name: "jackets",
							url: "/jackets"
						},
						{
							id: 3,
							name: "sneakers",
							url: "/sneakers"
						},
						{
							id: 4,
							name: "womens",
							url: "/womens"
						},
						{
							id: 5,
							name: "mens",
							url: "/mens"
						}
					]
				},
				{
					id: 3,
					name: "contact us",
					url: "/contact"
				},
				{
					id: 4,
					name: "profile",
					url: "/user"
				}
			]
		};
	}

	render() {
		const { dataMenu } = this.state;

		return (
			<React.Fragment>
				<div className="nav-wrapper">
					<nav className="nav">
						<h1 className="logo">Logo here</h1>

						<ul className="nav__list">
							{dataMenu &&
								dataMenu.length > 0 &&
								dataMenu.map(menu => {
									const { url, name } = menu;
									return (
										<li className="nav__item">
											<Link
												to={url}
												className="nav__link"
											>
												{name}
											</Link>
										</li>
									);
								})}
						</ul>
					</nav>
				</div>
				<input
					type="checkbox"
					className="nav__checkbox toggle-nav"
					name="checkbox"
					id="toggle-nav"
				></input>
				<label for="toggle-nav" className="nav__toggle-btn">
					<span className="nav__icon">&nbsp;</span>
				</label>

				<nav className="nav-small">
					<ul className="nav-small__list">
						{dataMenu &&
							dataMenu.length > 0 &&
							dataMenu.map(menu => {
								const { url, name } = menu;
								return (
									<li className="nav-small__item">
										<Link
											to={url}
											className="nav-small__link"
										>
											{name}
										</Link>
									</li>
								);
							})}
					</ul>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navigation;
