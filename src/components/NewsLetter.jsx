import React, { Component } from "react";

export default class NewsLetter extends Component {
	render() {
		return (
			<div className="newsletter">
				<div
					className="subscribe-line subscribe-line-image"
					style={{
						backgroundImage: `url('./assets/img/bg7.jpg')`,
						backgroundAttachment: "fixed"
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-md-6 ml-auto mr-auto">
								<div className="text-center">
									<h2 className="title newsletter__title section-heading">
										Subscribe to our Newsletter
									</h2>
									<p className="description newsletter__description">
										Join our newsletter and get news in your
										inbox every week! We hate spam too, so
										no worries about this.
									</p>
								</div>
								<div className="card card-raised card-form-horizontal">
									<div className="card-body ">
										<form method="" action="">
											<div className="row">
												<div className="col-lg-8 col-md-6 ">
													<span className="bmd-form-group">
														<div className="input-group">
															<div className="input-group-prepend">
																<span className="input-group-text">
																	<i className="material-icons">
																		mail
																	</i>
																</span>
															</div>
															<input
																type="email"
																placeholder="Your Email..."
																className="form-control"
															></input>
														</div>
													</span>
												</div>
												<div className="col-lg-4 col-md-6 ">
													<button
														type="button"
														className="btn btn-primary btn-block"
													>
														Subscribe
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
