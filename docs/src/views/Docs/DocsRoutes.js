import React from 'react';
import Loadable from 'react-loadable';
import { RouteList } from 'components/Routes';

const routes = [
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
];

const DocsRoutes = () => <RouteList routes={routes} />;

export default DocsRoutes;
