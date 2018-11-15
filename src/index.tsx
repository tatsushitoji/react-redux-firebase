import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { routeConfig } from './routes';
import { configureStore, history } from './stores/store';

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

const store = configureStore({});

const renderApp = () =>
  ReactDOM.render(
    <React.Fragment>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {renderRoutes(routeConfig)}
        </ConnectedRouter>
      </Provider>
    </React.Fragment>,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp();
