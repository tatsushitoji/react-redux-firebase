import * as React from 'react';
import { withFormik, InjectedFormikProps } from 'formik';
import { Link } from 'react-router-dom';
import { PaperContainer } from '../../atoms/PaperContainer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ISignup } from '../../../modules/auth';

interface FormProps {
  signup: Props['signup'];
}

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const AuthForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => (
  <>
    <form onSubmit={props.handleSubmit}>
      <div>
        <TextField
          label="username"
          name="username"
          value={props.values.username}
          placeholder="input username"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <TextField
          label="email"
          name="email"
          value={props.values.email}
          placeholder="input email"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <TextField
          label="password"
          name="password"
          type="password"
          value={props.values.password}
          placeholder="input password"
          // InputLabelProps={{
          //   shrink: true,
          // }}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={props.values.email.length <= 0 || props.isSubmitting}
        >
          signup
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleReset}
        >
          reset
        </Button>
      </div>
    </form>
    <Typography variant="overline">
      or <Link to="login">Login</Link>
    </Typography>
  </>
);

const SignupForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '', username: '' }),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    if (values.email.trim().length <= 0) return;
    resetForm();
    props.signup({
      email: values.email,
      password: values.password,
      username: values.username,
    });
    setSubmitting(false);
  },
})(AuthForm);

export interface Props {
  signup: (payload: ISignup) => void;
}

export const SignupComponent: React.SFC<Props> = ({ signup }) => (
  <PaperContainer>
    <SignupForm signup={signup} />
  </PaperContainer>
);
