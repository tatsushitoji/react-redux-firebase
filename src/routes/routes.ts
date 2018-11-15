import { RouteConfig } from 'react-router-config';
import loadable from 'loadable-components';
import { App } from '../components/App';

const LoadableCounter = loadable(
  () =>
    import(/* webpackChunkName: "Counter" */ '../containers/Counter').then(
      ({ Counter }) => Counter,
    ),
  {
    modules: ['../containers/Counter'],
  },
);

const LoadableTodo = loadable(
  () =>
    import(/* webpackChunkName: "Todo" */ '../containers/Todo').then(
      ({ Todo }) => Todo,
    ),
  {
    modules: ['../containers/Todo'],
  },
);

export const routeConfig = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: LoadableCounter,
      },
      {
        path: '/todo',
        exact: true,
        component: LoadableTodo,
      },
    ],
  },
] as RouteConfig[];
