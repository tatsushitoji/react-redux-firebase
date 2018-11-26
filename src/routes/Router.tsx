import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from '../components/App';
import { Auth } from '../components/Auth';
import {
  LoadableTop,
  LoadableLogin,
  LoadableSignup,
  LoadableHome,
  LoadableCounter,
  LoadableTodo,
} from '.';

export const Router = () => (
  <App>
    <Switch>
      <Route exact path="/" component={LoadableTop} />
      <Route path="/login" component={LoadableLogin} />
      <Route path="/signup" component={LoadableSignup} />
      <Auth>
        <Route path="/home" component={LoadableHome} />
        <Route path="/counter" component={LoadableCounter} />
        <Route path="/todo" component={LoadableTodo} />
      </Auth>
    </Switch>
  </App>
);
