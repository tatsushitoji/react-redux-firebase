import * as React from 'react';

type DerivedStateFromPropsFunction<TProps, TState> = (
  props: TProps,
  state: TState,
) => TState | void;

export const getDerivedStateFromProps = <T extends {}>(
  f: DerivedStateFromPropsFunction<T, T | {}>,
) => (BaseComponent: React.ComponentType<T>) => {
  class EnhancedComponent extends React.Component<T> {
    state = {};
    static getDerivedStateFromProps(nextProps: T, prevState: T | {}) {
      return f(nextProps, prevState) || null;
    }
    render() {
      return React.createFactory(BaseComponent as React.ComponentClass<T>)({
        ...(this.props as any),
        ...this.state,
      });
    }
  }
  return EnhancedComponent;
};
