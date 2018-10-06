import React from "react";

const Home = props => {
	const {
		hero
	} = props;
	
	return (
		<div className="fr-home">
			<section className="hero hero--large">
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
									<button className="button button--primary button--large mg-right-large">
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
			<section className="section section--lighter">
				<div className="container">
					<div className="heading">
						<h3 className="title color-primary">Why Formare?</h3>
						<h5 className="subtitle color-gray">Nostrud minim ea elit reprehenderit enim officia aliquip ex do veniam et aliquip.</h5>
					</div>
				</div>
			</section>
		</div>
	)
	
	return (
		<div id="home">
			<section className="hero hero--dark">
				<div className="hero__body hero__body--centerized">
					<div className="container">
						<div className="heading">
							<h2 className="title">
								Formare is lightweight, fast and easy to get started with.
							</h2>
							<h4 className="subtitle color-light">
								Veniam dolore adipisicing eu excepteur aliqua deserunt
								laboris dolor dolor commodo nisi occaecat aute pariatur
								sunt culpa mollit ullamco.
							</h4>
						</div>
					</div>
				</div>
				<div className="hero__bg" style={{backgroundImage: `url(${hero.bgImage})`}}></div>
			</section>
		</div>
	);
};

export default Home;