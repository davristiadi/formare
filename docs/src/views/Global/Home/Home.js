import React from 'react';

const Home = props => {
	return (
		<div id="home">
			<section className="hero hero--primary hero--has-overlay" style={{backgroundImage: `url('https://images.unsplash.com/flagged/photo-1530447920184-b8a8c88ee72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3511890e01f7243a75369ac74f67026&auto=format&fit=crop&w=700&q=80')`}}>
				<div className="container pd-top-large">
					<h2 className="title">Formare is lightweight, fast and easy to get started with. </h2>
					<h4 className="subtitle color-gray">Veniam dolore adipisicing eu excepteur aliqua deserunt laboris dolor dolor commodo nisi occaecat aute pariatur sunt culpa mollit ullamco.</h4>
				</div>
			</section>
		</div>
	)
}

export default Home;