import * as React from 'react';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import { Header, SideNavi } from '../organisms';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    container: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
  });

interface Props extends WithStyles<typeof styles> {
  sideOpen: boolean;
  setSideOpen: (_: React.SyntheticEvent) => void;
  theme?: Theme;
}

export const MainComponent: React.SFC<Props> = ({
  children,
  sideOpen,
  setSideOpen,
  classes,
}) => (
  <div className={classes.root}>
    <Header isOpen={sideOpen} toggleSideOpen={setSideOpen} />
    <SideNavi isOpen={sideOpen} toggleSideOpen={setSideOpen} />
    <div className={classes.container}>
      <div className={classes.toolbar} />
      {children}
    </div>
  </div>
);

export const Main = withStyles(styles)(MainComponent);
