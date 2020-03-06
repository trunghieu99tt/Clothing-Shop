import React, { Component } from "react";
import SHOP_DATA from "../shop.data";
import ItemCard3 from "../components/ItemCard/ItemCard-3";

export default class ProductDetail extends Component {
	state = {
		shopData: SHOP_DATA
	};

	render() {
		const { match } = this.props;
		const { shopData } = this.state;
		const { collectionID, itemID } = match && match.params;
		const filteredCollection =
			shopData &&
			shopData.length &&
			shopData.filter(item => item.routeName === collectionID);

		const filterdItem =
			(filteredCollection &&
				filteredCollection.length > 0 &&
				filteredCollection[0] &&
				filteredCollection[0].items &&
				filteredCollection[0].items.length > 0 &&
				filteredCollection[0].items.filter(
					item => item.id === +itemID
				)[0]) ||
			"";

		const relatedItems =
			(filteredCollection &&
				filteredCollection.length > 0 &&
				filteredCollection[0] &&
				filteredCollection[0].items &&
				filteredCollection[0].items.length > 0 &&
				filteredCollection[0].items.filter(
					item => item.id !== +itemID
				)) ||
			"";

		return (
			<section className="product-detail">
				<div className="background-layer">
					<img src={require("../static/img/bg6.jpg")} alt="" />
				</div>

				<div className="container product-detail__content">
					<div className="product-detail__content-inner">
						<div className="row">
							<div className="col-md-5 ">
								<img
									className="product-detail__bigImg"
									src={filterdItem.imageUrl}
									alt=""
								/>
							</div>
							<div className="col-md-6">
								<h2 className="title">
									{" "}
									{filterdItem && filterdItem.name}{" "}
								</h2>
								<h3 className="main-price">
									${filterdItem && filterdItem.price}{" "}
								</h3>
								<div id="accordion" role="tablist">
									<div className="card card-collapse">
										<div
											className="card-header"
											role="tab"
											id="headingOne"
										>
											<h4 className="mb-0">
												<a
													data-toggle="collapse"
													href="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
													className="collapsed"
												>
													<p>Description</p>
													<i className="material-icons">
														keyboard_arrow_down
													</i>
												</a>
											</h4>
										</div>
										<div
											id="collapseOne"
											className="collapse"
											role="tabpanel"
											aria-labelledby="headingOne"
											data-parent="#accordion"
										>
											<div className="card-body">
												<p>
													Eres' daring 'Grigri
													Fortune' swimsuit has the
													fit and coverage of a bikini
													in a one-piece silhouette.
													This fuchsia style is
													crafted from the label's
													sculpting peau douce fabric
													and has flattering cutouts
													through the torso and back.
													Wear yours with mirrored
													sunglasses on vacation.
												</p>
											</div>
										</div>
									</div>
									<div className="card card-collapse">
										<div
											className="card-header"
											role="tab"
											id="headingTwo"
										>
											<h5 className="mb-0">
												<a
													className="collapsed"
													data-toggle="collapse"
													href="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo"
												>
													<p>Designer Information</p>
													<i className="material-icons">
														keyboard_arrow_down
													</i>
												</a>
											</h5>
										</div>
										<div
											id="collapseTwo"
											className="collapse"
											role="tabpanel"
											aria-labelledby="headingTwo"
											data-parent="#accordion"
										>
											<div className="card-body">
												<p>
													An infusion of West Coast
													cool and New York attitude,
													Rebecca Minkoff is
													synonymous with It girl
													style. Minkoff burst on the
													fashion scene with her
													best-selling 'Morning After
													Bag' and later expanded her
													offering with the Rebecca
													Minkoff Collection - a range
													of luxe city staples with a
													"downtown romantic" theme.
												</p>
											</div>
										</div>
									</div>
									<div className="card card-collapse">
										<div
											className="card-header"
											role="tab"
											id="headingThree"
										>
											<h5 className="mb-0">
												<a
													className=""
													data-toggle="collapse"
													href="#collapseThree"
													aria-expanded="true"
													aria-controls="collapseThree"
												>
													<p>Details and Care</p>
													<i className="material-icons">
														keyboard_arrow_down
													</i>
												</a>
											</h5>
										</div>
										<div
											id="collapseThree"
											className="collapse show"
											role="tabpanel"
											aria-labelledby="headingThree"
											data-parent="#accordion"
										>
											<div className="card-body">
												<ul>
													<li>
														<p>
															Storm and
															midnight-blue
															stretch cotton-blend
														</p>
													</li>
													<li>
														<p>
															Notch lapels,
															functioning buttoned
															cuffs, two front
															flap pockets, single
															vent, internal
															pocket
														</p>
													</li>
													<li>
														<p>
															Two button fastening
														</p>
													</li>
													<li>
														<p>
															84% cotton, 14%
															nylon,
														</p>
														<p>2% elastane</p>
													</li>
													<li>
														<p>Dry clean</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="row pick-size mt-5">
									<div className="d-flex justify-content-between align-items-center">
										<label
											style={{
												marginLeft: "1rem"
											}}
										>
											<p
												style={{
													fontWeight: "lighter"
												}}
											>
												Select size
											</p>
										</label>

										<div className="product-detail__size-selection">
											<button
												className="product-detail__size-selection__option"
												value="large"
											>
												Large
											</button>
											<button
												className="product-detail__size-selection__option"
												value="large"
											>
												Medium
											</button>
											<button
												className="product-detail__size-selection__option"
												value="large"
											>
												Small
											</button>
										</div>
									</div>
								</div>
								<div class="product-detail__buttons pull-right">
									<button class="button button--5">
										Add to card
									</button>
									<button class="button button--5">
										Add to wishlist
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container text-center">
					<h1 className="section-heading margin-top-3 margin-bottom-5">
						Related Items
					</h1>
					<div className="related-product">
						{relatedItems &&
							relatedItems.length > 0 &&
							relatedItems
								.slice(0, Math.min(4, relatedItems.length))
								.map(item => {
									return (
										<ItemCard3
											routeName={collectionID}
											{...item}
										/>
									);
								})}
					</div>
				</div>
			</section>
		);
	}
}
