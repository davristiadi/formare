import React from 'react';
import Loadable from 'react-loadable';
import { RouteList } from 'components/Routes';

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ './Home'),
      loading: () => null,
      modules: ['home'],
    }),
  },
  {
    path: '/docs',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "docs" */ './Docs'),
      loading: () => null,
      modules: ['docs'],
    }),
  },
  {
    path: '/not-found',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "not-found" */ './NotFound'),
      loading: () => null,
      modules: ['not-found'],
    }),
  },
];

const MainRoutes = () => <RouteList routes={routes} />;

export default MainRoutes;
