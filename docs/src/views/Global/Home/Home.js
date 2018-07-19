import React from "react";

const Home = props => {
	const {
		hero
	} = props;
	
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