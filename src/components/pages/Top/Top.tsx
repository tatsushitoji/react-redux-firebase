import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { PaperContainer } from '../../atoms';

export const TopComponent: React.SFC = () => (
  <PaperContainer>
    <Typography component="h3" variant="h3">
      TOP
    </Typography>
    <Typography variant="overline">Hello World</Typography>
    <Typography variant="body2">
      you should <Link to="/login">Log in</Link>
    </Typography>
    <Typography variant="body2">
      or <Link to="/signup">Sign up</Link>
    </Typography>
  </PaperContainer>
);
