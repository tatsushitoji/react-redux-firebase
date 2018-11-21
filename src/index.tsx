import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from './routes';
import { configureStore, history } from './stores/store';

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

const store = configureStore({});

const renderApp = (RouterComponent: typeof Router) =>
  ReactDOM.render(
    <React.Fragment>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RouterComponent />
        </ConnectedRouter>
      </Provider>
    </React.Fragment>,
    document.body && document.body.appendChild(document.createElement('div')),
  );

renderApp(Router);
