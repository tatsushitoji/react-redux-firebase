import loadable from 'loadable-components';

export const LoadableHome = loadable(() =>
  import(/* webpackChunkName: "Home" */ '../components/pages/Home').then(
    ({ Home }) => Home,
  ),
);

export const LoadableCounter = loadable(() =>
  import(/* webpackChunkName: "Counter" */ '../containers/Counter').then(
    ({ Counter }) => Counter,
  ),
);

export const LoadableTodo = loadable(() =>
  import(/* webpackChunkName: "Todo" */ '../containers/Todo').then(
    ({ Todo }) => Todo,
  ),
);
