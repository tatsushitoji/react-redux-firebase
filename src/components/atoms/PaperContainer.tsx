import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      '&+&': {
        marginTop: theme.spacing.unit * 4,
      },
    },
  });

interface Props extends WithStyles<typeof styles> {
  theme?: Theme;
}
const PaperComponent: React.SFC<Props> = ({ children, classes, ...props }) => (
  <Paper className={classes.root} {...props}>
    {children}
  </Paper>
);

export const PaperContainer = withStyles(styles)(PaperComponent);
