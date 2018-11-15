import * as React from 'react';
import { pure } from 'recompose';
import classNames from 'classnames';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { WIDTH_DRAWER } from '../theme';

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#466168',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: WIDTH_DRAWER,
      width: `calc(100% - ${WIDTH_DRAWER}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
  });

interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  toggleSideOpen: (_: React.SyntheticEvent) => void;
  theme?: Theme;
}

const HeaderComponent: React.SFC<Props> = ({
  isOpen,
  toggleSideOpen,
  classes,
}: Props) => (
  <AppBar
    position="fixed"
    className={classNames(classes.appBar, {
      [classes.appBarShift]: isOpen,
    })}
  >
    <Toolbar disableGutters={!isOpen}>
      {isOpen ? null : (
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={toggleSideOpen}
          className={classNames(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h6" color="inherit" noWrap={true}>
        Hello My App
      </Typography>
    </Toolbar>
  </AppBar>
);

export const Header = pure(withStyles(styles)(HeaderComponent));
