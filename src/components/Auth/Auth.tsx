import * as React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withFirebase } from 'react-redux-firebase';
import { RootState } from '../../stores/store';

// interface Props {}

export const AuthComponent = (props: any) => {
  if (props.auth.isLoaded && props.auth.isEmpty) {
    return <Redirect to="/" />;
  }
  return props.children;
  // } else {}
};

const enhance = compose(
  withFirebase,
  connect((state: RootState) => ({
    auth: state.firebase.auth,
  })),
);

export const Auth = enhance(AuthComponent);
