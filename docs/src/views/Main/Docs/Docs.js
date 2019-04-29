import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PropsRoute } from "components/Utilities";
import DocsMenu from "./DocsMenu";
import "./Docs.scss";

const Docs = props => {
  const { routes } = props;

  return (
    <div className="Container Container--fullWidth">
      <div className="Docs">
        <aside className="DocsSidebar">
          <DocsMenu {...props} />
          <div className="DocsSidebar-overlay" />
        </aside>
        <main className="DocsContent">
          <div className="Container">
            <Switch>
              {routes.map(route => {
                return (
                  <PropsRoute
                    path={route.path}
                    component={route.component}
                    {...route}
                  />
                );
              })}
              <Redirect exact from="/docs" to={routes[0].path} />
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
