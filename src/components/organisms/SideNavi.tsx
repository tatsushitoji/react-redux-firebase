import * as React from 'react';
import classNames from 'classnames';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
import { WIDTH_DRAWER } from '../theme';

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: WIDTH_DRAWER,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: WIDTH_DRAWER,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing.unit * 7 + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9 + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
  });

interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  toggleSideOpen: (_: React.SyntheticEvent) => void;
  theme?: Theme;
}

const SideDrawer: React.SFC<Props> = ({
  isOpen,
  toggleSideOpen,
  classes,
  theme,
}) => (
  <Drawer
    variant="permanent"
    className={classNames(classes.drawer, {
      [classes.drawerOpen]: isOpen,
      [classes.drawerClose]: !isOpen,
    })}
    classes={{
      paper: classNames({
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      }),
    }}
    open={isOpen}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={toggleSideOpen}>
        {theme && theme.direction === 'rtl' ? (
          <ChevronRightIcon />
        ) : (
          <ChevronLeftIcon />
        )}
      </IconButton>
    </div>
    <Divider />
    <List component="nav">
      <ListItem
        // tslint:disable-next-line
          component={({ innerRef, ...props }) => <NavLink {...props} to="/" />}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="HOME" />
      </ListItem>
      <ListItem
        // tslint:disable-next-line
          component={({ innerRef, ...props }) => (
          <NavLink {...props} to="/counter" />
        )}
      >
        <ListItemIcon>
          <ExposurePlus1Icon />
        </ListItemIcon>
        <ListItemText primary="COUNTER" />
      </ListItem>
      <ListItem
        // tslint:disable-next-line
          component={({ innerRef, ...props }) => (
          <NavLink {...props} to="/todo" />
        )}
      >
        <ListItemIcon>
          <DoneAllIcon />
        </ListItemIcon>
        <ListItemText primary="TODO" />
      </ListItem>
    </List>
  </Drawer>
);

export const SideNavi = withStyles(styles)(SideDrawer);
