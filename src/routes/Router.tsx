import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from '../components/App';
import { LoadableHome, LoadableCounter, LoadableTodo } from '.';

export const Router = () => (
  <App>
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route path="/counter" component={LoadableCounter} />
      <Route path="/todo" component={LoadableTodo} />
    </Switch>
  </App>
);
