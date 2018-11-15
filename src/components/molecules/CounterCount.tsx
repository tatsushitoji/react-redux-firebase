import * as React from 'react';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: theme.spacing.unit * 2,
    },
    pre: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    number: {
      padding: theme.spacing.unit * 2,
    },
  });

interface Props extends WithStyles<typeof styles> {
  count: number;
  theme?: Theme;
}

const Component: React.SFC<Props> = ({ count, classes }) => (
  <div className={classes.root}>
    <Typography className={classes.pre} variant="overline">
      count is ...
    </Typography>
    <Typography className={classes.number} component="h3" variant="h1">
      {count}
    </Typography>
  </div>
);

export const CounterCount = withStyles(styles)(Component);
