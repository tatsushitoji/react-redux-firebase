import * as React from 'react';
import { pure } from 'recompose';
import { withFormik, InjectedFormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
  add: (_: string) => void;
}

interface FormProps {
  add: Props['add'];
}

interface FormValues {
  text: string;
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => (
  <form onSubmit={props.handleSubmit}>
    <TextField
      label="add todo"
      name="text"
      value={props.values.text}
      placeholder="input text"
      // InputLabelProps={{
      //   shrink: true,
      // }}
      onChange={props.handleChange}
    />
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={props.values.text.length <= 0 || props.isSubmitting}
    >
      add
    </Button>
    <Button variant="contained" color="secondary" onClick={props.handleReset}>
      reset
    </Button>
  </form>
);

const EnhancedForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ text: '' }),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    if (values.text.trim().length <= 0) return;
    resetForm();
    props.add(values.text);
    setSubmitting(false);
  },
})(InnerForm);

export const TodoForm = pure(EnhancedForm);
