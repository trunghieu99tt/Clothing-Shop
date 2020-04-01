import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
	render() {
		const dataMenu = [
			{
				id: 1,
				name: "home",
				url: "/"
			},
			{
				id: 2,
				name: "shop",
				url: "/shop"
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
		];
		const links = dataMenu.map(item => {
			const { id, name, url } = item;
			return (
				<li>
					<Link to={url} key={`menu-item-footer-${id}`}>
						<p>{name}</p>
					</Link>
				</li>
			);
		});

		return (
			<footer className="footer footer-black footer-big">
				<div className="container">
					<div className="footer-content">
						<div className="contact-infor--footer">
							<h2 className="footer__heading">About Us</h2>
							<p className="text-left">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eligendi alias laborum sed
								perspiciatis voluptates, explicabo, labore
								voluptatibus, sit rem temporibus accusantium
								quaerat maiores blanditiis. Et id ullam eius
								expedita eaque.
							</p>
						</div>

						<div className="new-items--footer">
							<h2 className="footer__heading">New items</h2>
							<ul>{links}</ul>
						</div>

						<div className="working-time--footer">
							<h2 className="footer__heading">Opening hours</h2>
							<ul>
								<li>
									<p>8:00 AM - 9:00 PM: Monday to Friday</p>
								</li>
								<li>
									<p>
										8:00 AM - 11:00 PM: Saturday and Sunday
									</p>
								</li>
							</ul>
						</div>
					</div>
					<hr />
					<ul className="float-left">
						<li>
							<a href="#pablo">Blog</a>
						</li>
						<li>
							<a href="#pablo">Presentation</a>
						</li>
						<li>
							<a href="#pablo">Discover</a>
						</li>
						<li>
							<a href="#pablo">Payment</a>
						</li>
						<li>
							<a href="#pablo">Contact Us</a>
						</li>
					</ul>
					<div className="copyright float-right">
						<p>Copyright © 2020 Rikikduo All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}
