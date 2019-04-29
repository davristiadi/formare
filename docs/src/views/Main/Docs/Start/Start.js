import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Highlight } from 'components/Highlight';

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
};

const GettingStarted = () => {
  return (
    <article id="getting-started" className="DocsArticle">
      <div className="DocsArticle-heading">
        <h2 className="DocsArticle-title">Getting Started</h2>
        <h5 className="DocsArticle-subtitle">
          A quick start-up guide for setting up Formare in your project.
        </h5>
      </div>
      <section id="quick-start" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Quick Start</h4>
        </div>
        <p>
          At the moment, the recommended and quickest way to integrate Formare
          into your project is by through{' '}
          <a href="https://cdn.jsdelivr.net/npm/formare/css/formare.css">CDN</a>{' '}
          provided by <a href="https://www.jsdelivr.com/">jsDelivr</a>. We have
          also provided several ways to install Formare other than CDN. For more
          information about this, head over to the{' '}
          <Link to="/docs/start/installation">installation</Link> page.
        </p>
      </section>
      <section id="usage" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Usage</h4>
        </div>
        <p>
          After you've done the installation process with CDN, you can just put
          this <code>{`<link>`}</code> tag in your project's{' '}
          <code>{`<head>`}</code>
          and instantly gain access to all of our classes. It's really that
          simple!
        </p>
        <Highlight lang="html">
          {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/formare/css/formare.css" />
          `}
        </Highlight>
      </section>
    </article>
  );
};

Start.propTypes = {};

export default Start;
