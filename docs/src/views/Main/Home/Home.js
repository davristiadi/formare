import React from 'react';

const Home = props => {
  const { hero } = props;

  return (
    <div id="homepage">
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
						<div className="flex jc-center">
							<button className="Button Button--large Button--raised Button--secondary mg-right-large">
								<i className="Icon fas fa-download mg-right-large" />
								Download
							</button>
							<button className="Button Button--light Button--raised Button--large">
								<i className="Icon fas fa-rocket mg-right-large" />
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
