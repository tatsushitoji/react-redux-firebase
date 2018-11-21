import * as React from 'react';
import { compose, withStateHandlers, StateHandlerMap } from 'recompose';

export interface State {
  sideOpen: boolean;
}

export interface StateHandlers {
  setSideOpen: (_: React.SyntheticEvent) => void;
}

export type EnhancedProps = State & StateHandlers;

export const drawerState = <Props extends EnhancedProps>() =>
  compose<Props, Props>(
    withStateHandlers<State, StateHandlerMap<State>, Props>(
      { sideOpen: false },
      {
        setSideOpen: ({ sideOpen }) => () => ({
          sideOpen: !sideOpen,
        }),
      },
    ),
  );
