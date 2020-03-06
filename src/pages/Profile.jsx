import React, { Component } from "react";
import SHOP_DATA from "../shop.data";
import { getItemList, shuffle_list } from "../components/Helper";
import ItemCard3 from "../components/ItemCard/ItemCard-3";

export default class Profile extends Component {
	render() {
		const listItems1 = shuffle_list(getItemList(SHOP_DATA));
		const listItems2 = shuffle_list(getItemList(SHOP_DATA));

		const mostRecentBought =
			listItems1 &&
			listItems1.length > 0 &&
			listItems1.slice(0, Math.min(4, listItems1.length)).map(item => {
				return <ItemCard3 {...item} />;
			});

		const mostRecentAddedWishlist =
			listItems2 &&
			listItems2.length > 0 &&
			listItems2.slice(0, Math.min(4, listItems2.length)).map(item => {
				return <ItemCard3 {...item} />;
			});

		return (
			<section className="profile-page">
				<div className="background-layer">
					<img src={require("../static/img/bg6.jpg")} alt="" />
				</div>

				<div className="container">
					<div className="profile-page__user-infor">
						<div className="user__infor d-flex flex-column align-items-center">
							<div className="user__image">
								<img
									src={require("../static/img/faces/avatar.jpg")}
									alt="user"
									className="img-raised rounded-circle img-fluid"
								></img>
							</div>
							<div className="user__name">
								<h3>Rikikudo</h3>
							</div>
							<div className="user__address">
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
							<div className="user__phone">
								<p>0948733748</p>
							</div>
						</div>
						<div className="user__sumary">
							<div className="user__expense--all-time">
								<p>
									Tổng chi tiêu: <span>$9999.9999</span>
								</p>
							</div>
							<div className="user__expense--this-month">
								<p>
									Tổng chi tiêu tháng: <span> $843.994</span>
								</p>
							</div>
						</div>
					</div>
					<div className="profile-page__user-most-recent-bought">
						<h1 className="profile-page__user-most-recent-bought__heading section-heading">
							Most Recent Bought Items
						</h1>
						<div className="profile-page__user-most-recent-bought__items grid-4-columns">
							{mostRecentBought}
						</div>
					</div>

					<div className="profile-page__user-most-recent-added-wishlist text-center">
						<h1 className="profile-page__user-most-recent-added-wishlist__heading section-heading">
							Most Recent Added To Wishlist
						</h1>
						<div className="profile-page__user-most-recent-added-wishlist__items grid-4-columns">
							{mostRecentAddedWishlist}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
