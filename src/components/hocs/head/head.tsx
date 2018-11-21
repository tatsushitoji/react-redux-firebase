import * as React from 'react';
import Helmet from 'react-helmet';

export interface Props {
  title: string;
}

export const head = <P extends Props>(title: string) => (
  Component: React.ComponentClass<P> | React.SFC<P>,
): React.SFC<P> => props => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Component {...props} />
  </>
);
