import React, { PropTypes } from "react";
import { Switch, Route } from "react-router-dom";
import { Overview } from "./Overview";
import { PropsRoute } from "components/Utilities";

const Forms = props => {
  const { routes } = props;

  return (
    <Switch>
      {routes.map(route => {
        return <Route path={route.path} component={route.component} />;
      })}

      <PropsRoute path="/docs/forms" component={FormsHome} {...props} />
    </Switch>
  );
};

const FormsHome = props => {
  const { links } = props;

  return (
    <article className="DocsArticle">
      <div className="DocsArticle-heading">
        <h2 className="DocsArticle-title">Forms</h2>
        <h5 className="DocsArticle-subtitle">
          Esse sint esse id amet irure elit sit aute cupidatat proident eu
          cupidatat ullamco.
        </h5>
      </div>
      <section className="DocsArticle-section u-PaddingTop">
        <div className="LinkCards">
          {links.map(link => (
            <a href={link.path} className="LinkCard">
              <div className="LinkCard-content">
                <h5 className="Title u-MarginBottom-xxsmall">{link.title}</h5>
                <h6 className="Subtitle u-Color-gray">{link.description}</h6>
              </div>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Forms;
