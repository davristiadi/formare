import React from 'react';
import Loadable from 'react-loadable';
import { RouteList } from 'components/Routes';

export const routes = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/introduction',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "introduction" */ './Introduction'),
      loading: () => null,
      modules: ['introduction'],
    }),
  },
  {
    path: '/components',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "components" */ './Components'),
      loading: () => null,
      modules: ['components'],
    }),
  },
];

const DocsRoutes = () => <RouteList routes={routes} />;

export default DocsRoutes;
