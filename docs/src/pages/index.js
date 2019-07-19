import React from 'react';
import { Link } from 'gatsby';
import MainLayout from 'layouts/main-layout';
import SEO from 'components/seo';
import { Highlight } from 'components/highlight';

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
              }}
            >
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
              }}
            >
              <div className="u-MarginBottom-xlarge">
                <Highlight
                  lang="html"
                  className="u-Flex u-jc-center u-ta-center"
                >
                  {`
                  $ npm install formare
                  $ yarn add formare
                  `}
                </Highlight>
              </div>
              <div className="u-Flex-row u-JustifyContent-center">
                <Link
                  href="/docs/start"
                  className="Button Button--large Button--lighter Button--outlined"
                >
                  Get started!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Section Section--2xlarge">
        <div className="Container">
          <div className="Heading u-PaddingBottom-large">
            <h2 className="Title">Quick Navigation</h2>
            <h5 className="Subtitle u-clr-gray">
              Eiusmod anim occaecat duis irure do sit ea anim ut do.
            </h5>
          </div>
          <div className="Cards Grids">
            <div className="Grid Grid-4">
              <Link to="/getting-started">
                <div className="LinkCard">
                  <div className="LinkCard-body">
                    <div className="Heading">
                      <h4 className="Title u-fw-medium">Getting Started</h4>
                    </div>
                    <p className="u-clr-gray">
                      Proident aute cillum incididunt deserunt mollit in commodo
                      reprehenderit aute anim.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="Grid Grid-4">
              <Link to="/getting-started">
                <div className="LinkCard">
                  <div className="LinkCard-body">
                    <div className="Heading">
                      <h4 className="Title u-fw-medium">Components</h4>
                    </div>
                    <p className="u-clr-gray">
                      Proident aute cillum incididunt deserunt mollit in commodo
                      reprehenderit aute anim.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="Grid Grid-4">
              <Link to="/getting-started">
                <div className="LinkCard">
                  <div className="LinkCard-body">
                    <div className="Heading">
                      <h4 className="Title u-fw-medium">Layouts</h4>
                    </div>
                    <p className="u-clr-gray">
                      Proident aute cillum incididunt deserunt mollit in commodo
                      reprehenderit aute anim.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="Grid Grid-4">
              <Link to="/getting-started">
                <div className="LinkCard">
                  <div className="LinkCard-body">
                    <div className="Heading">
                      <h4 className="Title u-fw-medium">Layouts</h4>
                    </div>
                    <p className="u-clr-gray">
                      Proident aute cillum incididunt deserunt mollit in commodo
                      reprehenderit aute anim.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

export default Home;
