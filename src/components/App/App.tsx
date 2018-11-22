import * as React from 'react';
import { compose } from 'recompose';
import { drawerState, Props as DraweStateProps } from '../../hocs/drawerState';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';
import { Main } from '../templates/Main';

interface OuterProps {}

const AppComponent: React.SFC<DraweStateProps> = ({
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

export const App = compose<DraweStateProps, OuterProps>(drawerState)(
  AppComponent,
);
