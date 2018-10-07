import React from "react";

const Home = props => {
	const {
		hero
	} = props;
	
	return (
		<div className="fr-home">
			<section className="hero hero--large hero--primary">
				<div className="hero__body hero__body--centerized">
					<div className="container">
						<div className="grids">
							<div className="grid grid-7">
								<div className="heading mg-bottom-x-large">
									<h2 className="title fw-regular mg-bottom"><span className="fw-bold">Formare</span> is lightweight, fast and easy to get started with.</h2>
								</div>
								<div>
									<button className="button button--large button--secondary mg-right">
										<i className="fas fa-download mg-right-large"></i>
										Download
									</button>
									<button className="button button--light button--large mg-right-large">
										<i className="fas fa-rocket mg-right-large"></i>
										Getting Started
									</button>
									{/* <button className="button button--outlined button--secondary button--large">
										<i className="fas fa-book mg-right-large"></i>
										Documentation
									</button> */}
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