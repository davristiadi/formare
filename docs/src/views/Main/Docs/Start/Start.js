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
          <h4 className="Title"></h4>
        </div>
      </section>
    </article>
  );
};

Start.propTypes = {};

export default Start;
