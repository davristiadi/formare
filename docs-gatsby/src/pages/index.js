import React from 'react';
import { Link } from 'gatsby';
import MainLayout from '../layout/main-layout';
import SEO from '../components/seo';

import { Highlight } from '../components/highlight';

const Home = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainLayout>
      <section className="Hero Hero--primary Hero--large">
        <div className="Hero-body Hero-body--centerized">
          <div className="Container">
            <div
              className="Heading u-MarginBottom-xlarge u-Align-center"
              style={{
                maxWidth: '600px',
                margin: '0 auto',
              }}>
              <h1 className="Title u-MarginBottom-xsmall">Formare</h1>
              <h3 className="Subtitle u-Color-light">
                A modern and lightweight CSS framework for building web
                interfaces hassle-free
              </h3>
            </div>
            <div
              className="u-Align-center"
              style={{
                maxWidth: '480px',
                margin: '0 auto',
              }}>
              <div className="u-MarginBottom-xlarge">
                <Highlight lang="shell">
                  {`
                  $ npm install formare
                  // or
                  $ yarn add formare
                  `}
                </Highlight>
              </div>
              <div className="u-Flex-row u-JustifyContent-center">
                <Link
                  href="/docs/start"
                  className="Button Button--secondary Button--large">
                  <i className="Icon fas fa-rocket u-MarginRight-large" />
                  Get started!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Section u-PaddingTop-large u-PaddingBottom-large">
        <div className="Container">
          <div className="Heading">
            <h3 className="Title">Why Formare?</h3>
            <h5 className="Subtitle u-Color-gray">
              Formare isn't just another framework, here's why.
            </h5>
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

export default Home;

/**
 * 
import React from 'react';
import { Link } from 'gatsby';

import MainLayout from '../layout/main-layout';
import Image from '../components/image';
import SEO from '../components/seo';

const Home = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainLayout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </MainLayout>
  </>
);

export default Home;

 */
