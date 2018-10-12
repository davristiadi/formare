import React from "react";

const Home = props => {
	const {
		hero
	} = props;
	
	return (
		<div className="fr-home">
			<section className="hero hero--primary hero--x-large">
				<div className="hero__body hero__body--centerized">
					<div className="container">
							<div className="grid grid-8">
						<div className="grids">
								<div className="heading mg-bottom-x-large">
									<h1 className="title fw-regular"><span className="fw-bold">Formare</span> is lightweight, fast and easy to get started with.</h1>
								</div>
								<div>
									<button className="button button--large button--secondary mg-right-large">
										<i className="fas fa-download mg-right-large"></i>
										Download
									</button>
									<button className="button button--light button--large">
										<i className="fas fa-rocket mg-right-large"></i>
										Getting Started
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

export default Home;