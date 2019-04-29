import React from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';

const RouteList = props => {
  const { routes, match, location } = props;

  return (
    <Switch>
      {routes.map(route => {
        const routeUrl =
          match.url === '/' ? `${route.path}` : `${match.url}${route.path}`;

        return <Route {...route} key={location.pathname} path={routeUrl} />;
      })}
      <Route render={() => <Redirect to="/not-found" />} />
    </Switch>
  );
};

export default withRouter(RouteList);
