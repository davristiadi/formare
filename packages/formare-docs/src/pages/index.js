import React from 'react';

import MainLayout from '../layouts/main-layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <div className="HomePage">
      <section className="HomePage-hero Hero BgColor-primary Color-white PaddingTop-3xlarge PaddingBottom-3xlarge">
        <div className="Container">
          <div className="Hero-content Flex Flex-column">
            <div className="MarginBottom-large">
              <h1 className="Heading-1">Formare</h1>
              <p className="Heading-4">
                Formare is a modern and lightweight UI library to build web interfaces hassle-free
              </p>
            </div>
            <div className="Flex">
              <button className="Button Button--outlined Button--light">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section className="PaddingTop-3xlarge PaddingBottom-3xlarge">
        <div className="Container">
          <div className="MarginBottom-xlarge">
            <h2 className="Heading-3">Button</h2>
            <p className="Heading-6">
              An interactive element that typically carries a single action.
            </p>
          </div>
          <div className="MarginBottom-xlarge">
            <h3 className="Heading-5 FontWeight-medium">Filled Button</h3>
            <button className="Button Button--primary">Button</button>
          </div>
          <div>
            <h3 className="Heading-5 FontWeight-medium">Button Sizes</h3>
            <button className="Button Button--primary Button--large">Large Button</button>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
);

export default IndexPage;
