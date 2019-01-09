import React from "react";
import { Switch, Route } from 'react-router-dom';

const Start = props => {
  const { path, routes } = props;
  
  return (
		<Switch>
			<Route exact path={path} component={GettingStarted} />
			{routes.map(route => {
				return <Route path={route.path} component={route.component} />;
			})}
		</Switch>
	);
}

const GettingStarted = () => {
  return (
    <article id="getting-started" className="fr-DocsArticle">
      <div className="fr-DocsArticle-heading">
        <h2 className="fr-DocsArticle-title">Getting Started</h2>
        <h5 className="fr-DocsArticle-subtitle">
          A quick start-up guide for setting up Formare in your project.
        </h5>
      </div>
      <section className="fr-DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Quick Start</h4>
        </div>        
        <p>
          The quickest and easiest way to use Formare in your website is by adding it via package managers, but there are also
          other methods available. Go to the <a>installation</a> page for more info.
        </p>
        <blockquote className="Blockquote">
          <i className="fas fa-exclamation-triangle fa-lg u-MarginRight"></i>
          <div>
            To be noted that Formare isn't listed in CDNjs therefore you cannot fetch our project via CDN. Consider starring and contributing to our project
            to make it available in CDN!
          </div>
        </blockquote>
      </section>
    </article>
  );
};

Start.propTypes = {};

export default Start;
