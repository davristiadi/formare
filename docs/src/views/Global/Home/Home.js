import React from "react";

const Home = props => {
	return (
		<div id="home">
			<section
				className="hero hero--darkest hero--has-overlay hero--absolute-center"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ca95b1290dfb28db0ee368546e55487&auto=format&fit=crop&w=1050&q=80')`
				}}
			>
				<div className="container pd-top-large flex ai-center ta-center">
					<div className="heading">
						<h2 className="title">
							Formare is lightweight, fast and easy to get started
							with.{" "}
						</h2>
						<h4 className="subtitle color-light">
							Veniam dolore adipisicing eu excepteur aliqua deserunt
							laboris dolor dolor commodo nisi occaecat aute pariatur
							sunt culpa mollit ullamco.
						</h4>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;