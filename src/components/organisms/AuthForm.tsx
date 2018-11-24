import * as React from 'react';
import { InjectedFormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ILogin } from '../../modules/auth';

interface Props {
  login: (payload: ILogin) => void;
}

interface FormProps {
  login: Props['login'];
}

interface FormValues {
  email: string;
  password: string;
}

export const AuthForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
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
          login
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
  );
};
