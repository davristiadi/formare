import React from 'react';

const Home = props => {
  const { hero } = props;

  return (
    <div className="fr-home">
      <section className="hero hero--primary hero--large">
        <div className="hero__body hero__body--centerized">
          <div className="container" style={{
						width: '800px',
						textAlign: 'center'
					}}>
						<div className="heading mg-bottom-x-large">
							<h1 className="title fw-regular">
								<span className="fw-bold">Formare</span> is lightweight,<br />
								fast and easy to get started with.
							</h1>
						</div>
						<div>
							<button className="button button--large button--raised button--secondary mg-right-large">
								<i className="fas fa-download mg-right-large" />
								Download
							</button>
							<button className="button button--light button--raised button--large">
								<i className="fas fa-rocket mg-right-large" />
								Getting Started
							</button>
						</div>
					</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
