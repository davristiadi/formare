import React from 'react';

const Home = props => {
  const { hero } = props;

  return (
    <div id="homepage">
      <section className="Hero Hero--primary Hero--large">
        <div className="Hero-body Hero-body--centerized">
          <div className="container" style={{
						width: '800px',
						textAlign: 'center'
					}}>
						<div className="Heading u-MarginBottom-xlarge">
							<h1 className="Title u-FontWeight-regular">
								<span className="u-FontWeight-bold">Formare</span> is lightweight,<br />
								fast and easy to get started with.
							</h1>
						</div>
						<div className="u-Flex u-jc-center">
							<button className="Button Button--large Button--raised Button--secondary u-MarginRight-large">
								<i className="Icon fas fa-download u-MarginRight-large" />
								Download
							</button>
							<button className="Button Button--light Button--raised Button--large">
								<i className="Icon fas fa-rocket u-MarginRight-large" />
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
