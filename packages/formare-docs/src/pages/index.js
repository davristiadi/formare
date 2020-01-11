import React from 'react';

import MainLayout from '../layouts/main-layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <div className="HomePage">
      <div className="HomePage-hero Hero">
        <div className="Hero-content Flex Flex-column JustifyContent-center AlignItems-center">
          <div className="MarginBottom-large">
            <h1 className="Heading-1">Formare</h1>
            <p>
              Formare is a modern and lightweight UI library to build web interfaces hassle-free
            </p>
          </div>
          <button className="Button Button--outlined Button--dark">Get Started</button>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default IndexPage;
