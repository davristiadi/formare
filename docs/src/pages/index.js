import React from 'react';
import { Link } from 'gatsby';
import { MainLayout } from 'layouts/main';
import SEO from 'components/seo';

const Home = () => (
  <>
    <SEO
      title="Home"
      keywords={[`formare`, `css`, `framework`, `css-framework`]}
    />
    <MainLayout>
      <section className="Hero Hero--primary">
        <div className="Hero-body Hero-body--centerized">
          <div
            className="Container u-JustifyContent-center u-Align-center"
            style={{
              maxWidth: '840px',
              margin: '0 auto',
            }}>
            <div className="Heading u-MarginBottom-xlarge">
              <h1 className="Title Heading-1 u-MarginBottom-small">Formare</h1>
              <h3 className="Subtitle Heading-3 u-Color-light">
                A modern and lightweight CSS framework for building web
                interfaces hassle-free
              </h3>
            </div>
            <div>
              <Link
                to="/docs/start"
                className="Button Button--lighter Button--large Button--outlined">
                Get started!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="Section Section--2xlarge">
        <div className="Container">
          <div className="Heading u-PaddingBottom-xlarge">
            <h3 className="Title u-FontWeight-semibold">Quick Navigation</h3>
            <h6 className="Subtitle u-clr-gray">
              Eiusmod anim occaecat duis irure do sit ea anim ut do.
            </h6>
          </div>
          <div className="Cards Grids">
            <NavigationLinks />
          </div>
        </div>
      </section>
    </MainLayout>
  </>
);

const NavigationLinks = () => {
  return (
    <>
      <div className="Grid Grid-12 Grid-sm-6 Grid-md-4">
        <Link to="/docs/introduction/getting-started" className="LinkCard">
          <div className="LinkCard-body u-pd-large">
            <div className="Heading">
              <h5 className="Title u-fw-medium">Introduction</h5>
            </div>
            <p>
              Get strated with Formare, including how to install Formare,
              requirements and our fundamentals.
            </p>
          </div>
        </Link>
      </div>
      <div className="Grid Grid-12 Grid-sm-6 Grid-md-4">
        <Link to="/docs/elements/buttons" className="LinkCard">
          <div className="LinkCard-body u-pd-large">
            <div className="Heading">
              <h5 className="Title u-fw-medium">Elements</h5>
            </div>
            <p>
              Find out about our elements that you can quickly implement;
              including buttons, text inputs, and more.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
