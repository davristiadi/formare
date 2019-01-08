import React from 'react';
import { Highlight } from 'components/Highlight';

const Home = props => {
  const { hero } = props;

  return (
    <div id="homepage">
      <section className="Hero Hero--primary Hero--xlarge">
        <div className="Hero-body Hero-body--centerized">
          <div className="Container" style={{
						width: '768px',
						textAlign: 'center'
					}}>
						<div className="Heading u-MarginBottom-xlarge">
							<h1 className="Title u-FontWeight-regular">
								<strong>Formare</strong> is a simple and modular front-end library for building websites hassle-free. 
							</h1>
						</div>
						<div className="u-MarginBottom-xlarge" style={{
							maxWidth: '480px',
							margin: '0 auto'
						}}>
							<Highlight lang="javascript" style={{width: '100%', textAlign: 'center'}}>
								{`
                $ npm install formare
                // or
                $ yarn add formare
								`}
							</Highlight>
						</div>
						<div className="u-Flex u-JustifyContent-center">
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
