import * as React from 'react';
import { compose, withStateHandlers, StateHandlerMap } from 'recompose';

export interface State {
  sideOpen: boolean;
}

export interface StateHandlers {
  setSideOpen: (_: React.SyntheticEvent) => void;
}

export type Props = State & StateHandlers;

export const drawerState = <P extends Props>(
  Component: React.ComponentClass<P> | React.SFC<P>,
): React.ComponentClass<P> =>
  compose<P, P>(
    withStateHandlers<State, StateHandlerMap<State>, P>(
      { sideOpen: false },
      {
        setSideOpen: ({ sideOpen }) => () => ({
          sideOpen: !sideOpen,
        }),
      },
    ),
  )(Component);
