import * as React from 'react';
import { withFormik } from 'formik';
import { PaperContainer } from '../../atoms/PaperContainer';
import { AuthForm } from '../../organisms/AuthForm';
import { ILogin } from '../../../modules/auth';

interface FormProps {
  login: Props['login'];
}

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    if (values.email.trim().length <= 0) return;
    resetForm();
    props.login({ email: values.email, password: values.password });
    setSubmitting(false);
  },
})(AuthForm);

export interface Props {
  login: (payload: ILogin) => void;
}

export const LoginComponent: React.SFC<Props> = ({ login }) => (
  <PaperContainer>
    <LoginForm login={login} />
  </PaperContainer>
);
