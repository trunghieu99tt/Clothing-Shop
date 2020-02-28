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
					submenu: {
						parentId: 2,
						data: [
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
					}
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

	toggleDropdown = event => {
		const menuList = document.querySelectorAll(".nav-small__link");
		const subMenuList = document.querySelectorAll(".submenu__list");

		console.log(event);

		console.log(subMenuList);
		Array.from(subMenuList).map(e => console.log(e.parentElement));
	};

	render() {
		const { dataMenu } = this.state;

		return (
			<React.Fragment>
				<div className="nav-wrapper">
					<nav className="nav container">
						<h1 className="logo">Logo here</h1>

						<ul className="nav__list">
							{dataMenu &&
								dataMenu.length > 0 &&
								dataMenu.map(menu => {
									const { url, name, submenu, id } = menu;

									if (submenu) {
										return (
											<li className="nav__item">
												<Link
													to={url}
													className="nav__link"
													key={`menu-item-${id}`}
												>
													{name}
												</Link>

												<div className="submenu">
													<ul className="submenu__list">
														{submenu &&
															submenu.data &&
															submenu.data
																.length &&
															submenu.data.map(
																({
																	name,
																	url,
																	id
																}) => (
																	<li className="submenu__item">
																		<Link
																			to={
																				url
																			}
																			className="nav__link"
																			key={`submenu-item-${id}`}
																		>
																			{
																				name
																			}
																		</Link>
																	</li>
																)
															)}
													</ul>
												</div>
											</li>
										);
									}

									return (
										<li className="nav__item">
											<Link
												to={url}
												className="nav__link"
												key={`menu-item-${id}`}
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
								const { url, name, submenu, id } = menu;

								if (submenu) {
									return (
										<li className="nav-small__item">
											<Link
												to={url}
												className="nav-small__link"
												key={id}
											>
												{name}

												<i
													className="material-icons"
													onClick={id =>
														this.toggleDropdown(id)
													}
												>
													keyboard_arrow_down
												</i>
											</Link>

											<div className="submenu">
												<ul
													className="submenu__list"
													parentid={submenu.parentId}
												>
													{submenu &&
														submenu.data &&
														submenu.data.length &&
														submenu.data.map(
															({
																name,
																url,
																id
															}) => (
																<li className="submenu__item">
																	<Link
																		to={url}
																		className="nav__link"
																		key={`submenu-item-${id}`}
																	>
																		{name}
																	</Link>
																</li>
															)
														)}
												</ul>
											</div>
										</li>
									);
								}

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
