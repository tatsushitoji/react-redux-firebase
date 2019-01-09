import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { PaperContainer } from '../../atoms';
import { LoginPayload } from '../../../modules/auth';
import { Button } from '@material-ui/core';

export interface Props {
  normalizeAnonymousUser: (
    payload: LoginPayload,
  ) => (_: React.SyntheticEvent) => void;
}

export const HomeComponent: React.SFC<Props> = ({ normalizeAnonymousUser }) => (
  <PaperContainer>
    <Typography component="h3" variant="h3">
      Home
    </Typography>
    <Typography variant="overline">this page is Home</Typography>
    <Typography variant="body2">
      This App contains <Link to="/counter">Counter</Link> and{' '}
      <Link to="/todo">Todo</Link>
    </Typography>
    <Button
      onClick={normalizeAnonymousUser({
        email: 'normalize@example.com',
        password: 'normalizenormalize',
      })}
    >
      ノーマライズ
    </Button>
  </PaperContainer>
);
