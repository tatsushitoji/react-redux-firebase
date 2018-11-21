import * as React from 'react';
import { compose } from 'recompose';
import { drawerState, EnhancedProps } from '../hocs/drawerState';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import { Main } from '../templates/Main';

interface OuterProps {}

type InnerProps = EnhancedProps;

const AppComponent: React.SFC<EnhancedProps> = ({
  children,
  sideOpen,
  setSideOpen,
}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Main sideOpen={sideOpen} setSideOpen={setSideOpen}>
      {children}
    </Main>
  </MuiThemeProvider>
);

export const App = compose<InnerProps, OuterProps>(drawerState<InnerProps>())(
  AppComponent,
);
