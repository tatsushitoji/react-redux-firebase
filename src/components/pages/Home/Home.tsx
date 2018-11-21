import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { PaperContainer } from '../../atoms';

export const Home: React.SFC = () => (
  <PaperContainer>
    <Typography component="h3" variant="h3">
      Home
    </Typography>
    <Typography variant="overline">this page is Home</Typography>
    <Typography variant="body2">
      This App contains <Link to="/counter">Counter</Link> and{' '}
      <Link to="/todo">Todo</Link>
    </Typography>
  </PaperContainer>
);
