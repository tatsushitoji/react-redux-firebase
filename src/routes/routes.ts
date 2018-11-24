import loadable from 'loadable-components';

export const LoadableTop = loadable(() =>
  import(/* webpackChunkName: "Top" */ '../containers/Top').then(
    ({ Top }) => Top,
  ),
);

export const LoadableLogin = loadable(() =>
  import(/* webpackChunkName: "Login" */ '../containers/Login').then(
    ({ Login }) => Login,
  ),
);

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
